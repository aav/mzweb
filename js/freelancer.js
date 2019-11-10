/* ===================================================
 * template specific javascript funtions
 * ================================================ */


function init_masonry(){

    var $container = $('#portfolio');
    var gutter = 12;
    var min_width = 150;

    $container.imagesLoaded( function(){

        $container.masonry({

            itemSelector: '.portfolio-item',
            gutterWidth: gutter,
            isAnimated: true,
            columnWidth: function( containerWidth ) {

                var num_of_boxes = (containerWidth/min_width | 0);

                var box_width = (((containerWidth - (num_of_boxes-1)*gutter)/num_of_boxes) | 0) ;

                if (containerWidth < min_width) {
                    box_width = containerWidth;
                }

                $('.portfolio-item').width(box_width);

                return box_width;
            }
        });
    });
}

$('a[href="#portfolio-tab"]').on('shown', function (e){

    init_masonry();

    window.setTimeout(function() {

        $(window).trigger('resize');

    }, 1000);

});


$(document).ready(function() {
    $("h4.my-skill").each(function(ix) {
         var host = $(this);
         var span = $(document.createElement("span"));

         host.append(span);

         var rank = 0;

         var data_rank = host.data("rank");
         if(data_rank)
            rank = parseInt(data_rank);

         for(n=1; n<=5; n++) {
                var star = $(document.createElement("i"));

                star.addClass(n <= rank ? "fa fa-star" : "fa fa-star-o");
                span.append(star);
         }
    });
});
