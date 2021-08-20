<template>
  <div>
    <h3>Finance</h3>
    <nav>
      <li><router-link to="/finance">Home</router-link></li>
    </nav>
    <h3>Presta</h3>
    <nav>
      <li><router-link to="/presta">Home</router-link></li>
      <li><router-link to="/presta/about">About</router-link></li>
    </nav>
    <router-view />
  </div>
</template>


<style lang="scss">
</style>
