export const imports = {
  'src/hello.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "src-hello" */ 'src/hello.mdx'
    ),
  'src/components/buttonSimple/button.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "src-components-button-simple-button" */ 'src/components/buttonSimple/button.mdx'
    ),
}
