<script setup>
import { usePDF } from 'vue3-pdfmake';

const pdfmake = usePDF()

pdfmake.createPdf({}).download();
</script>

<template>
  <p>PDFMake!</p>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
