import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';
import json from '@rollup/plugin-json';
import babel from 'rollup-plugin-babel';
import { terser } from 'rollup-plugin-terser';

const optionsForPackage = ['']; // different modules, default: optionsForPackage = ['']
const optionsForCompile = ['iife', 'esm', 'amd'];

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
        file: `./lib${option}/index.js`,
        format: 'cjs',
        exports: 'named',
      },
      plugins: createPlugins(),
    });

    list.push({
      input: `./src${option}/index.ts`,
      output: {
        file: `./lib${option}/bundle.min.js`,
        format: 'cjs',
        exports: 'named',
      },
      plugins: [...createPlugins(), terser()],
    });

    optionsForCompile.forEach((format) => {
      list.push({
        // optionsForCompile
        input: `./src${option}/index.ts`,
        output: {
          file: `./lib${option}/index.${format}.js`,
          format,
          exports: 'named',
        },
        plugins: createPlugins(),
      });

      list.push({
        input: `./src${option}/index.ts`,
        output: {
          file: `./lib${option}/bundle.${format}.min.js`,
          format,
          exports: 'named',
        },
        plugins: [...createPlugins(), terser()],
      });
    });
  });

  return list;
};

export default createConfig();
