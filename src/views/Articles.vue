<script setup lang="ts">
import CodeSnippet from '../components/CodeSnippet.vue'
</script>

<template>
  <h1>Articles</h1>

  <section class="articles">
    <article>
      <h3>
        <router-link to="/articles/sample">
          How to make commits and dispatches type safe in Vuex 4 w/ Vue 3
        </router-link>
      </h3>

      <pre>Wedensday, July 7th</pre>

      <summary>
        Now that we know how to initiate our store with types modules, it's time
        to make those commits and dispatches type safe
        <br />
        <!--  <CodeSnippet src="https://carbon.now.sh/embed/R5Hl16iWrRFEA9ugevrz" /> -->
      </summary>
    </article>
  </section>
</template>

<style lang="scss" scoped>
.articles {
  text-align: start;

  h3 {
    a {
      text-decoration: underline;
    }
  }
}
</style>
