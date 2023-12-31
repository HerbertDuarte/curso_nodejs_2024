<script setup>
import { defineProps } from 'vue';
const props = defineProps({
 texto : {
  type : String
 },
 tipo : {
  type : String,
  default : "nenhum"
 }
})
</script>
<template>
 <p :class="tipo">
  {{ texto }}
 </p>
</template>
<style scoped>
.sucesso{
 background-color: rgb(161, 228, 61);
 padding: 10px;
 border-radius: 10px;
}

.falha{
 background-color: rgb(228, 61, 61);
 padding: 10px;
 border-radius: 10px;
}

.nenhum{
 background-color: rgb(51, 51, 51);
 color: white;
 padding: 10px;
 border-radius: 10px;
}
</style>