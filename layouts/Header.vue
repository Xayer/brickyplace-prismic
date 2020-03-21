<template>
  <header>
    <a href="/">
      <h1>Bricky Place</h1>
    </a>
  </header>
</template>
<style lang="scss" scoped>
    header {
      display: flex;
      width: 100%;
        max-width: 1300px;
        margin: 2rem auto 2rem;
        padding: 1rem 0;
        justify-content: flex-start;
      a {
        color: #444;
        text-decoration: none;
        font-size: 2rem;
        transition: .25s ease;
        &:focus, &:hover {
          color: #888;
        }
      }
    }
</style>
