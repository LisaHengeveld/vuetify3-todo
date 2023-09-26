<template>
    <v-dialog
      v-model="dialogs.delete"
      persistent
      width="auto"
    >
    
      <v-card class="pa-2">
        <v-card-title class="text-h5">
          Delete task?
        </v-card-title>
        <v-card-text>Are you sure you want to delete this task?</v-card-text>
        <v-card-actions class="justify-end">
          <v-spacer></v-spacer>
          <v-btn
            @click="dialogs.delete = false"
            color="primary-darken-1"
            variant="text"
          >
            No
          </v-btn>
          <v-btn
            @click="$store.dispatch('deleteTask', task.id)"
            color="red"
            variant="text"
          >
            Yes
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
  ]
}
</script>