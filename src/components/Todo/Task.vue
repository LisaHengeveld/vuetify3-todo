<template>
  <div>
        <v-list-item 
          :value="task.title"
          @click="$store.dispatch('doneTask', task.id)"
          :class="{ 'bg-deep-purple-lighten-3' : task.done }"
          class="white"
          :ripple="false"
        >
          <template v-slot:prepend>
            <v-list-item-action start>
              <v-checkbox-btn :model-value="task.done" :ripple="false"></v-checkbox-btn>
            </v-list-item-action>
          </template>

          <v-list-item-title
            :class="{ 'text-decoration-line-through' : task.done }"
          >
            {{ task.title }}
          </v-list-item-title>

          <template v-slot:append>
            <v-list-item-action v-if="task.dueDate" :class="task.done ? 'text-white' : 'text-grey'">
                <v-icon class="pa-3" size="x-small">mdi-calendar</v-icon>
                <span class="dueDate">{{ niceDate(task.dueDate) }}</span>
            </v-list-item-action>

            <v-list-item-action>
              <task-menu :task="task"/>
            </v-list-item-action>

            <v-list-item-action
              v-if="$store.state.sorting"
            >
              <v-btn flat class="btn-transparent text-primary handle" icon="mdi-drag-horizontal-variant" :ripple="false"></v-btn>
            </v-list-item-action>
          </template>
        </v-list-item>
        <v-divider></v-divider>
    </div>
</template>

<script>
import { format } from 'date-fns';
import TaskMenu from '@/components/Todo/TaskMenu.vue';

export default {
    props: ['task'],
    methods: {
      niceDate(value) {
        return format(new Date(value), 'MMM d');
      }
    },
    components: {
      "task-menu": TaskMenu
    }
}
</script>

<style>
  .dueDate {
    font-size: small;
  }

  .sortable-ghost {
    opacity: 0 !important;
  }

  .white {
    background-color: white;
  }

  .sortable-drag {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  }

  .btn-transparent {
    background: transparent;
  }

  .v-selection-control__input:hover::before {
    opacity: 0;
  }
</style>