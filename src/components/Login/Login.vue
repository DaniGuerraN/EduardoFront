<template >
  <section class="form-elegant" style="padding-left: 30%;">
    <mdb-row >
      <mdb-col md="7">
        <mdb-card >
          <mdb-card-body class="mx-4">
            <form @submit="onSubmit">
            <div class="text-center">
              <h3 class="dark-grey-text mb-5" ><strong>Login</strong></h3>
            </div>
            <label for="email">usuario</label>
            <mdb-input v-model.trim="form.username" />
            <label for="email">Contraseña</label>
            <mdb-input v-model.trim="form.password" type="password" containerClass="mb-0"/>
            <br>
            <div class="text-center mb-3">
              <b-btn variant="success" type="submit" >Iniciar sesión</b-btn>
            </div>
            </form>
          </mdb-card-body>
          <mdb-modal-footer class="mx-5 pt-3 mb-1">
          </mdb-modal-footer>
        </mdb-card>
      </mdb-col>
    </mdb-row>
  </section>
</template>


<script>
  import { mdbRow, mdbCol, mdbCard, mdbCardBody, mdbInput, mdbBtn, mdbIcon, mdbModal, mdbModalBody, mdbModalFooter } from 'mdbvue';
  import axios from "axios";
  export default {
    name: 'FormsPage',
    components: {
      mdbRow,
      mdbCol,
      mdbCard,
      mdbCardBody,
      mdbInput,
      mdbBtn,
      mdbIcon,
      mdbModal,
      mdbModalBody,
      mdbModalFooter
    },
    data() {
      return {
        form:{
                username: '',
                password: ''
            }
      };
    },
    methods: {
       onSubmit(evt){
            const path = `http://ec2-54-236-214-195.compute-1.amazonaws.com/api/v1/login`
            axios.post(path, this.form).then((response) => {
              this.form.username = response.data.username
              this.form.password = response.data.password
               
              console.log(response.data.token)
              localStorage.token = "Token " + response.data.token
              location.href='/ListAlumno'
            }).catch((error) => {
                swal ( "Not good" ,  "Correo o contraseña icorrectos" ,  "error" )
            })
            evt.preventDefault()
        }
    }
  }
</script>
<style>
  .form-elegant .font-small {
    font-size: 0.8rem; }

  .form-elegant .z-depth-1a {
    -webkit-box-shadow: 0 2px 5px 0 rgba(55, 161, 255, 0.26), 0 4px 12px 0 rgba(121, 155, 254, 0.25);
    box-shadow: 0 2px 5px 0 rgba(55, 161, 255, 0.26), 0 4px 12px 0 rgba(121, 155, 254, 0.25); }

  .form-elegant .z-depth-1-half,
  .form-elegant .btn:hover {
    -webkit-box-shadow: 0 5px 11px 0 rgba(85, 182, 255, 0.28), 0 4px 15px 0 rgba(36, 133, 255, 0.15);
    box-shadow: 0 5px 11px 0 rgba(85, 182, 255, 0.28), 0 4px 15px 0 rgba(36, 133, 255, 0.15); }
  body {
     background-color: #24ABE6;
       }

</style>