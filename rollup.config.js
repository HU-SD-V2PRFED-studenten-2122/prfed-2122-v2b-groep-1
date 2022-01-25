import html from '@web/rollup-plugin-html';

export default {
    input: 'pages/*.html',
    output: { dir: 'dist' },
    plugins: [html()],
};
