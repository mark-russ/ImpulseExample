import scss from 'rollup-plugin-scss';
import svelte from 'rollup-plugin-svelte';
import resolve from '@rollup/plugin-node-resolve';

export default {
    input: './Resources/bundle.js',
    output: {
        file: './wwwroot/resources/bundle.js',
        format: 'esm',
        sourcemap: true
    },

    plugins: [
        scss({
            input: './Resources/bundle.scss',
            output: './wwwroot/resources/bundle.css',
            outputStyle: 'compressed'
        }),
        svelte({
            compilerOptions: {
                customElement: true
            }
        }),
        resolve({
            browser: true
        }),
    ]
}