
(function(tagger) {
  if (typeof define === 'function' && define.amd) {
    define(function(require, exports, module) { tagger(require('riot'), require, exports, module)})
  } else if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    tagger(require('riot'), require, exports, module)
  } else {
    tagger(window.riot)
  }
})(function(riot, require, exports, module) {
riot.tag2('document-tag', '<head> <meta charset="utf-8"> <meta content="IE=10" http-equiv="X-UA-Compatible"> <meta content="width=device-width, initial-scale=1.0" name="viewport"> <title>{opts.title}</title> <script riot-src="{\'/dependencies/js/require.js\'}" type="text/javascript"></script> <script riot-src="{\'/dependencies/js/config/require.config.js\'}" type="text/javascript"></script> </head> <body ref="bodyLayout" id="bodyLayout"> <h1>{opts.message}</h1> </body>', '', '', function(opts) {

    var tagName = 'html'
    this.root.tagName = this.root.nodeName = tagName
    this.on('mount', function(){
      console.log(this.refs.bodyLayout)

    })
});

riot.tag2('first-tag', '<div>first</div>', '', '', function(opts) {
    const riot = require('riot')
    const stores = require('stores')
    console.log(stores)
});

riot.tag2('inner', '<div>456</div>', '', '', function(opts) {
});

riot.tag2('layout-tag', '<div data-is="{tag}">123</div> <button onclick="{click}">Click!</button> <button onclick="{clickMe}">Click me!</button>', '', '', function(opts) {
    this.click = function(event){
      alert('clicked')
      this.tag = 'first-tag'
    }.bind(this)
    this.clickMe = function(event){
      alert('clicked')
      this.tag = 'second-tag'
    }.bind(this)
});

riot.tag2('second-tag', '<div>second</div>', '', '', function(opts) {
});
});