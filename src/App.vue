<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer">
      <v-img
        class="pa-4 pt-10"
        height="230"
        cover
        src="mountains.jpg"
        gradient="to top right, rgba(65,29,100,.8), rgba(215,211,244,.8)"
      >
      <v-avatar class="mb-5" size="70" color="deep-purple-darken-4">
        <span class="text-h5">LH</span>
      </v-avatar>
      <div class="text-white text-subtitle-1 font-weight-bold">Lisa Hengeveld</div>
      <div class="text-white text-subtitle-2">gr_hengeveld</div>
      </v-img>
        <v-list nav>
          <v-list-item
            v-for="item in items"
            :key="item.value"
            :title="item.title"
            :prepend-icon="item.prependIcon"
            :to="item.to"
          ></v-list-item>
        </v-list>
    </v-navigation-drawer>

    <v-app-bar
      color="teal-darken-4"
      image="mountains.jpg"
      :height="$route.path === '/' ? '230' : '150'"
    >
      <template v-slot:image>
        <v-img
          gradient="to top right, rgba(65,29,100,.8), rgba(215,211,244,.8)"
        ></v-img>
      </template>

      <v-container class="header-container pt-3">
        <v-row>
            <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
            <v-spacer></v-spacer>
            <search />
        </v-row>
        <v-row>
          <v-app-bar-title class="text-h4 ml-4">{{ $store.state.appTitle }}</v-app-bar-title>
        </v-row>
        <v-row>
          <live-date-time />
        </v-row>
        <v-row
          v-if="$route.path === '/'"
        >
          <field-add-task />
        </v-row>
      </v-container>
      
    </v-app-bar>


    <v-main>
      <router-view></router-view>
      <snackbar />
    </v-main>
  </v-app>
</template>

<script setup>
  import { ref } from 'vue'

  const drawer = ref(null)
</script>

<script>
  import FieldAddTask from '@/components/Todo/FieldAddTask.vue';
  import Snackbar from "@/components/Shared/Snackbar.vue";
  import Search from "@/components/Tools/Search.vue";
  import LiveDateTime from "@/components/Tools/LiveDateTime.vue";

  export default {
    data: () => ({ 
      drawer: null,
      items: [
        {
          title: 'Todo',
          value: 1,
          prependIcon: 'mdi-format-list-checks',
          to: '/'
        },
        {
          title: 'About',
          value: 2,
          prependIcon: 'mdi-help-box',
          to: '/about'
        },
      ],
    }),
    mounted() {
      this.$store.dispatch('getTasks')
    },
    components: {
      "field-add-task": FieldAddTask,
      "snackbar": Snackbar,
      "search": Search,
      "live-date-time": LiveDateTime
    }
  }
</script>

<style scoped>
  .v-toolbar__prepend {
    align-self: auto !important;
  }

  .header-container {
    max-width: none !important;
  }
</style>