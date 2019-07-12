export const imports = {
  'src/hello.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "src-hello" */ 'src/hello.mdx'
    ),
  'src/components/buttonComplete/index.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "src-components-button-complete-index" */ 'src/components/buttonComplete/index.mdx'
    ),
  'src/components/buttonSimple/button.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "src-components-button-simple-button" */ 'src/components/buttonSimple/button.mdx'
    ),
}
