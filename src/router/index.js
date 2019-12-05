import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ListAlumno from '@/components/Alumnos/ListAlumno'
import EditarAlumno from '@/components/Alumnos/EditarAlumno'
import NuevoAlumno from '@/components/Alumnos/NuevoAlumno'
import Login from '@/components/Login/Login'
import Registro from '@/components/Registro/Registro'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/ListAlumno',
      name: 'ListAlumno',
      component: ListAlumno
    },
    {
      path: '/EditarAlumno/:estudianteId',
      name: 'EditarAlumno',
      component: EditarAlumno
    },
    
    {
      path: '/Nuevo',
      name: 'NuevoAlumno',
      component: NuevoAlumno
    },
    {
      path: '/Registro',
      name: 'Registro',
      component: Registro
    },
    
  ],
  mode:'history'
})
