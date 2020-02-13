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
        padding: 1rem 0;
        background-color: #e2e2e2;
		justify-content: center;
		a {
			color: #444;
			text-decoration: none;
			&:focus, &:hover {
				color: #888;
			}
		}
    }
</style>
