(function ($) {
    'use strict';

    let $clone_to_mobile_sidebar 	= $('.clone-to-mobile-sidebar'),
        $sidebar                    = $('#sidebar'),
    	$document					= $(document),
    	$body					    = $('body'),
    	learnfun_MOBILE_MENU 		= {

    		init:function(obj){
				this.wrap_container();
				this.clone_menus(obj);
				return this;
		    },

    		clone_menus: function (obj) {
				let i 					= 0,
				    panels_html_args 	= Array();

				obj.each(function () {
				    let $this               = $(this),
				        $this_menu_id       = $this.attr('id'),
				        $this_menu_clone_id = 'learnfun-clone-' + $this_menu_id;
				    if (!$('#' + $this_menu_clone_id).length) {
				        let $__this     = $(this),
				            this_id     = $__this.attr('id'),
				            $thisClone  = $this.clone(true);
				        $thisClone.find('.menu-item').addClass('clone-menu-item');
				        $thisClone.find('[id]').each(function () {
				            $__this.attr('id', learnfun_MOBILE_MENU.add_string_prefix( this_id, 'learnfun-clone-'));
				        });
				        $thisClone.find('.learnfun-menu').addClass('learnfun-menu-clone');
				        let $thisMainPanel = $('#learnfun-clone-wrap .learnfun-panels #learnfun-main-panel ul');
				        $thisMainPanel.append( $thisClone.html());
				        learnfun_MOBILE_MENU.insert_children( $thisMainPanel, i);
				    }
				});

				$document.on('click', '.learnfun-next-panel', function (e) {
		            e.preventDefault();
		            let $this     = $(this),
		                thisItem  = $this.closest('.menu-item'),
		                thisPanel = $this.closest('.learnfun-panel'),
		                target_id = $this.attr('href');
		            if ($(target_id).length) {
		                thisPanel.addClass('learnfun-sub-opened');
		                $(target_id).addClass('learnfun-panel-opened').removeClass('learnfun-hidden').attr('data-parent-panel', thisPanel.attr('id'));
		                /*Insert current panel title*/
		                let item_title          = thisItem.find('.menu-name').attr('data-title'),
		                    firstItemTitle      = '',
		                    $learnfun_panels     = $('.learnfun-panels-actions-wrap'),
		                    current_panel_title = $learnfun_panels.find('.learnfun-current-panel-title');
		                if( current_panel_title.length){
		                    firstItemTitle = current_panel_title.html();
		                }
		                if ( typeof item_title !== 'undefined') {
		                    if (current_panel_title.length) {
		                        current_panel_title.html(item_title);
		                    }else{
		                        $learnfun_panels.prepend('<span class="learnfun-current-panel-title">'+item_title+'</span>');
		                    }
		                }else {
		                    current_panel_title.remove();
		                }
		                $learnfun_panels.find('.learnfun-prev-panel').remove();
		                $learnfun_panels.prepend('<a data-prenttitle="'+firstItemTitle+'" class="learnfun-prev-panel" href="#' + thisPanel.attr('id') + '" data-cur-panel="' + target_id + '" data-target="#' + thisPanel.attr('id') + '"></a>');
		            }
		        });

		        $document.on('click', '.learnfun-prev-panel', function (e) {
		            e.preventDefault();
		            let $this                   = $(this),
		                cur_panel_id            = $this.attr('data-cur-panel'),
		                target_id               = $this.attr('href'),
		                current_panel_title     = $('.learnfun-panels-actions-wrap .learnfun-current-panel-title'),
		                previous_panel          = $('.learnfun-panels-actions-wrap .learnfun-prev-panel');

		            $(cur_panel_id).removeClass('learnfun-panel-opened').addClass('learnfun-hidden');
		            $(target_id).addClass('learnfun-panel-opened').removeClass('learnfun-sub-opened');

		            /*Set new back button*/
		            let new_parent_panel_id = $(target_id).attr('data-parent-panel');
		            if ( typeof new_parent_panel_id == 'undefined') {
		                let root_title = $('.learnfun-panels-actions-wrap').data('root_title');
		                if(typeof root_title !== 'undefined'){
		                    current_panel_title.html(root_title);
		                }else{
		                    current_panel_title.remove();
		                }
		                previous_panel.remove();
		            }else {
		                previous_panel.attr('href', '#' + new_parent_panel_id).attr('data-cur-panel', target_id).attr('data-target', '#' + new_parent_panel_id);
		                /*Insert new panel title*/
		                let item_title = $('#' + new_parent_panel_id).find('.learnfun-next-panel[data-target="' + target_id + '"]').closest('.menu-item').find('.menu-name').attr('data-title');
		                if ( typeof item_title !== 'undefined') {
		                    if ( !current_panel_title.length) {
		                        $('.learnfun-panels-actions-wrap').prepend('<span class="learnfun-current-panel-title">'+item_title+'</span>');
		                    }else{
		                        current_panel_title.html(item_title);
		                    }
		                }else {
		                    current_panel_title.remove();
		                }
		            }
		        });
		        setTimeout(function () {
		            $('#learnfun-clone-wrap .learnfun-panels').find('.learnfun-carousel').learnfun_init_carousel();
		        }, 1000);
			},

    		insert_children: function (obj, i) {
		        let index       = parseInt(i, 10),
		            children    = obj.find('.menu-item-has-children');
		        if ( children.length) {
		            children.each(function () {
		                let thisChildItem   = $(this),
		                	next_nav_target = 'learnfun-panel-' + String(index);
		                learnfun_MOBILE_MENU.insert_children(thisChildItem,index);
		                while ($('#' + next_nav_target).length) {
		                    index++;
		                    next_nav_target = 'learnfun-panel-' + String(index);
		                }
		                thisChildItem.prepend('<a class="learnfun-next-panel" href="#' + next_nav_target + '" data-target="#' + next_nav_target + '"></a>');
		                let submenu_html = $('<div>').append(thisChildItem.find('>.sub-menu,>.wrap-megamenu').clone()).html();
		                thisChildItem.find('> .sub-menu,> .wrap-megamenu').remove();
		                $('#learnfun-clone-wrap .learnfun-panels').append('<div id="' + next_nav_target + '" class="learnfun-panel learnfun-sub-panel learnfun-hidden">' + submenu_html + '</div>');
		            });
		        }
		    },

		    add_string_prefix: function(str, prefix) { 
		    	return prefix + str; 
		    },

		    wrap_container: function(){
		    	if($body.find('#learnfun-clone-wrap').length) return 0;
				let mb_menu	='<div id="learnfun-clone-wrap" class="learnfun-clone-wrap">';
				mb_menu +='<div class="learnfun-panels-actions-wrap" data-root_title="Main Panel">';
				mb_menu +='<span class="learnfun-current-panel-title">Main Panel</span>';
				mb_menu +='<a class="learnfun-close-btn learnfun-close-panels" href="#" data-object="open-mobile-menu">&times;</a>';
				mb_menu +='</div>';
				mb_menu +='<div class="learnfun-panels">';
				mb_menu +='<div id="learnfun-main-panel" class="learnfun-panel learnfun-main-panel">';
				mb_menu +='<ul class="depth-01"></ul>';
				mb_menu +='</div></div></div>';
		        $body.prepend(mb_menu);
		    }
    	};

	$.fn.learnfun_best_equal_products = function(){
        let eq_height_contain = $('.eq-height-contain');
        if ( eq_height_contain.length){
            eq_height_contain.each( function( i, e){
                $(this).learnfun_equal_height();
            });
        }
        window.onresize = function(event) {
            event.preventDefault();
            $.fn.learnfun_best_equal_products();
        };
    };

    $.fn.learnfun_init_carousel = function () {

        if( typeof $.fn.slick == 'undefined'){
            console.error('learnfun-Framework need to use slick library inside, pls make sure It was loaded before used');
            return;
        }

        $(this).not('.slick-initialized').each(function () {
            let slide           = $(this),
                default_config  = slide.attr('data-slick'),
                config          = default_config !== undefined ? JSON.parse(default_config) : { arrows: true, dots: false, slidesMargin: 0, slidesToShow: 1, infinite: true, speed: 400};

            if (config.vertical === true ) {
                config.prevArrow = '<span class="learnfun-icon icon-left-arrow prev"></span>';
                config.nextArrow = '<span class="learnfun-icon icon-arrow-right next"></span>';
            } else {
                config.prevArrow = '<span class="learnfun-icon icon-left-arrow prev"></span>';
                config.nextArrow = '<span class="learnfun-icon icon-arrow-right next"></span>';
            }

            slide.on('init', function (event, slick) {
                $(event.target).trigger( 'learnfun_trigger_init_slide', slick);
            });
            slide.slick(config);
        });
    };

    $.fn.learnfun_vertical_menu = function () {
        $(this).each( function () {
            let this_menu = $(this);
            this_menu.on('click', '.block-title', function (e) {
                e.preventDefault();
                this_menu.toggleClass('open-menu');
            });
            $document.on('reset-vertical-menu', function (e) {
                e.preventDefault();
                this_menu.removeClass('open-menu');
            });
        });
    };

    $.fn.learnfun_sticky_header = function () {
        $(this).each(function () {
            let _this           = $(this),
                header_height   = $('#header').height(),
                position_1      = header_height + 250,
                position_2      = header_height + 700;
            $(window).scroll( function (event) {
                event.preventDefault();
                let scrl_top = $(this).scrollTop();
                if ( scrl_top > position_1 ) {
                    _this.addClass('pre-sticky');
                    if ( scrl_top > position_2){
                        _this.addClass('is-sticky');
                    }else{
                        _this.removeClass('is-sticky');
                        $document.trigger('reset-vertical-menu');
                    }
                } else {
                    _this.removeClass('pre-sticky is-sticky');
                }
            });
        });
    };

    $.fn.learnfun_tab = function () {
        $(this).each(function(index,element){
            let TAB = $(this);
            TAB.on('click','.tab-link', function (e) {
                e.preventDefault();
                let $this       = $(this),
                    $tab_head   = $this.closest('li'),
                    tab_id      = $this.attr('href');
                if( !$tab_head.hasClass('active') && typeof tab_id !== undefined){
                    let $active_tab = TAB.find(tab_id);
                    if( $active_tab.length ){
                        $active_tab.siblings('.active').removeClass('active');
                        $active_tab.addClass('active').learnfun_equal_height();
                        $tab_head.siblings('.active').removeClass('active');
                        $tab_head.addClass('active');
                    }
                }
            });
        });
    };

    $.fn.learnfun_rating_form_handle = function () {
        $(this).each(function(index,element){
            $(this).on('click', '.btn-rating', function (e) {
                e.preventDefault();
                let btn = $(this);
                if( !btn.hasClass('selected')){
                    btn.siblings().removeClass('selected');
                    btn.addClass('selected');
                    btn.parents('span').addClass('rated');
                }
            });
        });
    };

    $.fn.learnfun_accodition_handle = function () {
        $(this).each(function(index,element){
            $(this).on('click', '.btn-expand', function (e) {
                e.preventDefault();
                let tab_element  = $(this).parents('li');
                if( !tab_element.hasClass('active')){
                    let element_actived = tab_element.siblings('.active');
                    if(element_actived.length){
                        element_actived.find('.content').slideToggle(300);
                        element_actived.removeClass('active');
                    }
                }

                tab_element.toggleClass('active');
                tab_element.find('.content').slideToggle(300);
            });
        });
    };
    $.fn.learnfun_equal_height  = function () {
        let products = $(this).find('.contain-product');
        if(products.length){
            products.css({'height': 'auto' });
            let max = 0;
            setTimeout(function () {
                products.each(function( i, e){
                    if ( max < $(e).height() ) {
                        max = $(e).height();
                    }
                });
                products.height(max);
            }, 100);

        }
    };

    $.fn.learnfun_stretch_the_right_background = function () {
        let win_wth = $(window).width(),
            mb_resolution = ( win_wth < 1200 ) ;
        $(this).each(
            function (index, element) {
                let $this = $(this),
                    $bg_underground = $this.find('.bg_underground');
                if ($bg_underground.length) {
                    let src = $bg_underground.data('src');
                    if( !mb_resolution) {
                        let right_offset = $(document).width() - ($this.offset().left + $this.width());
                        if (parseInt(right_offset, 10) > 0) {
                            $bg_underground.css('right', -right_offset);
                        }
                    }
                    else{
                        $bg_underground.css('right', 0);
                    }
                    if( typeof src !== undefined) {
                        $bg_underground.css('background-image', 'url(' + src + ')');
                    }
                }
            }
        );
    };

    $.fn.learnfun_menu_mobile = function () {
        learnfun_MOBILE_MENU.init(this);
    };

    $.fn.learnfun_sidebar_handle = function(){
        if( $clone_to_mobile_sidebar.length){
        	if( $sidebar.length ){
	            let $sidebar_content =  $sidebar.find('.sidebar-contain');
	            $clone_to_mobile_sidebar.clone().appendTo( $sidebar_content);
	        }
	        else{
	            let html_sidebar = '',
	                $main_content = $('#main-content');
	            html_sidebar +='<div id="sidebar" class="sidebar mobile-version">';
	            html_sidebar +='<div class="learnfun-mobile-panels">';
	            html_sidebar +='<span class="learnfun-current-panel-title">Sidebar</span>';
	            html_sidebar +='<a class="learnfun-close-btn" href="#" data-object="open-mobile-filter">&times;</a>';
	            html_sidebar +='</div>';
	            html_sidebar +='<div class="sidebar-contain"></div>';
	            html_sidebar +='</div>';

	            if( $main_content.length){
	                $main_content.after(html_sidebar);
	                let $sidebar_content =  $('#sidebar .sidebar-contain');
	                if( $sidebar_content.length){
	                    $clone_to_mobile_sidebar.clone().appendTo($sidebar_content);
	                }
	                let $caroulsel_inside = $sidebar_content.find('.learnfun-carousel');
	                if( $caroulsel_inside.length){
	                    $caroulsel_inside.learnfun_init_carousel();
	                }
	            }
	        }
	    }
	    else{
	        if( $sidebar.length < 1){
	            $('.mobile-footer .block-sidebar').remove();
	        }
	    }
    };

    $.fn.learnfun_sidebar_handle();
    
}( jQuery ));

















    

    

   