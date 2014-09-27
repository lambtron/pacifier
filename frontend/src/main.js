requirejs.config({
  baseUrl: 'src',
  paths: {
    // jquery: 'http://cdnjs.cloudflare.com/ajax/libs/jquery/1.8.3/jquery',
    // underscore: 'http://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.4.4/underscore',
    // backbone: 'http://cdnjs.cloudflare.com/ajax/libs/backbone.js/1.0.0/backbone',
    jquery: "../lib/jquery",
    underscore: "../lib/underscore",
    backbone: "../lib/backbone",
    text: "../node_modules/text/text"
  },
  shim: {
    backbone: {
      deps: ['jquery', 'underscore'],
      exports: 'Backbone'
    },
    underscore: {
      exports: '_'
    },
    jquery: {
      exports: '$'
    }
  }
});

define(['underscore', 'backbone', 'jquery', 'view/application'],
  function(_, Backbone, $, Application) {
    new Application({ el: $(".application") });
  });