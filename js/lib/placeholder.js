$(function(){
    var Common = {
    placeholder: function($input, $parent) {
        var placeholder = 'placeholder' in document.createElement('input');
        $parent = $parent || $("input").parents() || $('textarea').parents();

        ! placeholder &&  $input.each(function() {
            var $this =  $(this),
                tip = $this.attr('placeholder'),
                $placeholder;

            if (tip) {
                $placeholder = $.data(this, 'placeholder');
                if (!$placeholder) {
                    $placeholder = $('<span class="placeholder-tip"></span>').appendTo($parent);
                    $placeholder.html(tip);
                    $.data(this, 'placeholder', $placeholder);
                }

                $placeholder.css('left', $this.offset().left - $parent.offset().left + parseInt($this.css('padding-left')));
                $placeholder.css('top', $this.offset().top - $parent.offset().top);
                if (this.tagName == 'INPUT') $placeholder.css('line-height', $this.height() + 'px');

                $placeholder.toggleClass('hide', $this.val() !== '');
                $placeholder.on('click', function() {$this.focus()});
                $this.on('focus', function() {
                    $placeholder.toggleClass('hide', true);
                }).on('blur', function() {
                    $placeholder.toggleClass('hide', $this.val() !== '');
                });

                if($this.is(':hidden')){
                    $placeholder.toggleClass('hide', true);
                }
                else{
                    $placeholder.toggleClass('hide', $this.val() !== '');
                }
            }
        });
    }
};

Common.placeholder($('.placeholder'));
window.onresize = function () {
    Common.placeholder($('.placeholder'));
}
})