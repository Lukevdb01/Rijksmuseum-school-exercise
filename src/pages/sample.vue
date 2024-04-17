<script setup>
    const title = 'Hello World'
    const description = 'This is a sample page'
</script>

<template>
    <div>
        <h1>{{ title }}</h1>
        <p>{{ description }}</p>
    </div>
</template>

<script>
export default {
  setup() {
    const title = 'Hello, World!'
    const description = 'This is a sample page'
    return { title, description }
  }
}
</script>

<style scoped>
    h1 {
        color: red;
    }

    p {
        color: blue;
    }
</style>