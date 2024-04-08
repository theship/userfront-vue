<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/signup">Signup</RouterLink>
        <RouterLink to="/login">Login</RouterLink>
        <RouterLink to="/reset">Reset</RouterLink>
        <RouterLink to="/dashboard">Dashboard</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
/* header {
  line-height: 1.5;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 0;
  position: absolute;
  top: 0;
  left: 0;
  padding: 0.5rem 0;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline;
  padding: 0.5rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border-left: 0;
}

@media (min-width: 1024px) {
  header {
    display: block;
    padding-right: 0;
  }

  .logo {
    margin: 0.5rem;
  }

  nav {
    position: static;
    font-size: 1rem;
    padding: 0.5rem 0;
    text-align: center;
  }
} */
</style>
