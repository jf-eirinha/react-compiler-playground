import * as Babel from "@babel/core";

export default {
  visitor: {
    FunctionDeclaration(
      babelFunc: Babel.NodePath<Babel.types.FunctionDeclaration>
    ) {
      babelFunc.get("body").replaceWith(Babel.types.blockStatement([]));
    },
  },
} as Babel.PluginObj;
