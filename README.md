# Vue PDFMake

A [PDFMake](http://pdfmake.org/#/) plugin for 3.x

<img src="https://img.shields.io/npm/v/vue3-pdfmake?label=&style=for-the-badge" />

## Install

`yarn add vue3-pdfmake`

OR

`npm install vue3-pdfmake`

in `main.(js|ts)`

```js
import { createApp } from 'vue';
import pdfMake from 'vue3-pdfmake';
import App from './App.vue';

const app = createApp(App);
//...
app.use(pdfMake);
//...
app.mount('#app');
```

## Example

```html
<script setup>
  import { onMounted } from 'vue';
  import { usePDF } from 'vue3-pdfmake';

  const pdf = usePDF();

  onMounted(() => {

    pdf.createPdf({}).download();
  });
</script>
```
