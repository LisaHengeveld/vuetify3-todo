<template>
  <div class="home">
    <list-tasks 
      v-if="$store.state.tasks.length"
    />
    <no-tasks 
      v-else
    />
    <button-done-sorting 
      v-if="$store.state.sorting"
    />
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import ListTasks from '@/components/Todo/ListTasks.vue';
import NoTasks from '@/components/Todo/NoTasks.vue';
import ButtonDoneSorting from '@/components/Todo/ButtonDoneSorting.vue';

export default defineComponent({
  name: 'TodoView',
  components: {
    "list-tasks": ListTasks,
    "no-tasks": NoTasks,
    "button-done-sorting": ButtonDoneSorting
  }
});
</script>

<style>
  .home {
    height: calc(100% - 80px);
  }
</style>
