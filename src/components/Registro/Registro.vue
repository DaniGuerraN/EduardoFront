<template >
<div class="container">
    <div class="row">
        <div class="col text-left">
            <h2>
                Registro de usuario
            </h2>
        </div>
    </div>

    <div class="row">
        <div class="col">
            <div class="card">
                <div class="card-body">
                    <form @submit="onSubmit">
                        <div class="form-group row">
                            <label for="usuario" class="col-sm-2 col-form-label">Usuario</label>
                            <div class="col-sm-6">
                                <input type="text" placeholder="Usuario" name="usuario" class="form-control" v-model.trim="form.usuario"> 
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="correo" class="col-sm-2 col-form-label">Correo electrónico</label>
                            <div class="col-sm-6">
                                <input type="text" placeholder="Correo" name="correo" class="form-control" v-model.trim="form.correo">
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="contrase{a" class="col-sm-2 col-form-label">Contraseña</label>
                            <div class="col-sm-6">
                                <input type="password" placeholder="Contraseña" name="contraseña" class="form-control" v-model.trim="form.correo">
                            </div>
                        </div>


                   


                        <div class="rows">
                            <div class="col text-left">
                                <b-button type="submit" variant="primary">Crear</b-button>
                                <b-button type="submit" class="btn-large-space" :to="{name:'Login'}" variant="danger">Cancelar</b-button>
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
                nombre:'',
                apellidos:'',
                edad:'',
                sexo:'',
                direccion:'',
                carrera:''
            }
        }
    },
    methods:{
        onSubmit(evt){
            const path = `http://127.0.0.1:8000/api/v1/estudiantes/`
            axios.post(path, this.form).then((response) => {
                this.form.usuario = response.data.usuario
                this.form.correo = response.data.correo
                this.form.contraseña = response.data.contraseña
                swal ( "Se ha registrado correctamente!" ,  "Bienvenido!" ,  "success" )
            }).catch((error) => {
                console.log(error)
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