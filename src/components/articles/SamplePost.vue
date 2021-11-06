<script setup lang="ts">
import CodeSnippet from '../CodeSnippet.vue'

defineProps({
  post: {
    type: Object,
    required: true,
    default: () => ({
      title: 'This is a sample post',
      body: 'This is the body of the sample post'
    })
  }
})
</script>

<template>
  <div class="sample-post">
    <h1>{{ post.title }}</h1>
    <p>{{ post.body }}</p>
    <!--  <CodeSnippet src="https://carbon.now.sh/z1aIUeYdZW8SpBqdEk5A" /> -->
  </div>
</template>
