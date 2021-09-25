import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';
import json from '@rollup/plugin-json';
import babel from 'rollup-plugin-babel';
import dts from 'rollup-plugin-dts';
import { terser } from 'rollup-plugin-terser';
import pkg from './package.json';

const optionsForPackage = ['']; // different modules, default: optionsForPackage = ['']
const optionsForCompile = ['esm'];

const createPlugins = () => {
  // plugins default list
  return [
    typescript(),
    json(),
    resolve(),
    commonjs(), // for internal node modules, for preference remove it
    terser(),
    babel({ exclude: 'node_modules/**' }),
  ];
};

const banner = [
  `/*!`,
  ` * ${pkg.name} - v${pkg.version}`,
  ` *`,
  ` * ${pkg.name} is licensed under the MIT License.`,
  ` * http://www.opensource.org/licenses/mit-license`,
  ` */`,
].join('\n');

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
        banner,
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
          banner,
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
