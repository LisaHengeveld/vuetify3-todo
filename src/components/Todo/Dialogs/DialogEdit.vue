<template>
    <v-dialog
      v-model="dialogs.edit"
      persistent
      width="auto"
    >
    
      <v-card class="pa-2" min-width="300px">
        <v-card-title class="text-h5">
          Edit task
        </v-card-title>
        <v-card-text>
          Edit the title of this task
          <v-text-field
            v-model="taskTitle"
            @keyup.enter="saveTask"
            color="primary"
            variant="underlined"
          />
        </v-card-text>
        <v-card-actions class="justify-end">
          <v-spacer></v-spacer>
          <v-btn
            @click="dialogs.edit = false"
            color="primary-darken-1"
            variant="text"
          >
            Cancel
          </v-btn>
          <v-btn
            @click="saveTask"
            :disabled="taskTitleInvalid"
            color="primary"
            variant="text"
          >
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
</template>

<script>
export default {
  props: [
    'task',
    'dialogs'
  ],
  data() {
    return {
      taskTitle: null
    }
  },
  computed: {
    taskTitleInvalid() {
      return !this.taskTitle || this.taskTitle === this.task.title;
    }
  },
  methods: {
    saveTask() {
      if(!this.taskTitleInvalid) {
        let payload = {
          id: this.task.id,
          title: this.taskTitle
        };
        this.$store.dispatch('updateTaskTitle', payload);
        this.dialogs.edit = false;
      }
    }
  },
  mounted() {
    this.taskTitle = this.task.title;
  }
}
</script>

<style scoped>
.v-btn[disabled] {
  color: black !important;
}
</style>