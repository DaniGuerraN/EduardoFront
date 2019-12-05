<template lang="html">
  <div class="container">
    <div class="row">
      <div class="col text-left">
        <h2>Listado de Alumnos</h2>
        <b-button  variant="success" class="primary" :to="{name:'NuevoAlumno'}">
          Nuevo estudiante
        </b-button>
        <input placeholder="Buscar" v-model.trim="criteria"></input>
        </div>
        <br>

        <div class="col-md-12">
          <b-table hover bordered striped hover 
          :items="Alumnos" 
          :fields="fields" 
          :sort-by.sync="sortBy" 
          :sort-desc.sync="sortDesc"
          :filter="criteria"
          responsive="sm"
          >
            <template v-slot:cell(action)="data" >
                <b-button size="sm" variant="primary" :to="{name:'EditarAlumno', params:{estudianteId : data.item.id}}">Editar</b-button>
                <b-button size="sm" variant="danger" v-on:click="Deletetetete(data.item.id)">Eliminar</b-button>
            </template>
          </b-table>
      </div>
    </div>
  </div>
</template>

<script>
import swal from 'sweetalert';
import axios from "axios";
export default {
  data() {
    return {
      criteria: "",
      sortBy: 'nombre',
      sortDesc: false,
      fields: [
        { key: "name", label: "Nombre" , sortable: true },
        { key: "age", label: "Edad" },
        { key: "carrera", label: "Carrera" },
        { key: "action", label: "Acciones" }
      ],
      Alumnos: []
    }
  },
  methods: {

    Deletetetete(x){
      
      swal("¿Estas seguro que deseas eliminar?")
  .then((value) => {
    const path="http://ec2-54-236-214-195.compute-1.amazonaws.com/api/v1/r registro/"+x+""
    console.log("Esto es path "+path)
    axios.delete(path, {headers: { Authorization: localStorage.token}}).then((response) => {
      location.href='/ListAlumno'
    })
  });
    },
    getAlumnos() {
      const path = "http://ec2-54-236-214-195.compute-1.amazonaws.com/api/v1/r registro/";
      axios
        .get(path, {headers: { Authorization: localStorage.token}})
        .then(response => {
          this.Alumnos = response.data;
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  created() {
    this.getAlumnos();
  }
};
</script>

<style>
</style>