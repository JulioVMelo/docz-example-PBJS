export const imports = {
  'src/hello.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "src-hello" */ 'src/hello.mdx'
    ),
  'src/components/button/button.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "src-components-button-button" */ 'src/components/button/button.mdx'
    ),
}
