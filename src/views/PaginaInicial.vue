<template>
  <div class="container">
    <h1>Sistema de Veículos e Condutores</h1>

    <p>Cadastre-se e começe a utilizar o estacioanmento do IFMA - Campus Monte Castelo</p>

    <p>Para usar o sistema escolha uma das opções:</p>

    <div>
      <router-link class="btn btn-primary" :to="{ name: 'cadastro.inicio' }">Cadastrar</router-link>&nbsp;ou
      <router-link class="btn btn-primary" to="/login">Entrar</router-link>
    </div>
  </div>
</template>

<style scoped>
</style>