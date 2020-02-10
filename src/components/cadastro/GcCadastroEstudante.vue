<template>
  <div class="container">
    <h1>Cadastro de Estudante</h1>
    <form @submit.prevent="salvar">
      <div class="form-group">
        <label for="nome">Nome</label>
        <input type="text" id="nome" class="form-control" required :v-model="nome" />
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
        <input type="text" class="form-control" required :v-model="cpf" />
      </div>

      <div class="form-group">
        <label for="endereco">Enderereço</label>
        <input type="text" id="endereco" class="form-control" required :v-model="endereco" />
      </div>

      <div class="form-group">
        <label for="telefone">Telefone Principal</label>
        <input type="text" id="telefone" class="form-control" required :v-model="telefone" />
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
      telefone: "",
      cursoSelecionado: "",
      tipoCondutor: "ALUNO",
      cursos: []
    };
  },
  methods: {
    async salvar() {
      const condutor = {
        nome: this.nome,
        sexo: this.sexo,
        cpf: this.cpf,
        endereco: this.endereco,
        telefone: this.telefone,
        curso: this.cursoSelecionado,
        tipoCondutor: this.tipoCondutor
      };

      const url = "http://127.0.0.1:8080/condutor";
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(condutor)
      }).then(data => {
        if (data.status === 201) this.$router.push("/");
      });

      console.log(response);

      //axios.post("http://127.0.0.1:8080/condutor", condutor).catch(e => console.log(e));
    }
  }
};
</script>

<style>
</style>