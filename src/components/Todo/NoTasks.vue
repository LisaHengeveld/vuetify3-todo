<template>
  <div class="container">
    <div
      class="no-tasks"
    >
      <v-icon color="primary" icon="mdi-check" size="100"></v-icon>
      <div class="text-h5 text-primary">No tasks</div>
    </div>
  </div>
</template>

<style>
  .container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: calc(100% - 80px);
  }

  .no-tasks {
    /* position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%); */
    opacity: 0.5;
  }
</style>