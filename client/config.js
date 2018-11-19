System.config({
  defaultJSExtensions: true,
  transpiler: true,
  meta: {
    "jspm_packages/babel-polyfill": {
      "format": "global"
    }
  },
  paths: {
    "*": "dist/*",
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*"
  },
  map: {
    "aurelia-animator-css": "npm:aurelia-animator-css@1.0.1",
    "aurelia-bootstrapper": "npm:aurelia-bootstrapper@1.0.0",
    "aurelia-config": "npm:aurelia-config@0.2.0-0",
    "aurelia-event-aggregator": "npm:aurelia-event-aggregator@1.0.1",
    "aurelia-fetch-client": "npm:aurelia-fetch-client@1.6.0",
    "aurelia-form": "npm:aurelia-form@1.3.2-1",
    "aurelia-form-validation": "npm:aurelia-form-validation@1.2.0",
    "aurelia-framework": "npm:aurelia-framework@1.3.0",
    "aurelia-history-browser": "npm:aurelia-history-browser@1.0.0",
    "aurelia-loader-default": "npm:aurelia-loader-default@1.0.0",
    "aurelia-logging": "npm:aurelia-logging@1.5.0",
    "aurelia-logging-console": "npm:aurelia-logging-console@1.0.0",
    "aurelia-orm": "npm:aurelia-orm@7.0.1",
    "aurelia-pal": "npm:aurelia-pal@1.8.0",
    "aurelia-pal-browser": "npm:aurelia-pal-browser@1.0.0",
    "aurelia-polyfills": "npm:aurelia-polyfills@1.1.1",
    "aurelia-router": "npm:aurelia-router@1.0.6",
    "aurelia-store": "npm:aurelia-store@1.3.1",
    "aurelia-templating-binding": "npm:aurelia-templating-binding@1.0.0",
    "aurelia-templating-resources": "npm:aurelia-templating-resources@1.1.1",
    "aurelia-templating-router": "npm:aurelia-templating-router@1.0.0",
    "aurelia-validation": "npm:aurelia-validation@1.3.0",
    "aurelia-view-manager": "npm:aurelia-view-manager@0.1.1",
    "bluebird": "npm:bluebird@3.4.1",
    "bootstrap": "github:twbs/bootstrap@3.3.7",
    "fetch": "github:github/fetch@1.0.0",
    "font-awesome": "npm:font-awesome@4.6.3",
    "get-prop": "npm:get-prop@0.0.10",
    "global": "npm:global@4.3.2",
    "gulp-nodemon": "npm:gulp-nodemon@2.4.1",
    "jquery": "npm:jquery@2.2.4",
    "mongodb": "npm:mongodb@3.1.9",
    "mongoose": "github:gavinaiken/mongoose-browser@4.5.3",
    "rxjs": "npm:rxjs@6.3.3",
    "text": "github:systemjs/plugin-text@0.0.8",
    "true": "npm:babel-core@5.8.38",
    "true-runtime": "npm:babel-runtime@5.8.38",
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.4.1"
    },
    "github:jspm/nodelibs-buffer@0.1.1": {
      "buffer": "npm:buffer@5.2.1"
    },
    "github:jspm/nodelibs-constants@0.1.0": {
      "constants-browserify": "npm:constants-browserify@0.0.1"
    },
    "github:jspm/nodelibs-crypto@0.1.0": {
      "crypto-browserify": "npm:crypto-browserify@3.12.0"
    },
    "github:jspm/nodelibs-domain@0.1.0": {
      "domain-browser": "npm:domain-browser@1.2.0"
    },
    "github:jspm/nodelibs-events@0.1.1": {
      "events": "npm:events@1.0.2"
    },
    "github:jspm/nodelibs-http@1.7.1": {
      "Base64": "npm:Base64@0.2.1",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.3",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "github:jspm/nodelibs-https@0.1.0": {
      "https-browserify": "npm:https-browserify@0.0.0"
    },
    "github:jspm/nodelibs-net@0.1.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "net": "github:jspm/nodelibs-net@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "timers": "github:jspm/nodelibs-timers@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "github:jspm/nodelibs-os@0.1.0": {
      "os-browserify": "npm:os-browserify@0.1.2"
    },
    "github:jspm/nodelibs-path@0.1.0": {
      "path-browserify": "npm:path-browserify@0.0.0"
    },
    "github:jspm/nodelibs-process@0.1.2": {
      "process": "npm:process@0.11.10"
    },
    "github:jspm/nodelibs-querystring@0.1.0": {
      "querystring": "npm:querystring@0.2.0"
    },
    "github:jspm/nodelibs-stream@0.1.0": {
      "stream-browserify": "npm:stream-browserify@1.0.0"
    },
    "github:jspm/nodelibs-string_decoder@0.1.0": {
      "string_decoder": "npm:string_decoder@0.10.31"
    },
    "github:jspm/nodelibs-timers@0.1.0": {
      "timers-browserify": "npm:timers-browserify@1.4.2"
    },
    "github:jspm/nodelibs-tty@0.1.0": {
      "tty-browserify": "npm:tty-browserify@0.0.0"
    },
    "github:jspm/nodelibs-url@0.1.0": {
      "url": "npm:url@0.10.3"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "github:jspm/nodelibs-vm@0.1.0": {
      "vm-browserify": "npm:vm-browserify@0.0.4"
    },
    "github:jspm/nodelibs-zlib@0.1.0": {
      "browserify-zlib": "npm:browserify-zlib@0.1.4"
    },
    "github:twbs/bootstrap@3.3.7": {
      "jquery": "npm:jquery@2.2.4"
    },
    "npm:ansi-align@2.0.0": {
      "string-width": "npm:string-width@2.1.1"
    },
    "npm:ansi-colors@1.1.0": {
      "ansi-wrap": "npm:ansi-wrap@0.1.0"
    },
    "npm:ansi-gray@0.1.1": {
      "ansi-wrap": "npm:ansi-wrap@0.1.0"
    },
    "npm:ansi-styles@3.2.1": {
      "color-convert": "npm:color-convert@1.9.3"
    },
    "npm:anymatch@2.0.0": {
      "micromatch": "npm:micromatch@3.1.10",
      "normalize-path": "npm:normalize-path@2.1.1",
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:append-buffer@1.0.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "buffer-equal": "npm:buffer-equal@1.0.0",
      "os": "github:jspm/nodelibs-os@0.1.0"
    },
    "npm:are-we-there-yet@1.1.5": {
      "delegates": "npm:delegates@1.0.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "readable-stream": "npm:readable-stream@2.3.6",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:arr-filter@1.1.2": {
      "make-iterator": "npm:make-iterator@1.0.1"
    },
    "npm:arr-map@2.0.2": {
      "make-iterator": "npm:make-iterator@1.0.1"
    },
    "npm:array-initial@1.1.0": {
      "array-slice": "npm:array-slice@1.1.0",
      "is-number": "npm:is-number@4.0.0"
    },
    "npm:array-last@1.3.0": {
      "is-number": "npm:is-number@4.0.0"
    },
    "npm:array-sort@1.0.0": {
      "default-compare": "npm:default-compare@1.0.0",
      "get-value": "npm:get-value@2.0.6",
      "kind-of": "npm:kind-of@5.1.0"
    },
    "npm:asn1.js@4.10.1": {
      "bn.js": "npm:bn.js@4.11.8",
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "inherits": "npm:inherits@2.0.3",
      "minimalistic-assert": "npm:minimalistic-assert@1.0.1",
      "vm": "github:jspm/nodelibs-vm@0.1.0"
    },
    "npm:assert@1.4.1": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "util": "npm:util@0.10.3"
    },
    "npm:async-done@1.3.1": {
      "domain": "github:jspm/nodelibs-domain@0.1.0",
      "end-of-stream": "npm:end-of-stream@1.4.1",
      "once": "npm:once@1.4.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "process-nextick-args": "npm:process-nextick-args@1.0.7",
      "stream-exhaust": "npm:stream-exhaust@1.0.2"
    },
    "npm:async-settle@1.0.0": {
      "async-done": "npm:async-done@1.3.1"
    },
    "npm:atob@2.1.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:aurelia-animator-css@1.0.1": {
      "aurelia-metadata": "npm:aurelia-metadata@1.0.4",
      "aurelia-pal": "npm:aurelia-pal@1.8.0",
      "aurelia-templating": "npm:aurelia-templating@1.10.1"
    },
    "npm:aurelia-api@3.2.0": {
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.4.1",
      "aurelia-fetch-client": "npm:aurelia-fetch-client@1.6.0",
      "aurelia-framework": "npm:aurelia-framework@1.3.0",
      "aurelia-path": "npm:aurelia-path@1.1.1",
      "extend": "npm:extend@3.0.2"
    },
    "npm:aurelia-binding@1.7.3": {
      "aurelia-logging": "npm:aurelia-logging@1.5.0",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.4",
      "aurelia-pal": "npm:aurelia-pal@1.8.0",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.3.1"
    },
    "npm:aurelia-binding@2.1.6": {
      "aurelia-logging": "npm:aurelia-logging@1.5.0",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.4",
      "aurelia-pal": "npm:aurelia-pal@1.8.0",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.3.1"
    },
    "npm:aurelia-bootstrapper@1.0.0": {
      "aurelia-event-aggregator": "npm:aurelia-event-aggregator@1.0.1",
      "aurelia-framework": "npm:aurelia-framework@1.3.0",
      "aurelia-history": "npm:aurelia-history@1.0.0",
      "aurelia-history-browser": "npm:aurelia-history-browser@1.0.0",
      "aurelia-loader-default": "npm:aurelia-loader-default@1.0.0",
      "aurelia-logging-console": "npm:aurelia-logging-console@1.0.0",
      "aurelia-pal": "npm:aurelia-pal@1.8.0",
      "aurelia-pal-browser": "npm:aurelia-pal-browser@1.0.0",
      "aurelia-polyfills": "npm:aurelia-polyfills@1.1.1",
      "aurelia-router": "npm:aurelia-router@1.0.6",
      "aurelia-templating": "npm:aurelia-templating@1.10.1",
      "aurelia-templating-binding": "npm:aurelia-templating-binding@1.0.0",
      "aurelia-templating-resources": "npm:aurelia-templating-resources@1.1.1",
      "aurelia-templating-router": "npm:aurelia-templating-router@1.0.0"
    },
    "npm:aurelia-config@0.2.0-0": {
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.4.1",
      "aurelia-framework": "npm:aurelia-framework@1.3.0",
      "aurelia-loader": "npm:aurelia-loader@1.0.0",
      "aurelia-logging": "npm:aurelia-logging@1.5.0",
      "homefront": "npm:homefront@1.3.4"
    },
    "npm:aurelia-dependency-injection@1.4.1": {
      "aurelia-metadata": "npm:aurelia-metadata@1.0.4",
      "aurelia-pal": "npm:aurelia-pal@1.8.0"
    },
    "npm:aurelia-event-aggregator@1.0.1": {
      "aurelia-logging": "npm:aurelia-logging@1.5.0"
    },
    "npm:aurelia-fetch-client@1.6.0": {
      "aurelia-pal": "npm:aurelia-pal@1.8.0"
    },
    "npm:aurelia-form-validation@1.2.0": {
      "aurelia-config": "npm:aurelia-config@0.2.0-0",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.4.1",
      "aurelia-validation": "npm:aurelia-validation@1.3.0"
    },
    "npm:aurelia-form@1.3.2-1": {
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.4.1",
      "aurelia-framework": "npm:aurelia-framework@1.3.0",
      "aurelia-logging": "npm:aurelia-logging@1.5.0",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.4",
      "aurelia-view-manager": "npm:aurelia-view-manager@0.1.1",
      "extend": "npm:extend@3.0.2",
      "homefront": "npm:homefront@1.3.4"
    },
    "npm:aurelia-framework@1.3.0": {
      "aurelia-binding": "npm:aurelia-binding@2.1.6",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.4.1",
      "aurelia-loader": "npm:aurelia-loader@1.0.0",
      "aurelia-logging": "npm:aurelia-logging@1.5.0",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.4",
      "aurelia-pal": "npm:aurelia-pal@1.8.0",
      "aurelia-path": "npm:aurelia-path@1.1.1",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.3.1",
      "aurelia-templating": "npm:aurelia-templating@1.10.1"
    },
    "npm:aurelia-history-browser@1.0.0": {
      "aurelia-history": "npm:aurelia-history@1.0.0",
      "aurelia-pal": "npm:aurelia-pal@1.8.0"
    },
    "npm:aurelia-loader-default@1.0.0": {
      "aurelia-loader": "npm:aurelia-loader@1.0.0",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.4",
      "aurelia-pal": "npm:aurelia-pal@1.8.0"
    },
    "npm:aurelia-loader@1.0.0": {
      "aurelia-metadata": "npm:aurelia-metadata@1.0.4",
      "aurelia-path": "npm:aurelia-path@1.1.1"
    },
    "npm:aurelia-logging-console@1.0.0": {
      "aurelia-logging": "npm:aurelia-logging@1.5.0"
    },
    "npm:aurelia-metadata@1.0.4": {
      "aurelia-pal": "npm:aurelia-pal@1.8.0"
    },
    "npm:aurelia-orm@7.0.1": {
      "aurelia-api": "npm:aurelia-api@3.2.0",
      "aurelia-binding": "npm:aurelia-binding@1.7.3",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.4.1",
      "aurelia-logging": "npm:aurelia-logging@1.5.0",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.4",
      "aurelia-templating": "npm:aurelia-templating@1.10.1",
      "aurelia-validation": "npm:aurelia-validation@1.3.0",
      "aurelia-view-manager": "npm:aurelia-view-manager@0.1.1",
      "get-prop": "npm:get-prop@0.0.10",
      "typer": "npm:typer@1.1.0"
    },
    "npm:aurelia-pal-browser@1.0.0": {
      "aurelia-pal": "npm:aurelia-pal@1.8.0"
    },
    "npm:aurelia-polyfills@1.1.1": {
      "aurelia-pal": "npm:aurelia-pal@1.8.0"
    },
    "npm:aurelia-route-recognizer@1.1.0": {
      "aurelia-path": "npm:aurelia-path@1.1.1"
    },
    "npm:aurelia-router@1.0.6": {
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.4.1",
      "aurelia-event-aggregator": "npm:aurelia-event-aggregator@1.0.1",
      "aurelia-history": "npm:aurelia-history@1.0.0",
      "aurelia-logging": "npm:aurelia-logging@1.5.0",
      "aurelia-path": "npm:aurelia-path@1.1.1",
      "aurelia-route-recognizer": "npm:aurelia-route-recognizer@1.1.0"
    },
    "npm:aurelia-store@1.3.1": {
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.4.1",
      "aurelia-framework": "npm:aurelia-framework@1.3.0",
      "aurelia-logging": "npm:aurelia-logging@1.5.0",
      "aurelia-pal": "npm:aurelia-pal@1.8.0",
      "rxjs": "npm:rxjs@6.3.3"
    },
    "npm:aurelia-task-queue@1.3.1": {
      "aurelia-pal": "npm:aurelia-pal@1.8.0"
    },
    "npm:aurelia-templating-binding@1.0.0": {
      "aurelia-binding": "npm:aurelia-binding@1.7.3",
      "aurelia-logging": "npm:aurelia-logging@1.5.0",
      "aurelia-templating": "npm:aurelia-templating@1.10.1"
    },
    "npm:aurelia-templating-resources@1.1.1": {
      "aurelia-binding": "npm:aurelia-binding@1.7.3",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.4.1",
      "aurelia-loader": "npm:aurelia-loader@1.0.0",
      "aurelia-logging": "npm:aurelia-logging@1.5.0",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.4",
      "aurelia-pal": "npm:aurelia-pal@1.8.0",
      "aurelia-path": "npm:aurelia-path@1.1.1",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.3.1",
      "aurelia-templating": "npm:aurelia-templating@1.10.1"
    },
    "npm:aurelia-templating-router@1.0.0": {
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.4.1",
      "aurelia-logging": "npm:aurelia-logging@1.5.0",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.4",
      "aurelia-pal": "npm:aurelia-pal@1.8.0",
      "aurelia-path": "npm:aurelia-path@1.1.1",
      "aurelia-router": "npm:aurelia-router@1.0.6",
      "aurelia-templating": "npm:aurelia-templating@1.10.1"
    },
    "npm:aurelia-templating@1.10.1": {
      "aurelia-binding": "npm:aurelia-binding@2.1.6",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.4.1",
      "aurelia-loader": "npm:aurelia-loader@1.0.0",
      "aurelia-logging": "npm:aurelia-logging@1.5.0",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.4",
      "aurelia-pal": "npm:aurelia-pal@1.8.0",
      "aurelia-path": "npm:aurelia-path@1.1.1",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.3.1"
    },
    "npm:aurelia-validation@1.3.0": {
      "aurelia-binding": "npm:aurelia-binding@2.1.6",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.4.1",
      "aurelia-logging": "npm:aurelia-logging@1.5.0",
      "aurelia-pal": "npm:aurelia-pal@1.8.0",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.3.1",
      "aurelia-templating": "npm:aurelia-templating@1.10.1"
    },
    "npm:aurelia-view-manager@0.1.1": {
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.4.1",
      "aurelia-logging": "npm:aurelia-logging@1.5.0",
      "aurelia-path": "npm:aurelia-path@1.1.1",
      "aurelia-templating": "npm:aurelia-templating@1.10.1",
      "extend": "npm:extend@3.0.2"
    },
    "npm:babel-runtime@5.8.38": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:bach@1.2.0": {
      "arr-filter": "npm:arr-filter@1.1.2",
      "arr-flatten": "npm:arr-flatten@1.1.0",
      "arr-map": "npm:arr-map@2.0.2",
      "array-each": "npm:array-each@1.0.1",
      "array-initial": "npm:array-initial@1.1.0",
      "array-last": "npm:array-last@1.3.0",
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "async-done": "npm:async-done@1.3.1",
      "async-settle": "npm:async-settle@1.0.0",
      "now-and-later": "npm:now-and-later@2.0.0"
    },
    "npm:base@0.11.2": {
      "cache-base": "npm:cache-base@1.0.1",
      "class-utils": "npm:class-utils@0.3.6",
      "component-emitter": "npm:component-emitter@1.2.1",
      "define-property": "npm:define-property@1.0.0",
      "isobject": "npm:isobject@3.0.1",
      "mixin-deep": "npm:mixin-deep@1.3.1",
      "pascalcase": "npm:pascalcase@0.1.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:binary-extensions@1.12.0": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:bluebird@3.4.1": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:boxen@1.3.0": {
      "ansi-align": "npm:ansi-align@2.0.0",
      "camelcase": "npm:camelcase@4.1.0",
      "chalk": "npm:chalk@2.4.1",
      "cli-boxes": "npm:cli-boxes@1.0.0",
      "string-width": "npm:string-width@2.1.1",
      "term-size": "npm:term-size@1.2.0",
      "widest-line": "npm:widest-line@2.0.1"
    },
    "npm:brace-expansion@1.1.11": {
      "balanced-match": "npm:balanced-match@1.0.0",
      "concat-map": "npm:concat-map@0.0.1"
    },
    "npm:braces@2.3.2": {
      "arr-flatten": "npm:arr-flatten@1.1.0",
      "array-unique": "npm:array-unique@0.3.2",
      "extend-shallow": "npm:extend-shallow@2.0.1",
      "fill-range": "npm:fill-range@4.0.0",
      "isobject": "npm:isobject@3.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "repeat-element": "npm:repeat-element@1.1.3",
      "snapdragon": "npm:snapdragon@0.8.2",
      "snapdragon-node": "npm:snapdragon-node@2.1.1",
      "split-string": "npm:split-string@3.1.0",
      "to-regex": "npm:to-regex@3.0.2"
    },
    "npm:browserify-aes@1.2.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "buffer-xor": "npm:buffer-xor@1.0.3",
      "cipher-base": "npm:cipher-base@1.0.4",
      "create-hash": "npm:create-hash@1.2.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "evp_bytestokey": "npm:evp_bytestokey@1.0.3",
      "inherits": "npm:inherits@2.0.3",
      "safe-buffer": "npm:safe-buffer@5.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:browserify-cipher@1.0.1": {
      "browserify-aes": "npm:browserify-aes@1.2.0",
      "browserify-des": "npm:browserify-des@1.0.2",
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "evp_bytestokey": "npm:evp_bytestokey@1.0.3"
    },
    "npm:browserify-des@1.0.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "cipher-base": "npm:cipher-base@1.0.4",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "des.js": "npm:des.js@1.0.0",
      "inherits": "npm:inherits@2.0.3",
      "safe-buffer": "npm:safe-buffer@5.1.2"
    },
    "npm:browserify-rsa@4.0.1": {
      "bn.js": "npm:bn.js@4.11.8",
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "constants": "github:jspm/nodelibs-constants@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "randombytes": "npm:randombytes@2.0.6"
    },
    "npm:browserify-sign@4.0.4": {
      "bn.js": "npm:bn.js@4.11.8",
      "browserify-rsa": "npm:browserify-rsa@4.0.1",
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "create-hash": "npm:create-hash@1.2.0",
      "create-hmac": "npm:create-hmac@1.1.7",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "elliptic": "npm:elliptic@6.4.1",
      "inherits": "npm:inherits@2.0.3",
      "parse-asn1": "npm:parse-asn1@5.1.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:browserify-zlib@0.1.4": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "pako": "npm:pako@0.2.9",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "readable-stream": "npm:readable-stream@2.3.6",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:bson@1.1.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:buffer-equal@1.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1"
    },
    "npm:buffer-from@1.1.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1"
    },
    "npm:buffer-xor@1.0.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:buffer@5.2.1": {
      "base64-js": "npm:base64-js@1.3.0",
      "ieee754": "npm:ieee754@1.1.12"
    },
    "npm:builtin-modules@1.1.1": {
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:cache-base@1.0.1": {
      "collection-visit": "npm:collection-visit@1.0.0",
      "component-emitter": "npm:component-emitter@1.2.1",
      "get-value": "npm:get-value@2.0.6",
      "has-value": "npm:has-value@1.0.0",
      "isobject": "npm:isobject@3.0.1",
      "set-value": "npm:set-value@2.0.0",
      "to-object-path": "npm:to-object-path@0.3.0",
      "union-value": "npm:union-value@1.0.0",
      "unset-value": "npm:unset-value@1.0.0"
    },
    "npm:chalk@2.4.1": {
      "ansi-styles": "npm:ansi-styles@3.2.1",
      "escape-string-regexp": "npm:escape-string-regexp@1.0.5",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "supports-color": "npm:supports-color@5.5.0"
    },
    "npm:chokidar@2.0.4": {
      "anymatch": "npm:anymatch@2.0.0",
      "async-each": "npm:async-each@1.0.1",
      "braces": "npm:braces@2.3.2",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "fsevents": "npm:fsevents@1.2.4",
      "glob-parent": "npm:glob-parent@3.1.0",
      "inherits": "npm:inherits@2.0.3",
      "is-binary-path": "npm:is-binary-path@1.0.1",
      "is-glob": "npm:is-glob@4.0.0",
      "lodash.debounce": "npm:lodash.debounce@4.0.8",
      "normalize-path": "npm:normalize-path@2.1.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "path-is-absolute": "npm:path-is-absolute@1.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "readdirp": "npm:readdirp@2.2.1",
      "upath": "npm:upath@1.1.0"
    },
    "npm:chownr@1.1.1": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:ci-info@1.6.0": {
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:cipher-base@1.0.4": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "inherits": "npm:inherits@2.0.3",
      "safe-buffer": "npm:safe-buffer@5.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "string_decoder": "github:jspm/nodelibs-string_decoder@0.1.0"
    },
    "npm:class-utils@0.3.6": {
      "arr-union": "npm:arr-union@3.1.0",
      "define-property": "npm:define-property@0.2.5",
      "isobject": "npm:isobject@3.0.1",
      "static-extend": "npm:static-extend@0.1.2",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:cli-boxes@1.0.0": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:cliui@3.2.0": {
      "string-width": "npm:string-width@1.0.2",
      "strip-ansi": "npm:strip-ansi@3.0.1",
      "wrap-ansi": "npm:wrap-ansi@2.1.0"
    },
    "npm:clone-buffer@1.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1"
    },
    "npm:clone-stats@1.0.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2"
    },
    "npm:clone@2.1.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1"
    },
    "npm:cloneable-readable@1.1.2": {
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inherits": "npm:inherits@2.0.3",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "process-nextick-args": "npm:process-nextick-args@2.0.0",
      "readable-stream": "npm:readable-stream@2.3.6"
    },
    "npm:collection-map@1.0.0": {
      "arr-map": "npm:arr-map@2.0.2",
      "for-own": "npm:for-own@1.0.0",
      "make-iterator": "npm:make-iterator@1.0.1"
    },
    "npm:collection-visit@1.0.0": {
      "map-visit": "npm:map-visit@1.0.0",
      "object-visit": "npm:object-visit@1.0.1"
    },
    "npm:color-convert@1.9.3": {
      "color-name": "npm:color-name@1.1.3"
    },
    "npm:color-name@1.1.3": {
      "assert": "github:jspm/nodelibs-assert@0.1.0"
    },
    "npm:color-support@1.1.3": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:colors@1.3.2": {
      "os": "github:jspm/nodelibs-os@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:concat-stream@1.6.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "buffer-from": "npm:buffer-from@1.1.1",
      "inherits": "npm:inherits@2.0.3",
      "readable-stream": "npm:readable-stream@2.3.6",
      "typedarray": "npm:typedarray@0.0.6"
    },
    "npm:configstore@3.1.2": {
      "dot-prop": "npm:dot-prop@4.2.0",
      "graceful-fs": "npm:graceful-fs@4.1.15",
      "make-dir": "npm:make-dir@1.3.0",
      "os": "github:jspm/nodelibs-os@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "unique-string": "npm:unique-string@1.0.0",
      "write-file-atomic": "npm:write-file-atomic@2.3.0",
      "xdg-basedir": "npm:xdg-basedir@3.0.0"
    },
    "npm:constants-browserify@0.0.1": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:convert-source-map@1.6.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "safe-buffer": "npm:safe-buffer@5.1.2"
    },
    "npm:copy-props@2.0.4": {
      "each-props": "npm:each-props@1.3.2",
      "is-plain-object": "npm:is-plain-object@2.0.4"
    },
    "npm:core-util-is@1.0.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1"
    },
    "npm:create-ecdh@4.0.3": {
      "bn.js": "npm:bn.js@4.11.8",
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "elliptic": "npm:elliptic@6.4.1"
    },
    "npm:create-error-class@3.0.2": {
      "capture-stack-trace": "npm:capture-stack-trace@1.0.1"
    },
    "npm:create-hash@1.2.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "cipher-base": "npm:cipher-base@1.0.4",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "inherits": "npm:inherits@2.0.3",
      "md5.js": "npm:md5.js@1.3.5",
      "ripemd160": "npm:ripemd160@2.0.2",
      "sha.js": "npm:sha.js@2.4.11"
    },
    "npm:create-hmac@1.1.7": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "cipher-base": "npm:cipher-base@1.0.4",
      "create-hash": "npm:create-hash@1.2.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "inherits": "npm:inherits@2.0.3",
      "ripemd160": "npm:ripemd160@2.0.2",
      "safe-buffer": "npm:safe-buffer@5.1.2",
      "sha.js": "npm:sha.js@2.4.11"
    },
    "npm:cross-spawn@5.1.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "lru-cache": "npm:lru-cache@4.1.3",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "shebang-command": "npm:shebang-command@1.2.0",
      "which": "npm:which@1.3.1"
    },
    "npm:crypto-browserify@3.12.0": {
      "browserify-cipher": "npm:browserify-cipher@1.0.1",
      "browserify-sign": "npm:browserify-sign@4.0.4",
      "create-ecdh": "npm:create-ecdh@4.0.3",
      "create-hash": "npm:create-hash@1.2.0",
      "create-hmac": "npm:create-hmac@1.1.7",
      "diffie-hellman": "npm:diffie-hellman@5.0.3",
      "inherits": "npm:inherits@2.0.3",
      "pbkdf2": "npm:pbkdf2@3.0.17",
      "public-encrypt": "npm:public-encrypt@4.0.3",
      "randombytes": "npm:randombytes@2.0.6",
      "randomfill": "npm:randomfill@1.0.4"
    },
    "npm:crypto-random-string@1.0.0": {
      "crypto": "github:jspm/nodelibs-crypto@0.1.0"
    },
    "npm:d@1.0.0": {
      "es5-ext": "npm:es5-ext@0.10.46"
    },
    "npm:debug@2.6.9": {
      "ms": "npm:ms@2.0.0"
    },
    "npm:debug@3.2.6": {
      "ms": "npm:ms@2.1.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "tty": "github:jspm/nodelibs-tty@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:deep-extend@0.6.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1"
    },
    "npm:default-compare@1.0.0": {
      "kind-of": "npm:kind-of@5.1.0"
    },
    "npm:default-resolution@2.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:define-properties@1.1.3": {
      "object-keys": "npm:object-keys@1.0.12"
    },
    "npm:define-property@0.2.5": {
      "is-descriptor": "npm:is-descriptor@0.1.6"
    },
    "npm:define-property@1.0.0": {
      "is-descriptor": "npm:is-descriptor@1.0.2"
    },
    "npm:define-property@2.0.2": {
      "is-descriptor": "npm:is-descriptor@1.0.2",
      "isobject": "npm:isobject@3.0.1"
    },
    "npm:des.js@1.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "inherits": "npm:inherits@2.0.3",
      "minimalistic-assert": "npm:minimalistic-assert@1.0.1"
    },
    "npm:detect-file@1.0.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:detect-libc@1.0.3": {
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "os": "github:jspm/nodelibs-os@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:diffie-hellman@5.0.3": {
      "bn.js": "npm:bn.js@4.11.8",
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "miller-rabin": "npm:miller-rabin@4.0.1",
      "randombytes": "npm:randombytes@2.0.6",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:domain-browser@1.2.0": {
      "events": "github:jspm/nodelibs-events@0.1.1"
    },
    "npm:dot-prop@4.2.0": {
      "is-obj": "npm:is-obj@1.0.1"
    },
    "npm:duplexer3@0.1.4": {
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:duplexer@0.1.1": {
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:duplexify@3.6.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "end-of-stream": "npm:end-of-stream@1.4.1",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "inherits": "npm:inherits@2.0.3",
      "net": "github:jspm/nodelibs-net@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "readable-stream": "npm:readable-stream@2.3.6",
      "stream-shift": "npm:stream-shift@1.0.0"
    },
    "npm:each-props@1.3.2": {
      "is-plain-object": "npm:is-plain-object@2.0.4",
      "object.defaults": "npm:object.defaults@1.1.0"
    },
    "npm:elliptic@6.4.1": {
      "bn.js": "npm:bn.js@4.11.8",
      "brorand": "npm:brorand@1.1.0",
      "hash.js": "npm:hash.js@1.1.5",
      "hmac-drbg": "npm:hmac-drbg@1.0.1",
      "inherits": "npm:inherits@2.0.3",
      "minimalistic-assert": "npm:minimalistic-assert@1.0.1",
      "minimalistic-crypto-utils": "npm:minimalistic-crypto-utils@1.0.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:end-of-stream@1.4.1": {
      "once": "npm:once@1.4.0"
    },
    "npm:error-ex@1.3.2": {
      "is-arrayish": "npm:is-arrayish@0.2.1",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:es5-ext@0.10.46": {
      "es6-iterator": "npm:es6-iterator@2.0.3",
      "es6-symbol": "npm:es6-symbol@3.1.1",
      "next-tick": "npm:next-tick@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:es6-iterator@2.0.3": {
      "d": "npm:d@1.0.0",
      "es5-ext": "npm:es5-ext@0.10.46",
      "es6-symbol": "npm:es6-symbol@3.1.1"
    },
    "npm:es6-symbol@3.1.1": {
      "d": "npm:d@1.0.0",
      "es5-ext": "npm:es5-ext@0.10.46"
    },
    "npm:es6-weak-map@2.0.2": {
      "d": "npm:d@1.0.0",
      "es5-ext": "npm:es5-ext@0.10.46",
      "es6-iterator": "npm:es6-iterator@2.0.3",
      "es6-symbol": "npm:es6-symbol@3.1.1"
    },
    "npm:event-stream@3.3.6": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "duplexer": "npm:duplexer@0.1.1",
      "flatmap-stream": "npm:flatmap-stream@0.1.1",
      "from": "npm:from@0.1.7",
      "map-stream": "npm:map-stream@0.0.7",
      "pause-stream": "npm:pause-stream@0.0.11",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "split": "npm:split@1.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "stream-combiner": "npm:stream-combiner@0.2.2",
      "through": "npm:through@2.3.8",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:evp_bytestokey@1.0.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "md5.js": "npm:md5.js@1.3.5",
      "safe-buffer": "npm:safe-buffer@5.1.2"
    },
    "npm:execa@0.7.0": {
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "cross-spawn": "npm:cross-spawn@5.1.0",
      "get-stream": "npm:get-stream@3.0.0",
      "is-stream": "npm:is-stream@1.1.0",
      "npm-run-path": "npm:npm-run-path@2.0.2",
      "p-finally": "npm:p-finally@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "signal-exit": "npm:signal-exit@3.0.2",
      "strip-eof": "npm:strip-eof@1.0.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:expand-brackets@2.1.4": {
      "debug": "npm:debug@2.6.9",
      "define-property": "npm:define-property@0.2.5",
      "extend-shallow": "npm:extend-shallow@2.0.1",
      "posix-character-classes": "npm:posix-character-classes@0.1.1",
      "regex-not": "npm:regex-not@1.0.2",
      "snapdragon": "npm:snapdragon@0.8.2",
      "to-regex": "npm:to-regex@3.0.2"
    },
    "npm:expand-tilde@2.0.2": {
      "homedir-polyfill": "npm:homedir-polyfill@1.0.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:extend-shallow@2.0.1": {
      "is-extendable": "npm:is-extendable@0.1.1"
    },
    "npm:extend-shallow@3.0.2": {
      "assign-symbols": "npm:assign-symbols@1.0.0",
      "is-extendable": "npm:is-extendable@1.0.1"
    },
    "npm:extglob@2.0.4": {
      "array-unique": "npm:array-unique@0.3.2",
      "define-property": "npm:define-property@1.0.0",
      "expand-brackets": "npm:expand-brackets@2.1.4",
      "extend-shallow": "npm:extend-shallow@2.0.1",
      "fragment-cache": "npm:fragment-cache@0.2.1",
      "regex-not": "npm:regex-not@1.0.2",
      "snapdragon": "npm:snapdragon@0.8.2",
      "to-regex": "npm:to-regex@3.0.2"
    },
    "npm:fancy-log@1.3.2": {
      "ansi-gray": "npm:ansi-gray@0.1.1",
      "color-support": "npm:color-support@1.1.3",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "time-stamp": "npm:time-stamp@1.1.0"
    },
    "npm:fill-range@4.0.0": {
      "extend-shallow": "npm:extend-shallow@2.0.1",
      "is-number": "npm:is-number@3.0.0",
      "repeat-string": "npm:repeat-string@1.6.1",
      "to-regex-range": "npm:to-regex-range@2.1.1",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:find-up@1.1.2": {
      "path": "github:jspm/nodelibs-path@0.1.0",
      "path-exists": "npm:path-exists@2.1.0",
      "pinkie-promise": "npm:pinkie-promise@2.0.1"
    },
    "npm:findup-sync@2.0.0": {
      "detect-file": "npm:detect-file@1.0.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "is-glob": "npm:is-glob@3.1.0",
      "micromatch": "npm:micromatch@3.1.10",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "resolve-dir": "npm:resolve-dir@1.0.1"
    },
    "npm:fined@1.1.0": {
      "expand-tilde": "npm:expand-tilde@2.0.2",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "is-plain-object": "npm:is-plain-object@2.0.4",
      "object.defaults": "npm:object.defaults@1.1.0",
      "object.pick": "npm:object.pick@1.3.0",
      "parse-filepath": "npm:parse-filepath@1.0.2",
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:flagged-respawn@1.0.0": {
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:flatmap-stream@0.1.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:flush-write-stream@1.0.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "inherits": "npm:inherits@2.0.3",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "readable-stream": "npm:readable-stream@2.3.6"
    },
    "npm:font-awesome@4.6.3": {
      "css": "github:systemjs/plugin-css@0.1.31"
    },
    "npm:for-own@1.0.0": {
      "for-in": "npm:for-in@1.0.2"
    },
    "npm:fragment-cache@0.2.1": {
      "map-cache": "npm:map-cache@0.2.2"
    },
    "npm:from@0.1.7": {
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:fs-minipass@1.2.5": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "minipass": "npm:minipass@2.3.5",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:fs-mkdirp-stream@1.0.0": {
      "graceful-fs": "npm:graceful-fs@4.1.15",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "through2": "npm:through2@2.0.5"
    },
    "npm:fs.realpath@1.0.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:fsevents@1.2.4": {
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "nan": "npm:nan@2.11.1",
      "node-pre-gyp": "npm:node-pre-gyp@0.10.3",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:gauge@2.7.4": {
      "aproba": "npm:aproba@1.2.0",
      "console-control-strings": "npm:console-control-strings@1.1.0",
      "has-unicode": "npm:has-unicode@2.0.1",
      "object-assign": "npm:object-assign@4.1.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "signal-exit": "npm:signal-exit@3.0.2",
      "string-width": "npm:string-width@1.0.2",
      "strip-ansi": "npm:strip-ansi@3.0.1",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "wide-align": "npm:wide-align@1.1.3"
    },
    "npm:get-stream@3.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:glob-parent@3.1.0": {
      "is-glob": "npm:is-glob@3.1.0",
      "os": "github:jspm/nodelibs-os@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "path-dirname": "npm:path-dirname@1.0.2"
    },
    "npm:glob-stream@6.1.0": {
      "extend": "npm:extend@3.0.2",
      "glob": "npm:glob@7.1.3",
      "glob-parent": "npm:glob-parent@3.1.0",
      "is-negated-glob": "npm:is-negated-glob@1.0.0",
      "ordered-read-streams": "npm:ordered-read-streams@1.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "pumpify": "npm:pumpify@1.5.1",
      "readable-stream": "npm:readable-stream@2.3.6",
      "remove-trailing-separator": "npm:remove-trailing-separator@1.1.0",
      "to-absolute-glob": "npm:to-absolute-glob@2.0.2",
      "unique-stream": "npm:unique-stream@2.2.1",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:glob-watcher@5.0.1": {
      "async-done": "npm:async-done@1.3.1",
      "chokidar": "npm:chokidar@2.0.4",
      "just-debounce": "npm:just-debounce@1.0.0",
      "object.defaults": "npm:object.defaults@1.1.0"
    },
    "npm:glob@7.1.3": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "fs.realpath": "npm:fs.realpath@1.0.0",
      "inflight": "npm:inflight@1.0.6",
      "inherits": "npm:inherits@2.0.3",
      "minimatch": "npm:minimatch@3.0.4",
      "once": "npm:once@1.4.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "path-is-absolute": "npm:path-is-absolute@1.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:global-dirs@0.1.1": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "ini": "npm:ini@1.3.5",
      "os": "github:jspm/nodelibs-os@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:global-modules@1.0.0": {
      "global-prefix": "npm:global-prefix@1.0.2",
      "is-windows": "npm:is-windows@1.0.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "resolve-dir": "npm:resolve-dir@1.0.1"
    },
    "npm:global-prefix@1.0.2": {
      "expand-tilde": "npm:expand-tilde@2.0.2",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "homedir-polyfill": "npm:homedir-polyfill@1.0.1",
      "ini": "npm:ini@1.3.5",
      "is-windows": "npm:is-windows@1.0.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "which": "npm:which@1.3.1"
    },
    "npm:global@4.3.2": {
      "process": "npm:process@0.5.2"
    },
    "npm:glogg@1.0.1": {
      "sparkles": "npm:sparkles@1.0.1",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:got@6.7.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "create-error-class": "npm:create-error-class@3.0.2",
      "duplexer3": "npm:duplexer3@0.1.4",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "get-stream": "npm:get-stream@3.0.0",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "https": "github:jspm/nodelibs-https@0.1.0",
      "is-redirect": "npm:is-redirect@1.0.0",
      "is-retry-allowed": "npm:is-retry-allowed@1.1.0",
      "is-stream": "npm:is-stream@1.1.0",
      "lowercase-keys": "npm:lowercase-keys@1.0.1",
      "querystring": "github:jspm/nodelibs-querystring@0.1.0",
      "safe-buffer": "npm:safe-buffer@5.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2",
      "timed-out": "npm:timed-out@4.0.1",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "url-parse-lax": "npm:url-parse-lax@1.0.0"
    },
    "npm:graceful-fs@4.1.15": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "constants": "github:jspm/nodelibs-constants@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:gulp-cli@2.0.1": {
      "ansi-colors": "npm:ansi-colors@1.1.0",
      "archy": "npm:archy@1.0.0",
      "array-sort": "npm:array-sort@1.0.0",
      "color-support": "npm:color-support@1.1.3",
      "concat-stream": "npm:concat-stream@1.6.2",
      "copy-props": "npm:copy-props@2.0.4",
      "fancy-log": "npm:fancy-log@1.3.2",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "gulplog": "npm:gulplog@1.0.0",
      "https": "github:jspm/nodelibs-https@0.1.0",
      "interpret": "npm:interpret@1.1.0",
      "isobject": "npm:isobject@3.0.1",
      "liftoff": "npm:liftoff@2.5.0",
      "matchdep": "npm:matchdep@2.0.0",
      "mute-stdout": "npm:mute-stdout@1.0.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "pretty-hrtime": "npm:pretty-hrtime@1.0.3",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "replace-homedir": "npm:replace-homedir@1.0.0",
      "semver-greatest-satisfied-range": "npm:semver-greatest-satisfied-range@1.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2",
      "v8flags": "npm:v8flags@3.1.1",
      "yargs": "npm:yargs@7.1.0"
    },
    "npm:gulp-nodemon@2.4.1": {
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "colors": "npm:colors@1.3.2",
      "event-stream": "npm:event-stream@3.3.6",
      "gulp": "npm:gulp@4.0.0",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "nodemon": "npm:nodemon@1.18.6",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:gulp@4.0.0": {
      "glob-watcher": "npm:glob-watcher@5.0.1",
      "gulp-cli": "npm:gulp-cli@2.0.1",
      "undertaker": "npm:undertaker@1.2.0",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "vinyl-fs": "npm:vinyl-fs@3.0.3"
    },
    "npm:gulplog@1.0.0": {
      "glogg": "npm:glogg@1.0.1"
    },
    "npm:has-flag@3.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:has-unicode@2.0.1": {
      "os": "github:jspm/nodelibs-os@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:has-value@0.3.1": {
      "get-value": "npm:get-value@2.0.6",
      "has-values": "npm:has-values@0.1.4",
      "isobject": "npm:isobject@2.1.0"
    },
    "npm:has-value@1.0.0": {
      "get-value": "npm:get-value@2.0.6",
      "has-values": "npm:has-values@1.0.0",
      "isobject": "npm:isobject@3.0.1"
    },
    "npm:has-values@1.0.0": {
      "is-number": "npm:is-number@3.0.0",
      "kind-of": "npm:kind-of@4.0.0"
    },
    "npm:hash-base@3.0.4": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "inherits": "npm:inherits@2.0.3",
      "safe-buffer": "npm:safe-buffer@5.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:hash.js@1.1.5": {
      "inherits": "npm:inherits@2.0.3",
      "minimalistic-assert": "npm:minimalistic-assert@1.0.1"
    },
    "npm:hmac-drbg@1.0.1": {
      "hash.js": "npm:hash.js@1.1.5",
      "minimalistic-assert": "npm:minimalistic-assert@1.0.1",
      "minimalistic-crypto-utils": "npm:minimalistic-crypto-utils@1.0.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:homedir-polyfill@1.0.1": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "os": "github:jspm/nodelibs-os@0.1.0",
      "parse-passwd": "npm:parse-passwd@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:homefront@1.3.4": {
      "extend": "npm:extend@3.0.2"
    },
    "npm:hosted-git-info@2.7.1": {
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:https-browserify@0.0.0": {
      "http": "github:jspm/nodelibs-http@1.7.1"
    },
    "npm:iconv-lite@0.4.24": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "safer-buffer": "npm:safer-buffer@2.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "string_decoder": "github:jspm/nodelibs-string_decoder@0.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:ignore-walk@3.0.1": {
      "events": "github:jspm/nodelibs-events@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "minimatch": "npm:minimatch@3.0.4",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:inflight@1.0.6": {
      "once": "npm:once@1.4.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "wrappy": "npm:wrappy@1.0.2"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:inherits@2.0.3": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:ini@1.3.5": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:is-absolute@1.0.0": {
      "is-relative": "npm:is-relative@1.0.0",
      "is-windows": "npm:is-windows@1.0.2"
    },
    "npm:is-accessor-descriptor@0.1.6": {
      "kind-of": "npm:kind-of@3.2.2"
    },
    "npm:is-accessor-descriptor@1.0.0": {
      "kind-of": "npm:kind-of@6.0.2"
    },
    "npm:is-binary-path@1.0.1": {
      "binary-extensions": "npm:binary-extensions@1.12.0",
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:is-buffer@1.1.6": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1"
    },
    "npm:is-builtin-module@1.0.0": {
      "builtin-modules": "npm:builtin-modules@1.1.1"
    },
    "npm:is-ci@1.2.1": {
      "ci-info": "npm:ci-info@1.6.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:is-data-descriptor@0.1.4": {
      "kind-of": "npm:kind-of@3.2.2"
    },
    "npm:is-data-descriptor@1.0.0": {
      "kind-of": "npm:kind-of@6.0.2"
    },
    "npm:is-descriptor@0.1.6": {
      "is-accessor-descriptor": "npm:is-accessor-descriptor@0.1.6",
      "is-data-descriptor": "npm:is-data-descriptor@0.1.4",
      "kind-of": "npm:kind-of@5.1.0"
    },
    "npm:is-descriptor@1.0.2": {
      "is-accessor-descriptor": "npm:is-accessor-descriptor@1.0.0",
      "is-data-descriptor": "npm:is-data-descriptor@1.0.0",
      "kind-of": "npm:kind-of@6.0.2"
    },
    "npm:is-extendable@1.0.1": {
      "is-plain-object": "npm:is-plain-object@2.0.4"
    },
    "npm:is-fullwidth-code-point@1.0.0": {
      "number-is-nan": "npm:number-is-nan@1.0.1"
    },
    "npm:is-glob@3.1.0": {
      "is-extglob": "npm:is-extglob@2.1.1"
    },
    "npm:is-glob@4.0.0": {
      "is-extglob": "npm:is-extglob@2.1.1"
    },
    "npm:is-installed-globally@0.1.0": {
      "global-dirs": "npm:global-dirs@0.1.1",
      "is-path-inside": "npm:is-path-inside@1.0.1"
    },
    "npm:is-npm@1.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:is-number@3.0.0": {
      "kind-of": "npm:kind-of@3.2.2"
    },
    "npm:is-path-inside@1.0.1": {
      "path": "github:jspm/nodelibs-path@0.1.0",
      "path-is-inside": "npm:path-is-inside@1.0.2"
    },
    "npm:is-plain-object@2.0.4": {
      "isobject": "npm:isobject@3.0.1"
    },
    "npm:is-relative@1.0.0": {
      "is-unc-path": "npm:is-unc-path@1.0.0"
    },
    "npm:is-unc-path@1.0.0": {
      "unc-path-regex": "npm:unc-path-regex@0.1.2"
    },
    "npm:is-windows@1.0.2": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:isexe@2.0.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:isobject@2.1.0": {
      "isarray": "npm:isarray@1.0.0"
    },
    "npm:json-stable-stringify@1.0.1": {
      "jsonify": "npm:jsonify@0.0.0"
    },
    "npm:kind-of@3.2.2": {
      "is-buffer": "npm:is-buffer@1.1.6"
    },
    "npm:kind-of@4.0.0": {
      "is-buffer": "npm:is-buffer@1.1.6"
    },
    "npm:last-run@1.1.1": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "default-resolution": "npm:default-resolution@2.0.0",
      "es6-weak-map": "npm:es6-weak-map@2.0.2"
    },
    "npm:latest-version@3.1.0": {
      "package-json": "npm:package-json@4.0.1"
    },
    "npm:lazystream@1.0.0": {
      "readable-stream": "npm:readable-stream@2.3.6",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:lcid@1.0.0": {
      "invert-kv": "npm:invert-kv@1.0.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:lead@1.0.0": {
      "flush-write-stream": "npm:flush-write-stream@1.0.3",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:liftoff@2.5.0": {
      "events": "github:jspm/nodelibs-events@0.1.1",
      "extend": "npm:extend@3.0.2",
      "findup-sync": "npm:findup-sync@2.0.0",
      "fined": "npm:fined@1.1.0",
      "flagged-respawn": "npm:flagged-respawn@1.0.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "is-plain-object": "npm:is-plain-object@2.0.4",
      "object.map": "npm:object.map@1.0.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "rechoir": "npm:rechoir@0.6.2",
      "resolve": "npm:resolve@1.8.1",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:load-json-file@1.1.0": {
      "graceful-fs": "npm:graceful-fs@4.1.15",
      "parse-json": "npm:parse-json@2.2.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "pify": "npm:pify@2.3.0",
      "pinkie-promise": "npm:pinkie-promise@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "strip-bom": "npm:strip-bom@2.0.0"
    },
    "npm:lodash.debounce@4.0.8": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:lru-cache@4.1.3": {
      "pseudomap": "npm:pseudomap@1.0.2",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "yallist": "npm:yallist@2.1.2"
    },
    "npm:make-dir@1.3.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "pify": "npm:pify@3.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:make-iterator@1.0.1": {
      "kind-of": "npm:kind-of@6.0.2"
    },
    "npm:map-stream@0.0.7": {
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:map-visit@1.0.0": {
      "object-visit": "npm:object-visit@1.0.1",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:matchdep@2.0.0": {
      "findup-sync": "npm:findup-sync@2.0.0",
      "micromatch": "npm:micromatch@3.1.10",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "resolve": "npm:resolve@1.8.1",
      "stack-trace": "npm:stack-trace@0.0.10"
    },
    "npm:md5.js@1.3.5": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "hash-base": "npm:hash-base@3.0.4",
      "inherits": "npm:inherits@2.0.3",
      "safe-buffer": "npm:safe-buffer@5.1.2"
    },
    "npm:memory-pager@1.1.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1"
    },
    "npm:micromatch@3.1.10": {
      "arr-diff": "npm:arr-diff@4.0.0",
      "array-unique": "npm:array-unique@0.3.2",
      "braces": "npm:braces@2.3.2",
      "define-property": "npm:define-property@2.0.2",
      "extend-shallow": "npm:extend-shallow@3.0.2",
      "extglob": "npm:extglob@2.0.4",
      "fragment-cache": "npm:fragment-cache@0.2.1",
      "kind-of": "npm:kind-of@6.0.2",
      "nanomatch": "npm:nanomatch@1.2.13",
      "object.pick": "npm:object.pick@1.3.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "regex-not": "npm:regex-not@1.0.2",
      "snapdragon": "npm:snapdragon@0.8.2",
      "to-regex": "npm:to-regex@3.0.2",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:miller-rabin@4.0.1": {
      "bn.js": "npm:bn.js@4.11.8",
      "brorand": "npm:brorand@1.1.0"
    },
    "npm:minimatch@3.0.4": {
      "brace-expansion": "npm:brace-expansion@1.1.11",
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:minipass@2.3.5": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "safe-buffer": "npm:safe-buffer@5.1.2",
      "string_decoder": "github:jspm/nodelibs-string_decoder@0.1.0",
      "yallist": "npm:yallist@3.0.2"
    },
    "npm:minizlib@1.1.1": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "minipass": "npm:minipass@2.3.5",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:mixin-deep@1.3.1": {
      "for-in": "npm:for-in@1.0.2",
      "is-extendable": "npm:is-extendable@1.0.1"
    },
    "npm:mkdirp@0.5.1": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "minimist": "npm:minimist@0.0.8",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:mongodb-core@3.1.8": {
      "bson": "npm:bson@1.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "dns": "github:jspm/nodelibs-dns@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "net": "github:jspm/nodelibs-net@0.1.2",
      "os": "github:jspm/nodelibs-os@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "querystring": "github:jspm/nodelibs-querystring@0.1.0",
      "require_optional": "npm:require_optional@1.0.1",
      "safe-buffer": "npm:safe-buffer@5.1.2",
      "saslprep": "npm:saslprep@1.0.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2",
      "tls": "github:jspm/nodelibs-tls@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "zlib": "github:jspm/nodelibs-zlib@0.1.0"
    },
    "npm:mongodb@3.1.9": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "dns": "github:jspm/nodelibs-dns@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "mongodb-core": "npm:mongodb-core@3.1.8",
      "os": "github:jspm/nodelibs-os@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "safe-buffer": "npm:safe-buffer@5.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:mute-stdout@1.0.1": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:nan@2.11.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:nanomatch@1.2.13": {
      "arr-diff": "npm:arr-diff@4.0.0",
      "array-unique": "npm:array-unique@0.3.2",
      "define-property": "npm:define-property@2.0.2",
      "extend-shallow": "npm:extend-shallow@3.0.2",
      "fragment-cache": "npm:fragment-cache@0.2.1",
      "is-windows": "npm:is-windows@1.0.2",
      "kind-of": "npm:kind-of@6.0.2",
      "object.pick": "npm:object.pick@1.3.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "regex-not": "npm:regex-not@1.0.2",
      "snapdragon": "npm:snapdragon@0.8.2",
      "to-regex": "npm:to-regex@3.0.2",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:needle@2.2.4": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "debug": "npm:debug@2.6.9",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "https": "github:jspm/nodelibs-https@0.1.0",
      "iconv-lite": "npm:iconv-lite@0.4.24",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "querystring": "github:jspm/nodelibs-querystring@0.1.0",
      "sax": "npm:sax@1.2.4",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "zlib": "github:jspm/nodelibs-zlib@0.1.0"
    },
    "npm:next-tick@1.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:node-pre-gyp@0.10.3": {
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "detect-libc": "npm:detect-libc@1.0.3",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "mkdirp": "npm:mkdirp@0.5.1",
      "needle": "npm:needle@2.2.4",
      "nopt": "npm:nopt@4.0.1",
      "npm-packlist": "npm:npm-packlist@1.1.12",
      "npmlog": "npm:npmlog@4.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "rc": "npm:rc@1.2.8",
      "rimraf": "npm:rimraf@2.6.2",
      "semver": "npm:semver@5.6.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2",
      "tar": "npm:tar@4.4.8",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:nodemon@1.18.6": {
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "chokidar": "npm:chokidar@2.0.4",
      "debug": "npm:debug@3.2.6",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "ignore-by-default": "npm:ignore-by-default@1.0.1",
      "minimatch": "npm:minimatch@3.0.4",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "pstree.remy": "npm:pstree.remy@1.1.0",
      "semver": "npm:semver@5.6.0",
      "supports-color": "npm:supports-color@5.5.0",
      "touch": "npm:touch@3.1.0",
      "undefsafe": "npm:undefsafe@2.0.2",
      "update-notifier": "npm:update-notifier@2.5.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:nopt@1.0.10": {
      "abbrev": "npm:abbrev@1.1.1",
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:nopt@4.0.1": {
      "abbrev": "npm:abbrev@1.1.1",
      "osenv": "npm:osenv@0.1.5",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:normalize-package-data@2.4.0": {
      "hosted-git-info": "npm:hosted-git-info@2.7.1",
      "is-builtin-module": "npm:is-builtin-module@1.0.0",
      "semver": "npm:semver@5.6.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "validate-npm-package-license": "npm:validate-npm-package-license@3.0.4"
    },
    "npm:normalize-path@2.1.1": {
      "remove-trailing-separator": "npm:remove-trailing-separator@1.1.0"
    },
    "npm:now-and-later@2.0.0": {
      "once": "npm:once@1.4.0"
    },
    "npm:npm-bundled@1.0.5": {
      "events": "github:jspm/nodelibs-events@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:npm-packlist@1.1.12": {
      "ignore-walk": "npm:ignore-walk@3.0.1",
      "npm-bundled": "npm:npm-bundled@1.0.5",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:npm-run-path@2.0.2": {
      "path": "github:jspm/nodelibs-path@0.1.0",
      "path-key": "npm:path-key@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:npmlog@4.1.2": {
      "are-we-there-yet": "npm:are-we-there-yet@1.1.5",
      "console-control-strings": "npm:console-control-strings@1.1.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "gauge": "npm:gauge@2.7.4",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "set-blocking": "npm:set-blocking@2.0.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:object-copy@0.1.0": {
      "copy-descriptor": "npm:copy-descriptor@0.1.1",
      "define-property": "npm:define-property@0.2.5",
      "kind-of": "npm:kind-of@3.2.2"
    },
    "npm:object-visit@1.0.1": {
      "isobject": "npm:isobject@3.0.1"
    },
    "npm:object.assign@4.1.0": {
      "define-properties": "npm:define-properties@1.1.3",
      "function-bind": "npm:function-bind@1.1.1",
      "has-symbols": "npm:has-symbols@1.0.0",
      "object-keys": "npm:object-keys@1.0.12"
    },
    "npm:object.defaults@1.1.0": {
      "array-each": "npm:array-each@1.0.1",
      "array-slice": "npm:array-slice@1.1.0",
      "for-own": "npm:for-own@1.0.0",
      "isobject": "npm:isobject@3.0.1"
    },
    "npm:object.map@1.0.1": {
      "for-own": "npm:for-own@1.0.0",
      "make-iterator": "npm:make-iterator@1.0.1"
    },
    "npm:object.pick@1.3.0": {
      "isobject": "npm:isobject@3.0.1"
    },
    "npm:object.reduce@1.0.1": {
      "for-own": "npm:for-own@1.0.0",
      "make-iterator": "npm:make-iterator@1.0.1"
    },
    "npm:once@1.4.0": {
      "wrappy": "npm:wrappy@1.0.2"
    },
    "npm:ordered-read-streams@1.0.1": {
      "readable-stream": "npm:readable-stream@2.3.6",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:os-browserify@0.1.2": {
      "os": "github:jspm/nodelibs-os@0.1.0"
    },
    "npm:os-homedir@1.0.2": {
      "os": "github:jspm/nodelibs-os@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:os-locale@1.4.0": {
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "lcid": "npm:lcid@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:os-tmpdir@1.0.2": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:osenv@0.1.5": {
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "os-homedir": "npm:os-homedir@1.0.2",
      "os-tmpdir": "npm:os-tmpdir@1.0.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:package-json@4.0.1": {
      "got": "npm:got@6.7.1",
      "registry-auth-token": "npm:registry-auth-token@3.3.2",
      "registry-url": "npm:registry-url@3.1.0",
      "semver": "npm:semver@5.6.0",
      "url": "github:jspm/nodelibs-url@0.1.0"
    },
    "npm:pako@0.2.9": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:parse-asn1@5.1.1": {
      "asn1.js": "npm:asn1.js@4.10.1",
      "browserify-aes": "npm:browserify-aes@1.2.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "create-hash": "npm:create-hash@1.2.0",
      "evp_bytestokey": "npm:evp_bytestokey@1.0.3",
      "pbkdf2": "npm:pbkdf2@3.0.17",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:parse-filepath@1.0.2": {
      "is-absolute": "npm:is-absolute@1.0.0",
      "map-cache": "npm:map-cache@0.2.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "path-root": "npm:path-root@0.1.1"
    },
    "npm:parse-json@2.2.0": {
      "error-ex": "npm:error-ex@1.3.2"
    },
    "npm:path-browserify@0.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:path-dirname@1.0.2": {
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:path-exists@2.1.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "pinkie-promise": "npm:pinkie-promise@2.0.1"
    },
    "npm:path-is-absolute@1.0.1": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:path-is-inside@1.0.2": {
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:path-key@2.0.1": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:path-parse@1.0.6": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:path-root@0.1.1": {
      "path-root-regex": "npm:path-root-regex@0.1.2"
    },
    "npm:path-type@1.1.0": {
      "graceful-fs": "npm:graceful-fs@4.1.15",
      "pify": "npm:pify@2.3.0",
      "pinkie-promise": "npm:pinkie-promise@2.0.1"
    },
    "npm:pause-stream@0.0.11": {
      "through": "npm:through@2.3.8"
    },
    "npm:pbkdf2@3.0.17": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "create-hash": "npm:create-hash@1.2.0",
      "create-hmac": "npm:create-hmac@1.1.7",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "ripemd160": "npm:ripemd160@2.0.2",
      "safe-buffer": "npm:safe-buffer@5.1.2",
      "sha.js": "npm:sha.js@2.4.11"
    },
    "npm:pify@2.3.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:pify@3.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:pinkie-promise@2.0.1": {
      "pinkie": "npm:pinkie@2.0.4"
    },
    "npm:process-nextick-args@1.0.7": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:process-nextick-args@2.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:process@0.11.10": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "vm": "github:jspm/nodelibs-vm@0.1.0"
    },
    "npm:ps-tree@1.1.0": {
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "event-stream": "npm:event-stream@3.3.6",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:pseudomap@1.0.2": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:pstree.remy@1.1.0": {
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "ps-tree": "npm:ps-tree@1.1.0"
    },
    "npm:public-encrypt@4.0.3": {
      "bn.js": "npm:bn.js@4.11.8",
      "browserify-rsa": "npm:browserify-rsa@4.0.1",
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "create-hash": "npm:create-hash@1.2.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "parse-asn1": "npm:parse-asn1@5.1.1",
      "randombytes": "npm:randombytes@2.0.6",
      "safe-buffer": "npm:safe-buffer@5.1.2"
    },
    "npm:pump@2.0.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "end-of-stream": "npm:end-of-stream@1.4.1",
      "once": "npm:once@1.4.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:pumpify@1.5.1": {
      "duplexify": "npm:duplexify@3.6.1",
      "inherits": "npm:inherits@2.0.3",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "pump": "npm:pump@2.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:punycode@1.3.2": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:randombytes@2.0.6": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "safe-buffer": "npm:safe-buffer@5.1.2"
    },
    "npm:randomfill@1.0.4": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "randombytes": "npm:randombytes@2.0.6",
      "safe-buffer": "npm:safe-buffer@5.1.2"
    },
    "npm:rc@1.2.8": {
      "deep-extend": "npm:deep-extend@0.6.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "ini": "npm:ini@1.3.5",
      "minimist": "npm:minimist@1.2.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "strip-json-comments": "npm:strip-json-comments@2.0.1"
    },
    "npm:read-pkg-up@1.0.1": {
      "find-up": "npm:find-up@1.1.2",
      "read-pkg": "npm:read-pkg@1.1.0"
    },
    "npm:read-pkg@1.1.0": {
      "load-json-file": "npm:load-json-file@1.1.0",
      "normalize-package-data": "npm:normalize-package-data@2.4.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "path-type": "npm:path-type@1.1.0"
    },
    "npm:readable-stream@1.1.14": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "core-util-is": "npm:core-util-is@1.0.2",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.3",
      "isarray": "npm:isarray@0.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream-browserify": "npm:stream-browserify@1.0.0",
      "string_decoder": "npm:string_decoder@0.10.31"
    },
    "npm:readable-stream@2.3.6": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "core-util-is": "npm:core-util-is@1.0.2",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.3",
      "isarray": "npm:isarray@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "process-nextick-args": "npm:process-nextick-args@2.0.0",
      "safe-buffer": "npm:safe-buffer@5.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "string_decoder": "npm:string_decoder@1.1.1",
      "util-deprecate": "npm:util-deprecate@1.0.2"
    },
    "npm:readdirp@2.2.1": {
      "graceful-fs": "npm:graceful-fs@4.1.15",
      "micromatch": "npm:micromatch@3.1.10",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "readable-stream": "npm:readable-stream@2.3.6",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:rechoir@0.6.2": {
      "path": "github:jspm/nodelibs-path@0.1.0",
      "resolve": "npm:resolve@1.8.1"
    },
    "npm:regex-not@1.0.2": {
      "extend-shallow": "npm:extend-shallow@3.0.2",
      "safe-regex": "npm:safe-regex@1.1.0"
    },
    "npm:registry-auth-token@3.3.2": {
      "process": "github:jspm/nodelibs-process@0.1.2",
      "rc": "npm:rc@1.2.8",
      "safe-buffer": "npm:safe-buffer@5.1.2",
      "url": "github:jspm/nodelibs-url@0.1.0"
    },
    "npm:registry-url@3.1.0": {
      "rc": "npm:rc@1.2.8"
    },
    "npm:remove-bom-buffer@3.0.0": {
      "is-buffer": "npm:is-buffer@1.1.6",
      "is-utf8": "npm:is-utf8@0.2.1"
    },
    "npm:remove-bom-stream@1.2.0": {
      "remove-bom-buffer": "npm:remove-bom-buffer@3.0.0",
      "safe-buffer": "npm:safe-buffer@5.1.2",
      "through2": "npm:through2@2.0.5"
    },
    "npm:remove-trailing-separator@1.1.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:replace-ext@1.0.0": {
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:replace-homedir@1.0.0": {
      "homedir-polyfill": "npm:homedir-polyfill@1.0.1",
      "is-absolute": "npm:is-absolute@1.0.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "remove-trailing-separator": "npm:remove-trailing-separator@1.1.0"
    },
    "npm:require-directory@2.1.1": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:require-main-filename@1.0.1": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:require_optional@1.0.1": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "resolve-from": "npm:resolve-from@2.0.0",
      "semver": "npm:semver@5.6.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:resolve-dir@1.0.1": {
      "expand-tilde": "npm:expand-tilde@2.0.2",
      "global-modules": "npm:global-modules@1.0.0",
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:resolve-from@2.0.0": {
      "module": "github:jspm/nodelibs-module@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:resolve-options@1.1.0": {
      "value-or-function": "npm:value-or-function@3.0.0"
    },
    "npm:resolve@1.8.1": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "path-parse": "npm:path-parse@1.0.6",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:rimraf@2.6.2": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "glob": "npm:glob@7.1.3",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:ripemd160@2.0.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "hash-base": "npm:hash-base@3.0.4",
      "inherits": "npm:inherits@2.0.3"
    },
    "npm:rxjs@6.3.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "tslib": "npm:tslib@1.9.3"
    },
    "npm:safe-buffer@5.1.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1"
    },
    "npm:safe-regex@1.1.0": {
      "ret": "npm:ret@0.1.15"
    },
    "npm:safer-buffer@2.1.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:saslprep@1.0.2": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "sparse-bitfield": "npm:sparse-bitfield@3.0.3"
    },
    "npm:sax@1.2.4": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "string_decoder": "github:jspm/nodelibs-string_decoder@0.1.0"
    },
    "npm:semver-diff@2.1.0": {
      "semver": "npm:semver@5.6.0"
    },
    "npm:semver-greatest-satisfied-range@1.1.0": {
      "sver-compat": "npm:sver-compat@1.5.0"
    },
    "npm:semver@5.6.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:set-blocking@2.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:set-value@0.4.3": {
      "extend-shallow": "npm:extend-shallow@2.0.1",
      "is-extendable": "npm:is-extendable@0.1.1",
      "is-plain-object": "npm:is-plain-object@2.0.4",
      "to-object-path": "npm:to-object-path@0.3.0"
    },
    "npm:set-value@2.0.0": {
      "extend-shallow": "npm:extend-shallow@2.0.1",
      "is-extendable": "npm:is-extendable@0.1.1",
      "is-plain-object": "npm:is-plain-object@2.0.4",
      "split-string": "npm:split-string@3.1.0"
    },
    "npm:sha.js@2.4.11": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inherits": "npm:inherits@2.0.3",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "safe-buffer": "npm:safe-buffer@5.1.2"
    },
    "npm:shebang-command@1.2.0": {
      "shebang-regex": "npm:shebang-regex@1.0.0"
    },
    "npm:signal-exit@3.0.2": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:snapdragon-node@2.1.1": {
      "define-property": "npm:define-property@1.0.0",
      "isobject": "npm:isobject@3.0.1",
      "snapdragon-util": "npm:snapdragon-util@3.0.1"
    },
    "npm:snapdragon-util@3.0.1": {
      "kind-of": "npm:kind-of@3.2.2"
    },
    "npm:snapdragon@0.8.2": {
      "base": "npm:base@0.11.2",
      "debug": "npm:debug@2.6.9",
      "define-property": "npm:define-property@0.2.5",
      "extend-shallow": "npm:extend-shallow@2.0.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "map-cache": "npm:map-cache@0.2.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "source-map": "npm:source-map@0.5.7",
      "source-map-resolve": "npm:source-map-resolve@0.5.2",
      "use": "npm:use@3.1.1",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:source-map-resolve@0.5.2": {
      "atob": "npm:atob@2.1.2",
      "decode-uri-component": "npm:decode-uri-component@0.2.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "resolve-url": "npm:resolve-url@0.2.1",
      "source-map-url": "npm:source-map-url@0.4.0",
      "urix": "npm:urix@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0"
    },
    "npm:source-map@0.5.7": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:sparkles@1.0.1": {
      "events": "github:jspm/nodelibs-events@0.1.1"
    },
    "npm:sparse-bitfield@3.0.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "memory-pager": "npm:memory-pager@1.1.0"
    },
    "npm:spdx-correct@3.0.2": {
      "spdx-expression-parse": "npm:spdx-expression-parse@3.0.0",
      "spdx-license-ids": "npm:spdx-license-ids@3.0.2"
    },
    "npm:spdx-expression-parse@3.0.0": {
      "spdx-exceptions": "npm:spdx-exceptions@2.2.0",
      "spdx-license-ids": "npm:spdx-license-ids@3.0.2"
    },
    "npm:split-string@3.1.0": {
      "extend-shallow": "npm:extend-shallow@3.0.2"
    },
    "npm:split@1.0.1": {
      "process": "github:jspm/nodelibs-process@0.1.2",
      "string_decoder": "github:jspm/nodelibs-string_decoder@0.1.0",
      "through": "npm:through@2.3.8",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:static-extend@0.1.2": {
      "define-property": "npm:define-property@0.2.5",
      "object-copy": "npm:object-copy@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:stream-browserify@1.0.0": {
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.3",
      "readable-stream": "npm:readable-stream@1.1.14"
    },
    "npm:stream-combiner@0.2.2": {
      "duplexer": "npm:duplexer@0.1.1",
      "through": "npm:through@2.3.8"
    },
    "npm:stream-exhaust@1.0.2": {
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:stream-shift@1.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:string-width@1.0.2": {
      "code-point-at": "npm:code-point-at@1.1.0",
      "is-fullwidth-code-point": "npm:is-fullwidth-code-point@1.0.0",
      "strip-ansi": "npm:strip-ansi@3.0.1"
    },
    "npm:string-width@2.1.1": {
      "is-fullwidth-code-point": "npm:is-fullwidth-code-point@2.0.0",
      "strip-ansi": "npm:strip-ansi@4.0.0"
    },
    "npm:string_decoder@0.10.31": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1"
    },
    "npm:string_decoder@1.1.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "safe-buffer": "npm:safe-buffer@5.1.2"
    },
    "npm:strip-ansi@3.0.1": {
      "ansi-regex": "npm:ansi-regex@2.1.1"
    },
    "npm:strip-ansi@4.0.0": {
      "ansi-regex": "npm:ansi-regex@3.0.0"
    },
    "npm:strip-bom@2.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "is-utf8": "npm:is-utf8@0.2.1"
    },
    "npm:supports-color@5.5.0": {
      "has-flag": "npm:has-flag@3.0.0",
      "os": "github:jspm/nodelibs-os@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:sver-compat@1.5.0": {
      "es6-iterator": "npm:es6-iterator@2.0.3",
      "es6-symbol": "npm:es6-symbol@3.1.1"
    },
    "npm:tar@4.4.8": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "chownr": "npm:chownr@1.1.1",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "fs-minipass": "npm:fs-minipass@1.2.5",
      "minipass": "npm:minipass@2.3.5",
      "minizlib": "npm:minizlib@1.1.1",
      "mkdirp": "npm:mkdirp@0.5.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "safe-buffer": "npm:safe-buffer@5.1.2",
      "yallist": "npm:yallist@3.0.2"
    },
    "npm:term-size@1.2.0": {
      "execa": "npm:execa@0.7.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:through2-filter@2.0.0": {
      "through2": "npm:through2@2.0.5",
      "xtend": "npm:xtend@4.0.1"
    },
    "npm:through2@2.0.5": {
      "process": "github:jspm/nodelibs-process@0.1.2",
      "readable-stream": "npm:readable-stream@2.3.6",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "xtend": "npm:xtend@4.0.1"
    },
    "npm:through@2.3.8": {
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:timers-browserify@1.4.2": {
      "process": "npm:process@0.11.10"
    },
    "npm:to-absolute-glob@2.0.2": {
      "is-absolute": "npm:is-absolute@1.0.0",
      "is-negated-glob": "npm:is-negated-glob@1.0.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:to-object-path@0.3.0": {
      "kind-of": "npm:kind-of@3.2.2"
    },
    "npm:to-regex-range@2.1.1": {
      "is-number": "npm:is-number@3.0.0",
      "repeat-string": "npm:repeat-string@1.6.1"
    },
    "npm:to-regex@3.0.2": {
      "define-property": "npm:define-property@2.0.2",
      "extend-shallow": "npm:extend-shallow@3.0.2",
      "regex-not": "npm:regex-not@1.0.2",
      "safe-regex": "npm:safe-regex@1.1.0"
    },
    "npm:to-through@2.0.0": {
      "through2": "npm:through2@2.0.5"
    },
    "npm:touch@3.1.0": {
      "constants": "github:jspm/nodelibs-constants@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "nopt": "npm:nopt@1.0.10",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:undefsafe@2.0.2": {
      "debug": "npm:debug@2.6.9"
    },
    "npm:undertaker@1.2.0": {
      "arr-flatten": "npm:arr-flatten@1.1.0",
      "arr-map": "npm:arr-map@2.0.2",
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "bach": "npm:bach@1.2.0",
      "collection-map": "npm:collection-map@1.0.0",
      "es6-weak-map": "npm:es6-weak-map@2.0.2",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "last-run": "npm:last-run@1.1.1",
      "object.defaults": "npm:object.defaults@1.1.0",
      "object.reduce": "npm:object.reduce@1.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "undertaker-registry": "npm:undertaker-registry@1.0.1",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:union-value@1.0.0": {
      "arr-union": "npm:arr-union@3.1.0",
      "get-value": "npm:get-value@2.0.6",
      "is-extendable": "npm:is-extendable@0.1.1",
      "set-value": "npm:set-value@0.4.3"
    },
    "npm:unique-stream@2.2.1": {
      "json-stable-stringify": "npm:json-stable-stringify@1.0.1",
      "through2-filter": "npm:through2-filter@2.0.0"
    },
    "npm:unique-string@1.0.0": {
      "crypto-random-string": "npm:crypto-random-string@1.0.0"
    },
    "npm:unset-value@1.0.0": {
      "has-value": "npm:has-value@0.3.1",
      "isobject": "npm:isobject@3.0.1"
    },
    "npm:upath@1.1.0": {
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:update-notifier@2.5.0": {
      "boxen": "npm:boxen@1.3.0",
      "chalk": "npm:chalk@2.4.1",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "configstore": "npm:configstore@3.1.2",
      "import-lazy": "npm:import-lazy@2.1.0",
      "is-ci": "npm:is-ci@1.2.1",
      "is-installed-globally": "npm:is-installed-globally@0.1.0",
      "is-npm": "npm:is-npm@1.0.0",
      "latest-version": "npm:latest-version@3.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "semver-diff": "npm:semver-diff@2.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "xdg-basedir": "npm:xdg-basedir@3.0.0"
    },
    "npm:urix@0.1.0": {
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:url-parse-lax@1.0.0": {
      "prepend-http": "npm:prepend-http@1.0.4",
      "url": "github:jspm/nodelibs-url@0.1.0"
    },
    "npm:url@0.10.3": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "punycode": "npm:punycode@1.3.2",
      "querystring": "npm:querystring@0.2.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:util-deprecate@1.0.2": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:v8flags@3.1.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "homedir-polyfill": "npm:homedir-polyfill@1.0.1",
      "os": "github:jspm/nodelibs-os@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:validate-npm-package-license@3.0.4": {
      "spdx-correct": "npm:spdx-correct@3.0.2",
      "spdx-expression-parse": "npm:spdx-expression-parse@3.0.0"
    },
    "npm:vinyl-fs@3.0.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "fs-mkdirp-stream": "npm:fs-mkdirp-stream@1.0.0",
      "glob-stream": "npm:glob-stream@6.1.0",
      "graceful-fs": "npm:graceful-fs@4.1.15",
      "is-valid-glob": "npm:is-valid-glob@1.0.0",
      "lazystream": "npm:lazystream@1.0.0",
      "lead": "npm:lead@1.0.0",
      "object.assign": "npm:object.assign@4.1.0",
      "os": "github:jspm/nodelibs-os@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "pumpify": "npm:pumpify@1.5.1",
      "readable-stream": "npm:readable-stream@2.3.6",
      "remove-bom-buffer": "npm:remove-bom-buffer@3.0.0",
      "remove-bom-stream": "npm:remove-bom-stream@1.2.0",
      "resolve-options": "npm:resolve-options@1.1.0",
      "through2": "npm:through2@2.0.5",
      "to-through": "npm:to-through@2.0.0",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "value-or-function": "npm:value-or-function@3.0.0",
      "vinyl": "npm:vinyl@2.2.0",
      "vinyl-sourcemap": "npm:vinyl-sourcemap@1.1.0"
    },
    "npm:vinyl-sourcemap@1.1.0": {
      "append-buffer": "npm:append-buffer@1.0.2",
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "convert-source-map": "npm:convert-source-map@1.6.0",
      "graceful-fs": "npm:graceful-fs@4.1.15",
      "normalize-path": "npm:normalize-path@2.1.1",
      "now-and-later": "npm:now-and-later@2.0.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "remove-bom-buffer": "npm:remove-bom-buffer@3.0.0",
      "vinyl": "npm:vinyl@2.2.0"
    },
    "npm:vinyl@2.2.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "clone": "npm:clone@2.1.2",
      "clone-buffer": "npm:clone-buffer@1.0.0",
      "clone-stats": "npm:clone-stats@1.0.0",
      "cloneable-readable": "npm:cloneable-readable@1.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "remove-trailing-separator": "npm:remove-trailing-separator@1.1.0",
      "replace-ext": "npm:replace-ext@1.0.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:vm-browserify@0.0.4": {
      "indexof": "npm:indexof@0.0.1"
    },
    "npm:which@1.3.1": {
      "isexe": "npm:isexe@2.0.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:wide-align@1.1.3": {
      "string-width": "npm:string-width@2.1.1"
    },
    "npm:widest-line@2.0.1": {
      "string-width": "npm:string-width@2.1.1"
    },
    "npm:wrap-ansi@2.1.0": {
      "string-width": "npm:string-width@1.0.2",
      "strip-ansi": "npm:strip-ansi@3.0.1"
    },
    "npm:write-file-atomic@2.3.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "graceful-fs": "npm:graceful-fs@4.1.15",
      "imurmurhash": "npm:imurmurhash@0.1.4",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "signal-exit": "npm:signal-exit@3.0.2"
    },
    "npm:xdg-basedir@3.0.0": {
      "os": "github:jspm/nodelibs-os@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:y18n@3.2.1": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:yargs-parser@5.0.0": {
      "camelcase": "npm:camelcase@3.0.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:yargs@7.1.0": {
      "camelcase": "npm:camelcase@3.0.0",
      "cliui": "npm:cliui@3.2.0",
      "decamelize": "npm:decamelize@1.2.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "get-caller-file": "npm:get-caller-file@1.0.3",
      "os-locale": "npm:os-locale@1.4.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "read-pkg-up": "npm:read-pkg-up@1.0.1",
      "require-directory": "npm:require-directory@2.1.1",
      "require-main-filename": "npm:require-main-filename@1.0.1",
      "set-blocking": "npm:set-blocking@2.0.0",
      "string-width": "npm:string-width@1.0.2",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "which-module": "npm:which-module@1.0.0",
      "y18n": "npm:y18n@3.2.1",
      "yargs-parser": "npm:yargs-parser@5.0.0"
    }
  }
});