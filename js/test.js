$('document').ready(function(){
var iconTop=$(".scroll");
    
    $(window).scroll(function()

        {
        
            if( $(this).scrollTop()>=700)
                {
                  iconTop.show();    
                }
            else
                {
                    iconTop.hide();
                }
            iconTop.click(function(){
                $("html,body").animate({ scrollTop:0},600);
            });
        });

});