<template >
<div class="container">
    <div class="row">
        <div class="col text-left">
            <h2>
                Nuevo registro
            </h2>
        </div>
    </div>

    <div class="row">
        <div class="col">
            <div class="card">
                <div class="card-body">
                    <form @submit="onSubmit">
                        <div class="form-group row">
                            <label for="name" class="col-sm-2 col-form-label">Nombre</label>
                            <div class="col-sm-6">
                                <input type="text" placeholder="Nombre" name="name" class="form-control" v-model.trim="form.name"> 
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="lastname" class="col-sm-2 col-form-label">apellidos</label>
                            <div class="col-sm-6">
                                <input type="text" placeholder="apellidos" name="lastname" class="form-control" v-model.trim="form.lastname">
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="age" class="col-sm-2 col-form-label">edad</label>
                            <div class="col-sm-6">
                                <input type="text" placeholder="edad" name="age" class="form-control" v-model.trim="form.age">
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="gender" class="col-sm-2 col-form-label">genero</label>
                            <div class="col-sm-6">
                                <input type="text" placeholder="genero" name="gender" class="form-control" v-model.trim="form.gender">
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="address" class="col-sm-2 col-form-label">Dirección</label>
                            <div class="col-sm-6">
                                <input type="text" placeholder="Dirección" name="address" class="form-control" v-model.trim="form.address">
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="carrera" class="col-sm-2 col-form-label">Carrera</label>
                            <div class="col-sm-6">
                                <select v-model.trim="form.carrera" class="form-control">
                                <option disabled value="">Seleccione una opcion</option>
                                <option> Ingeniería en Desarrollo de Software</option>
                                <option> Ingeniería Mecatronica</option>
                                <option> Ingeniería Biomedica</option>
                                <option> Ingeniería en Tecnología Ambiental</option>
                                <option> Ingeniería Agroindustrial</option>
                                <option> Ingeniería Petrolera</option>
                                <option> Ingeniería en Tecnologías de Manofacturas</option>
                            </select>
                            </div>
                        </div>


                        <div class="rows">
                            <div class="col text-left">
                                <b-button type="submit" variant="primary">Crear</b-button>
                                <b-button type="submit" class="btn-large-space" :to="{name:'ListAlumno'}" variant="danger">Cancelar</b-button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
  
</template>

<script>
import swal from 'sweetalert';
import axios from 'axios'
export default {
    
    data () {
        return{
            form:{
                name:'',
                lastname:'',
                age:'',
                gender:'',
                address:'',
                carrera:''
            }
        }
    },
    methods:{
        
        onSubmit(evt){
            let config = {
                headers: {
                    Authorization: 'Token af29dcaf7c4de200825282777018036b1adabcc0'
                }
            }
            const path = `http://ec2-54-236-214-195.compute-1.amazonaws.com/api/v1/r registro/`
            axios.post(path, this.form, {headers: { Authorization: localStorage.token}}).then((response) => {
                this.form.name = response.data.name
                this.form.lastname = response.data.lastname
                this.form.age = response.data.age
                this.form.gender = response.data.gender
                this.form.carrera = response.data.carrera
                this.form.address = response.data.address
                swal ( "Se ha generado correctamente" ,  "Todo cool!" ,  "success" ).then(()=>{
                    location.href = '/ListAlumno'
                })

            }).catch((error) => {
                swal ( "Not good" ,  "Something went bad!" ,  "error" )
            })
            evt.preventDefault()
        }
    }, 
    created(){
    }
}
</script>

<style>

</style>