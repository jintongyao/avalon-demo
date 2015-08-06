/******************************
** 文件描述 :  研修
** 时    间 ： 2015.04.29
** 作    者 ：
** E-mail：
*******************************/
(function($) {
    var funName = {
        parameter: null,

        init: function() {
            this.parameter = {};
			this.mar0();
            this.operate();
            this.attention();
            this.logManage();
            this.messageReply();
            this.indexSupport();
            this.signIn();
            this.editFunction();
            this.Lihover();
            this.replyBox();
            this.addstyle();
            this.presonSet();
        },
		//first-floor最下边margin值去掉
		mar0: function(){
			$(".first-floor").find("li:last").css('margin-bottom','0px');
		},
        //数据
        loginInit: function() {

        },

        //日志列表下拉操作
        operate: function() {
            var me = this,
                $log_classify = $(".log-classify"),
                $li_btn = $log_classify.find("li").not(".hide-list-li"),
                $li_list = $li_btn.not('.last_child'),
                $last_child = $log_classify.find(".last_child"),
                $other_list = $(".other-list"),
                $objLi = $log_classify.children('ul').children('li'),
                $other_li = $other_list.find("li");

                $last_child.find("h3").text("其它" + ($li_btn.length - 5) +"项分类");


                $li_list.on("click",function(){
                    var $this = $(this);
                    $this.append('<i></i>');
                    $this.siblings().find("i").remove();
					if($other_list.css('display') != 'none'){
                    	$other_list.hide();
                    }
                });

                $last_child.on("click",function(){
                    var $this = $(this);

                    if($other_list.css('display') == 'none'){
                        $other_list.show();
                    }
                    else{
                        $other_list.hide();
                    }
                });

                $other_li.on('click',function(){
                    $(this).closest('.last_child').append('<i></i>');
                    $(this).closest('.last_child').siblings('li').find('i').remove();
                })
        },

        //首页关注
        attention: function(){
            var me = this,
                $btn_atention = $("#add-attention").find("span");

                $btn_atention.on("click", function(){
                    if($(this).html() == '关注'){
                        $(this).html('已关注');
                        $(this).attr('title','取消关注');
                        $(this).removeClass("orange-bg").addClass('ash-bg');
                    }
                    else if($(this).html() == '已关注'){
                        $(this).html('关注');
                        $(this).attr('title','关注');
                        $(this).removeClass('ash-bg').addClass('orange-bg');
                    }
                })
        },

        //日志分类信息管理
        logManage: function(){
            var me = this,
                $log_list = $(".log-list"),
                $edit_btn = $log_list.find('.edit-icon'),
                $class_name = $log_list.find(".class-name"),
                $cancle_btn = $(".show-edit").find(".cancle-btn"),
                $cancleBtn = $("#new_edit").find(".cancle-btn"),
                $add_btn = $("#add_btn");

                $edit_btn.on('click', function(){
                    var $this = $(this);

                    $this.closest('li').hide();
                    $this.closest('li').next('li').show();
                });

                $cancle_btn.on("click", function(){
                    var $this = $(this);

                    $this.closest('li').hide();
                    $this.closest('li').prev('li').show();
                });

                $add_btn.on('click', function(){

                    var content= "<li class='show-edit' id='new_edit'>" +
                                    "<button class='config-btn'>确定</button>" +
                                    "<button class='cancle-btn'>取消</button>" +
                                    "<div class='class-name fl'>" +
                                        "<input type='text' value=''>" +
                                    "</div>" +
                                "</li>";

                    if($("#new_edit").length < 1){
                        $log_list.append(content);
                    }
                    else{
                        $("#new_edit").find('input').focus();
                    }
                });

                $log_list.on('click','.cancle-btn',function(){
                    $(this).closest('#new_edit').remove();
                    console.log(1);
                })

        },

        //消息列表回复
        messageReply: function(){
            var me = this,
                $info_list = $(".info-list"),
                $infoLi = $info_list.find("li");

                $infoLi.mouseover(function() {
                   var $this = $(this);

                   $this.find(".reply_message").css("display","block");
                });

                $infoLi.mouseout(function() {
                   var $this = $(this);

                   $this.find(".reply_message").css("display","none");
                });
        },

        //首页评论，点赞

        indexSupport: function(){
            var me = this,
                $support_icon = $(".support-icon"),
                $input_box = $(".input-box"),
                $comment_box = $(".comment-box"),
                $return_btn = $(".return-btn"),
                $dynamic = $(".dynamic-list");
                $dy_comment = $dynamic.find(".comment-box");

                $support_icon.on("click", function(){
                    if($(this).html() == "赞"){
                        $(this).html("取消赞");
                        $(this).attr("title","取消赞");
                        $(this).addClass('support-complete');
                    }
                    else if($(this).html() == "取消赞"){
                        $(this).html("赞");
                        $(this).attr("title","赞");
                        $(this).removeClass('support-complete');
                    }
                });

                $input_box.on("click", function(){
                    $(this).next($comment_box).removeClass('hide');
                    $(this).next($comment_box).find(".textarea-box").addClass('add-orange');
                    $(this).addClass('hide');
                    $(this).closest('li').siblings().find(".input-box").removeClass('hide');
                    $(this).closest('li').siblings().find(".input-box").next($comment_box).addClass('hide');
                });



                $return_btn.on('click',function(){
                    var $this = $(this);

                    $this.closest('li').find($comment_box).removeClass('hide');
                    $this.closest('li').find('textarea').focus();
                    $this.closest('li').siblings().find($comment_box).addClass('hide');
                    $this.closest('li.right-con').siblings('li.right-con').find('li .comment-box').addClass('hide');
                });

                $("input,textarea").focus(function(){
                    $(this).closest('.textarea-box').css("border-color","#FF5722");
                }).blur(function(){
                    $(this).closest('.textarea-box').css("border-color","#edeae8");
                });
        },

        //签到

        signIn: function(){
            var me = this,
                number = 1,
                $sign_btn = $("#sign-in");

            $sign_btn.on("click", function(){
                var $this = $(this);
                $this.html('已签到<b>'+ number +'</b>天')
            })
        },

        //编辑按钮

        editFunction: function(){
            var me = this,
                $edit = $(".editor-icon");

            $edit.on("click", function(){
                var $this = $(this),
                    $parent = $this.closest('.right-con'),
                    $talck_con = $parent.find(".other-text");

                $talck_con.attr('contenteditable','true');
                $talck_con.addClass('able').focusToLast();
            })
        },

        //li hover
        Lihover: function(){
            var Common = {
                hover: function($wrap, selector) {
                    if (!-[1,] && !window.XMLHttpRequest) {
                        $wrap.on('mouseenter mouseleave', selector, function(target) {
                            $(this).toggleClass('hover', target.type == 'mouseenter');
                        });
                    }
                }
            };


            Common.hover($('.left-nav'), 'li');
        },

        //消息列表回复

        replyBox: function(){
            var me = this,
            $reply_message = $(".reply_message"),
            $shade = $("#shade"),
            $reply_window = $(".reply-window"),
            $cancle_btn = $("#cancle-btn"),
            $extent_btn = $(".extent-btn"),
            $message_detail = $('.message-detail');

            $reply_message.on("click",function(){
                var tp = $(window).scrollTop(),
                    wh = $(window).innerHeight(),
                    ch = $reply_window.height(),
                    gh = (wh-ch) / 2 + tp;

                $shade.css("display","block");
                $reply_window.css("display","block");
                $reply_window.css("top",gh);

            });

            $(window).scroll(function() {
                var stp = $(window).scrollTop(),
                    swh = $(window).innerHeight(),
                    sch = $reply_window.height(),
                    sgh = (swh - sch) / 2 + stp;

                    $reply_window.animate({"top": sgh + "px"},50);
            });

            $cancle_btn.on('click',function(){
                $shade.hide();
                $reply_window.hide();
            });
            $extent_btn.on('click', function(){
                var $this = $(this),
                    $news_box = $this.closest('.news-box');

                    if($this.html() == '展开更多'){
                        $news_box.find('li').show();
                        $this.html('收缩');
                    }
                    else if($this.html() == '收缩'){
                        $news_box.find('li.hide').hide();
                        $this.html('展开更多');
                    }
            });

            $message_detail.on('click',function(){
                var tp = $(window).scrollTop(),
                    wh = $(window).innerHeight(),
                    ch = $reply_window.height(),
                    gh = (wh-ch) / 2 + tp;

                $shade.css("display","block");
                $reply_window.css("display","block");
                $reply_window.css("top",gh);
                $reply_window.find('.reply-box:first').addClass('hide');
                $reply_window.find('.reply-box:last').removeClass('hide');
            });

            $('.close-btn').on('click',function(){
                $shade.hide();
                $reply_window.hide();
                $reply_window.find('.reply-box:first').removeClass('hide');
                $reply_window.find('.reply-box:last').addClass('hide');
            });
        },

        //addstylet添加样式
        addstyle: function(){
            var me = this,
                $inform_box = $(".inform-box"),
                $informationList = $('.information-list'),
                $stateLi = $('.finishState-title').find('li'),
                $stateWorking = $('.finishState-box').find('.state-working');

                $inform_box.find('li:odd').css('float','right');
                $informationList.find('li:odd').css('float','right');

                $stateLi.on('click',function(){
                    var $this = $(this),
                        index = $this.index();
                    $this.find('a').addClass('cur');
                    $this.siblings('li').find('a').removeClass('cur');
                    $stateWorking.eq(index).removeClass('hide').siblings().addClass('hide');
                })
        },

        presonSet: function(){
            var me = this,
                $setBox = $(".setBox");

            $setBox.on('mouseover',function(){
                $(this).find('.set-icon').css('display','block');
                $(this).closest('.w80').addClass('over-style');
            });

            $setBox.mouseout(function(){
                $(this).find('.set-icon').css('display','none');
                $(this).closest('.w80').removeClass('over-style');
            })
        }

    };

    funName.init();
}(jQuery))