<template>
  <v-list
      class="pt-0"
      lines="two"
      select-strategy="classic"
    >

    <draggable v-model="tasks" item-key="id" handle=".handle">
        <template #item="{ element: task }">
            <task
                :key="task.id"
                :task="task"
            />
        </template>
    </draggable>

    </v-list>
</template>

<script>
import Task from '@/components/Todo/Task.vue';
import draggable from "vuedraggable";

export default {
    computed: {
        tasks: {
            get() {
                return this.$store.getters.tasksFiltered
            },
            set(value) {
                this.$store.dispatch('setTasks', value)
            }
        }
    },
    components: {
        "task": Task,
        draggable
    }
}
</script>