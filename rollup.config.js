import { nodeResolve } from '@rollup/plugin-node-resolve';
export default {
    input: 'src/index.js',
    output: {
        dir: 'dist',
        format: 'esm'
    },
    plugins: [nodeResolve()]
};