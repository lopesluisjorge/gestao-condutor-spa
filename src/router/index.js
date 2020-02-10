import Vue from 'vue'
import VueRouter from 'vue-router'

import GcEscolhaTipo from '@/components/cadastro/GcEscolhaTipo';
import GcCadastroEstudante from '@/components/cadastro/GcCadastroEstudante';
import GcCadastroServidor from '@/components/cadastro/GcCadastroServidor';
import GcCadastroTerceirizado from '@/components/cadastro/GcCadastroTerceirizado';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/PaginaInicial.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/About.vue')
  },
  {
    path: '/cadastro/condutor',
    name: 'cadastro.inicio',
    component: GcEscolhaTipo
  },
  {
    path: '/cadastro/condutor/estudante',
    name: 'cadastro.estudante',
    component: GcCadastroEstudante
  },
  {
    path: '/cadastro/condutor/servidor',
    name: 'cadastro.servidor',
    component: GcCadastroServidor
  },
  {
    path: '/cadastro/condutor/terceirizado',
    name: 'cadastro.terceirizado',
    component: GcCadastroTerceirizado
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
