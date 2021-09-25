# Vue PDFMake

A [PDFMake](http://pdfmake.org/#/) plugin for Vue 3.x

> Don't support Vue 2.x

## Install

`yarn add vue-pdfmake`

OR

`npm install vue-pdfmake`

in `main.(js|ts)`

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
  import { usePDF, Key } from '../dist';

  const { create, get } = usePDF();

  onMounted(() => {

    create().download();
  });

  // get root pdfMake
  console.log(get());

  // or local inject without usePDF()
  const pdf = inject(Key)
  console.log(pdf);
</script>
```
