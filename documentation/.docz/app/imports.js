export const imports = {
  'src/index.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-index" */ 'src/index.mdx'),
  'src/components/Typography/doc.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-components-typography-doc" */ 'src/components/Typography/doc.mdx'),
}
