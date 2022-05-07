export default {
  entries: [
    {
      input: 'src/index.ts',
      outDir: 'dist',
      name: 'index',
      format: 'esm',
      ext: 'mjs',
    },
    {
      input: 'src/index.ts',
      outDir: 'dist',
      name: 'index',
      format: 'cjs',
      ext: 'cjs',
    },
  ],
  rollup: {
    emitCJS: true,
    resolve: {
      dedupe: ['pdfmake']
    }
  },
  externals: ['pdfmake'],
  declaration: true,
}