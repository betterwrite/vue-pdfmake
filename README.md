# Vue PDFMake

A [PDFMake](http://pdfmake.org/#/) plugin for Vue 3

> Don't support Vue 2.x

## Install

`yarn add vue-pdfmake`

OR

`npm install vue-pdfmake`

and

```js
import { createApp } from 'vue';
import pdfMake from 'vue-pdfmake';
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
  import { onMounted, inject } from 'vue';
  import { usePDF } from 'vue-pdfmake';

  onMounted(() => {
    const { create } = usePDF();

    create().download();
  });

  // if you don't want to use the hook, get root pdfMake
  const pdf = inject('vue-pdfmake');
  console.log(pdf);
</script>
```
