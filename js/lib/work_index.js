(function($) {

    var funName = {
        parameter: null,

        init: function(){
            this.parameter = {};
            this.windowBox();
            this.countWidth();
            this.changeStyle();
            this.mangeContrl();
            this.workTab();
        },

        //弹出框
        windowBox: function(){
            var me = this,
                $close = $(".close-icon"),
                $pop_btn = $(".btn2");
                $shade = $("#mask-layer"),
                $outside_window = $(".outside-window"),
                width_val = $outside_window.width(),
                left_val = width_val/2,
                height_val = $outside_window.height(),
                body_heihgt = $(window).height();
                top_height = (body_heihgt-height_val)/2;

                $outside_window.css({'margin-left':-left_val,'top':top_height});

                $pop_btn.on("click",function(){
                var tp = $(window).scrollTop(),
                    wh = $(window).innerHeight(),
                    ch = $outside_window.height(),
                    gh = (wh-ch) / 2 + tp;

                    $shade.css("display","block");
                    $outside_window.css("display","block");
                    $outside_window.css("top",gh);
                    $('body').css({'overflow':'hidden','height':'100%'})

                });

                $(window).scroll(function() {
                    var stp = $(window).scrollTop(),
                        swh = $(window).innerHeight(),
                        sch = $outside_window.height(),
                        sgh = (swh - sch) / 2 + stp;

                        $outside_window.animate({"top": sgh + "px"},50);
                });

                $close.on('click',function(){
                    $shade.hide();
                    $outside_window.hide();
                    $('body').css({'overflow':'auto','height':'auto'})
                })
        },

        //计算右边sub-nav宽度
        countWidth: function(){
            var $rightCon = $(".right-con");
                rightCon_width = $rightCon.width();
            $(".work-subnav li").css('width',(rightCon_width-180)/5);
            $(window).resize(function(event) {
                /* Act on the event */
                rightCon_width = $rightCon.width();
                $(".work-subnav li").css('width',(rightCon_width-180)/5);
            });
        },

        //改变样式
        changeStyle: function(){
            var me = this,
                $workSilder = $('.work-silder'),
                $workReport = $(".work-report"),
                $workRight = $(".work-right"),
                $silderLeft = $workSilder.find('left'),
                $silderRirght = $workSilder.find('right'),
                silderWidth = $workSilder.width(),
                centerWidth = $('.wrap-box').width() -505;

                $workSilder.find('li').css('width',silderWidth);

                $workReport.find('li:odd').css('float','right');

                $workRight.width(centerWidth);

                $(window).resize(function() {

                    centerWidth = $('.wrap-box').width() -505;
                    $workRight.width(centerWidth);

                    outWidth = (centerWidth*0.96);

                    $workSilder.width(outWidth);

                    $workSilder.find('li').width(outWidth);

                });

        },

        //管理坊成员
        mangeContrl: function(){
            var me = this,
                $controlList = $('.control-list'),
                $controlBtn = $('.power-control');

            $controlBtn.on('click', function(){
                var $this = $(this)
                    $controlList = $this.next('.control-list');
                if($controlList.is(':visible')){
                    $controlList.addClass('hide');
                }
                else{
                    $controlList.removeClass('hide');
                    $this.closest('tr').siblings('tr').find('.control-list').addClass('hide');
                }
            })
        },

        //tab内容切换
        workTab: function(){
            var me = this,
                $workMenu = $('.work-menuNav').find('li'),
                $workList = $('.work-member').find('.member-list');

            $workMenu.on('click', function(){
                var $this = $(this),
                    index = $this.index();
                $workList.eq(index).removeClass('hide').siblings().addClass('hide');
                $this.addClass('cur').siblings().removeClass('cur');

            })
        }
    };

    funName.init();
}(jQuery))