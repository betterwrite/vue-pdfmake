<script setup>
import { usePDF } from 'vue3-pdfmake';

const pdfmake = usePDF({
  autoInstallVFS: true
})

const onGenPDF = () => {
  pdfmake.createPdf({
    content: [
      'Hello World From PDFMake!',
    ]
  }).download();
}
</script>

<template>
  <button @click="onGenPDF">Click here for download demo pdf</button>
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
