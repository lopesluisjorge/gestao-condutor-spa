<template>
  <div class="container">
    <h1>Cadastro de Estudante</h1>
    <form @submit.prevent="salvar">
      <div class="form-group">
        <label for="nome">Nome</label>
        <input type="text" id="nome" class="form-control" :v-model="nome" />
      </div>
      <div class="form-group">
        <label>Sexo</label>
        <div class="form-control">
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="radio"
              name="sexo"
              id="m"
              value="MASCULINO"
              v-model="sexo"
            />
            <label class="form-check-label" for="m">Masculino</label>
          </div>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="radio"
              name="sexo"
              id="f"
              value="FEMININO"
              v-model="sexo"
            />
            <label class="form-check-label" for="f">Feminino</label>
          </div>
        </div>
      </div>
      <div class="form-group">
        <label for="cpf">CPF</label>
        <input type="text" class="form-control" :v-model="cpf" />
      </div>

      <div class="form-group">
        <label for="endereco">Enderereço</label>
        <input type="text" id="endereco" class="form-control" />
      </div>

      <div class="form-row">
        <div class="form-group col-md-6">
          <label for>Telefone Principal</label>
          <input type="text" class="form-control" :v-model="telefone1" />
        </div>
        <div class="form-group col-md-6">
          <label for>Telefone Secundário</label>
          <input type="text" class="form-control" :v-model="telefone1" />
        </div>
      </div>
      <div class="form-group">
        <label for="curso">Curso</label>
        <select class="form-control" id="curso" v-model="cursoSelecionado">
          <option v-for="curso in cursos" :key="curso.id">
            <span>{{ curso.nome }}</span>
          </option>
        </select>
      </div>
      <div class="form-group">
        <button class="btn btn-success">Cadastrar</button>
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  async created() {
    this.cursos = await axios
      .get("http://127.0.0.1:8080/curso")
      .then(res => res.data);
  },
  data() {
    return {
      nome: "",
      sexo: "",
      cpf: "",
      endereco: "",
      telefone1: "",
      telefone2: "",
      cursoSelecionado: "",
      tipoCondutor: "ESTUDANTE",
      cursos: []
    };
  }
};
</script>

<style>
</style>