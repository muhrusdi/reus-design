export const imports = {
  'src/components/Button/doc.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-components-button-doc" */ 'src/components/Button/doc.mdx'),
}
