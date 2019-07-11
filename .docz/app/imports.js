export const imports = {
  'src/hello.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "src-hello" */ 'src/hello.mdx'
    ),
}
