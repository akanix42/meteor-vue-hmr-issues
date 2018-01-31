<template>
  <div>
    Hello {{target}}!
  </div>
</template>

<script>
  export default {
    name: 'default',
    data() {
      return {
        target: 'World',
      };
    },
  }
</script>
