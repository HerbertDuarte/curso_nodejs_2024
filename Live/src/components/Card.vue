<script setup>
import { defineProps } from 'vue';
const props = defineProps(["titulo", "conteudo"])
</script>

<template>
  <div class="card-container">
    <h4>{{ titulo }}</h4>

    <p>{{ conteudo }}</p>
  </div>
</template>

<style scoped>
.card-container{
 border : 1px solid black;
 border-radius: 10px;
 padding: 5px;
 margin: 10px 0;
 background-color: rgb(255, 244, 209);
}

</style>
