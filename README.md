# Vue PDFMake

A [PDFMake](http://pdfmake.org/#/) plugin for Vue 3.x

> Don't support Vue 2.x

> WARNING: This package is in the early stage of development.

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

  const { create, get } = usePDF();

  onMounted(() => {

    create().download();
  });

  // get root pdfMake
  console.log(get());
</script>
```
