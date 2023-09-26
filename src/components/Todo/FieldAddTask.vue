<template>
    <v-text-field
      v-model="newTaskTitle"
      @keyup.enter="addTask"
      class="field-add-task pa-3"
      placeholder="Add task"
      variant="outlined"
      hide-details
      clearable
    >
    
    <template v-slot:append-inner>
      <v-btn
        @click="addTask"
        flat
        class="text-white"
        icon="mdi-plus"
        :disabled="newTaskTitleInvalid"
      >
      </v-btn>
    </template>
    
    </v-text-field>
</template>

<script>
export default {
  data() {
    return {
      newTaskTitle: ''
    }
  },
  computed: {
    newTaskTitleInvalid() {
      return !this.newTaskTitle;
    }
  },
  methods: {
    addTask() {
      if(!this.newTaskTitleInvalid) {
        this.$store.dispatch('addTask', this.newTaskTitle);
        this.newTaskTitle = '';
      }
    }
  },
}
</script>

<style>
.v-btn[disabled] {
  color: white !important;
}

.v-btn[disabled] .v-btn__overlay {
  display: none;
}

.field-add-task .v-field--focused {
  background: rgba(53, 32, 100, 0.4) !important;
  transition: background 0.3s;
}
</style>