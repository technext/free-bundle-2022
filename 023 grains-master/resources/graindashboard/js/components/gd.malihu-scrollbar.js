/**
 * GDScrollBar component.
 */
;(function ($) {
  'use strict';

  $.GDCore.components.GDMalihuScrollBar = {

    /**
     * Base configuration.
     *
     * @private
     */
    _baseConfig: {
      scrollInertia: 150,
      theme: 'minimal-dark'
    },

    /**
     * Collection of all initalized items on the page.
     *
     * @private
     */
    _pageCollection: $(),


    /**
     * Initialization of GDScrollBar component.
     *
     * @param {jQuery} collection
     * @param {Object} config 
     *
     * @return {jQuery}
     */
    init: function (collection, config) {

      if(!collection || !collection.length) return;

      var self = this;

      config = config && $.isPlainObject(config) ? $.extend(true, {}, config, this._baseConfig) : this._baseConfig;

      return collection.each(function(i, el){

        var $this = $(el),
            scrollBar,
            scrollBarThumb,
            itemConfig = $.extend(true, {}, config, $this.data());


        $this.mCustomScrollbar(itemConfig);

        scrollBar = $this.find('.mCSB_scrollTools');
        scrollBarThumb = $this.find('.mCSB_dragger_bar');

        if(scrollBar.length && $this.data('scroll-classes')) {
          scrollBar.addClass($this.data('scroll-classes'));
        }

        if(scrollBarThumb.length && $this.data('scroll-thumb-classes')) {
          scrollBarThumb.addClass($this.data('scroll-thumb-classes'));
        }

        self._pageCollection = self._pageCollection.add($this);

      });

    },

    /**
     * Destroys the component.
     * 
     * @param {jQuery} collection
     * 
     * @return {jQuery}
     */
    destroy: function( collection ) {

      if( !collection && !collection.length ) return $();

      var _self = this;

      return collection.each(function(i, el){

         var $this = $(el);

         $this.mCustomScrollbar('destroy');

         _self._pageCollection = _self._pageCollection.not( $this );

      });

    }

  }

})(jQuery);
