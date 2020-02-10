<template>
  <div class="container">
    <form @submit.prevent="continuar">
      <div class="form-check">
        <input
          class="form-check-input"
          type="radio"
          name="tipo_condutor"
          id="estudnte_id"
          value="1"
          v-model="tipoCondutor"
        />
        <label class="form-check-label" for="estudnte_id">Estudante</label>
      </div>
      <div class="form-check">
        <input
          class="form-check-input"
          type="radio"
          name="tipo_condutor"
          id="servidor_id"
          value="2"
          v-model="tipoCondutor"
        />
        <label class="form-check-label" for="servidor_id">Servidor</label>
      </div>
      <div class="form-check">
        <input
          class="form-check-input"
          type="radio"
          name="tipo_condutor"
          id="terceirizado_id"
          value="3"
          v-model="tipoCondutor"
        />
        <label class="form-check-label" for="terceirizado_id">Terceirizado</label>
      </div>
      <button class="btn btn-primary">Continuar</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "gc-escolha-tipo",
  data() {
    return {
      tipoCondutor: null
    };
  },
  methods: {
    goBack() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push("/");
    },
    continuar() {
      if (!this.tipoCondutor) {
        alert("Selecione um tipo de condutor");
      }
      switch (this.tipoCondutor) {
        case "1":
          this.$router.push({ name: "cadastro.estudante" });
          return;
        case "2":
          this.$router.push({ name: "cadastro.servidor" });
          return;
        case "3":
          this.$router.push({ name: "cadastro.terceirizado" });
          return;
        default:
          break;
      }
    }
  }
};
</script>

<style>
</style>