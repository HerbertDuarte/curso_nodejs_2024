<script setup>
import Card from "./components/Card.vue"
import { ref} from "vue"
import Notificacao from "./components/Notificacao.vue";
/* 1. Usando mascaras */
const nome = "Herbert"
const idade = 21
const aparece = false
function mostrarTexto(){
  return "Meu texto"
}

/* 2. eventos */
function mostrarConsole(){
  console.log('Olá')
}

/* 3. reatividade */

const framework = ref("Vue")
function alterarFr(){
  framework.value = 'Angular'
}

const cont = ref(0)
function add(){
  cont.value++
}

/* 4. atributos dinamicos */

const valorInicial = "Input começa com esse valor"

/* 5. ligação bicondicional */

const inputValue = ref('')
const numero = ref(0)
const mul = ref(0)
const dolar = ref(0)

/* 7. IF E ELSE */

const mostrar = ref(true)

/* 8. Repetições */

const linguagens = ref(["Java", "Javascript", "Php", "Dart"])
const cards = [
  {
    titulo : "Teste 1",
    conteudo : "BLA BLA BLA 1"
  },
  {
    titulo : "Teste 2",
    conteudo : "BLA BLA BLA 2"
  },
  {
    titulo : "Teste 3",
    conteudo : "BLA BLA BLA 3"
  }
]
</script>

<template>
<main>
  
  <h1>Sejam bem vindos à live de fundamentos do vue js</h1>
  
  <hr>
  <h2>1. Usando máscaras</h2>
  <p>meu nome é {{ nome }}, tenho {{ idade }} anos</p>
  <p>Mostrar nome {{ mostrarTexto() }}</p>
  
  
  <hr>
  <h2>2. Eventos</h2>
  
  <button @click="mostrarConsole">
    Clique aqui
  </button>
  
  <hr>
  <h2>3. Reatividade</h2>
  
  <p>Nosso framework é o {{ framework }}</p>
  <button @click="alterarFr">
    Alterar framework
  </button>
  
  <hr>
  
  
  <p>Contador : {{ cont }}</p>
  <button @mouseenter="add">
    Adicionar
  </button>

  <hr>
  <h2>4. Atributos dinâmicos com V-BIND</h2>
  <img width="100px" :src="url" alt="Imagem do vue js">
  <input :value="valorInicial" type="text">

  <hr>
  <h2>5. Ligação bicondicional</h2>
  <input v-model="inputValue" type="text">
  <p>{{ inputValue }}</p>
  
  <hr>

  <input v-model="numero" type="number">
  <input v-model="mul" type="number">
  <p class="card-container">{{ mul }} x {{ numero }} = {{ numero * mul }}</p>

  <hr>
  <p>Digite um valor em dolar</p>
  <input v-model="dolar" type="number">
  <p>Esse valor em Real é : R$ {{ (dolar * 4.86).toFixed(2).toString().replace(".", ",")  }}</p>

  <hr>
  <h2>6. Componentes</h2>
  <Card titulo="Primeiro título" conteudo="Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus voluptatem ea nobis, veniam ipsum dolore ducimus sint repellendus eligendi temporibus necessitatibus ex magni excepturi iure provident neque commodi veritatis ut."/>
  <Card titulo="Segundo título" conteudo="Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus voluptatem ea nobis, veniam ipsum "/>
  <Card titulo="Terceiro título" conteudo="Lorem ipsum dolor sit amet consectetur adipisicing elit."/>

  <hr>
  <h2>7. IF e ELSE</h2>
  <button @click="mostrar = !mostrar">
    Esconde/mostra
  </button>
  <p v-if="mostrar">Texto surpresa</p>
  <p v-else>O texto está escondido</p>

  <hr>
  <h2>8. Estruturas de repetição</h2>

  <p v-for="item in linguagens">{{ item }}</p>

  <div v-for="item in cards">
    <Card :titulo="item.titulo" :conteudo="item.conteudo"/> 
  </div>

  <hr>
  <h2>Classes dinamicas</h2>

  <Notificacao tipo="falha" texto="Lorem ipsum dolor sit amet consectetur adipisicing elit. A consequatur impedit sunt non aut nostrum fugiat sit tempore odio ut. Obcaecati doloribus reiciendis nemo deleniti minima ad laudantium, repellat a."/>

  
</main>
</template>

<style scoped>
*{
  font-family: Arial, Helvetica, sans-serif;
}

main{
  padding-bottom: 320px;
}
</style>
