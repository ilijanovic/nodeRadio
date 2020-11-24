<template>
  <button v-ripple><slot></slot></button>
</template>

<style lang="scss" scoped>
button {
  border: none;
  padding: 10px 20px;
  color: var(--light);
  background: var(--dark);
  border-radius: var(--radius);
}
</style>