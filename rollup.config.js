import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';
import json from '@rollup/plugin-json';
import babel from 'rollup-plugin-babel';
import dts from 'rollup-plugin-dts';

const optionsForPackage = ['']; // different modules, default: optionsForPackage = ['']
const optionsForCompile = ['esm'];

const createPlugins = () => {
  // plugins default list
  return [
    typescript(),
    json(),
    resolve(),
    commonjs(), // for internal node modules, for preference remove it
    babel({ exclude: 'node_modules/**' }),
  ];
};

const createConfig = () => {
  const list = [];

  optionsForPackage.forEach((option) => {
    list.push({
      //cjs
      input: `./src${option}/index.ts`,
      output: {
        file: `./dist${option}/index.js`,
        format: 'cjs',
        exports: 'named',
      },
      plugins: createPlugins(),
      moduleContext: {
        './node_modules/pdfmake/build/vfs_fonts.js': 'window',
      },
    });

    optionsForCompile.forEach((format) => {
      list.push({
        // optionsForCompile
        input: `./src${option}/index.ts`,
        output: {
          file: `./dist${option}/index.${format}.js`,
          format,
          exports: 'named',
        },
        plugins: createPlugins(),
        moduleContext: {
          './node_modules/pdfmake/build/vfs_fonts.js': 'window',
        },
      });
    });

    list.push({
      input: 'src/index.ts',
      output: {
        file: 'dist/index.d.ts',
        format: 'es',
      },
      plugins: [dts()],
    });
  });

  return list;
};

export default createConfig();
