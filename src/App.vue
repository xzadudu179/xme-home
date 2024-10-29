<script setup>
import Hello from './components/Hello.vue'
</script>

<template>
  <main>
    <div class="card">
          <div class="avatar">
          <img alt="xzadudu179" class="logo" src="./assets/img/avatar.png" height="525" />
        </div>
        <article>
          <Hello/>
        </article>
    </div>
  </main>
</template>

<style scoped>
/* .logo {
  filter: drop-shadow(0 0 10px var(--primary-color));
} */
.card {
  width: 1200px;
}
</style>
