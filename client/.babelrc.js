module.exports = api => {
  api.cache.using(() => {
    // cache based on the two env vars
    return 'babel:' + process.env.BABEL_TARGET +
      ' protractor:' + process.env.IN_PROTRACTOR;
  });

  return {
    "plugins": [
      ['@babel/plugin-proposal-decorators', { legacy: true }],
      ['@babel/plugin-proposal-class-properties', { loose: true }],
      //["@babel/plugin-transform-runtime"],
      // ["transform-runtime", {
      //   "polyfill": false,
      //   "regenerator": true
      // }]
    ],
    "presets": [
      [
        "@babel/preset-env", {
          // "useBuiltIns": {
          //   polyfill: true,
          //   regenerator: true,
          // },
          "useBuiltIns": "entry",
          "targets": process.env.BABEL_TARGET === 'node' ? {
            "node": process.env.IN_PROTRACTOR ? '6' : 'current'
          } : {
            "browsers": [ "last 2 versions" ]
          },
          "loose": true,
          "modules": process.env.BABEL_TARGET === 'node' ? 'commonjs' : false
        }
      ]
    ]
  }
}
