<script setup lang="ts"></script>

<template>
  <div class="navbar">
    <h2 class="logo">
      <router-link to="/">Stanislav Samisko</router-link>
    </h2>
    <nav>
      <router-link to="/">Main</router-link>
      <router-link to="/articles">Articles</router-link>
    </nav>
  </div>
</template>

<style lang="scss" scoped>
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;

  nav {
    a {
      margin-left: 20px;
      font-size: 1.2rem;
      font-weight: 600;
      position: relative;

      &:after {
        content: '';
        background-color: white;
        width: 0;
        height: 3px;
        position: absolute;
        bottom: -10px;
        left: 0;
        transition: all 0.5s ease-in-out;
      }

      &.router-link-active {
        color: rgb(156, 186, 211);

        &:after {
          transition: all 0.2s ease-in-out;
          width: 100%;
        }
      }
    }
  }
}
</style>
