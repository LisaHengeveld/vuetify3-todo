<template>
  <v-snackbar
      v-model="$store.state.snackbar.show"
    >
      {{ $store.state.snackbar.text }}

      <template v-slot:actions>
        <v-btn
          @click="$store.commit('hideSnackbar')"
          variant="text"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
</template>

<script>
export default {
    
}
</script>

<style>

</style>