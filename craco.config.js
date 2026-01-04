nmodule.exports = {
  devServer: {
    setupMiddlewares: (middlewares, devServer) => {
      if (!devServer) {
        throw new Error("webpack-dev-server is not defined");
      }

      // This replaces onAfterSetupMiddleware
      // It pushes your custom logic to the end of the middleware stack
      middlewares.push({
        name: "custom-middleware",
        path: "/example",
        middleware: (req, res) => {
          res.send("Hello World!");
        },
      });

      return middlewares;
    },
  },
};
