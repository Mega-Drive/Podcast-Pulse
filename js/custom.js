/* JS Document */

/******************************

[Table of Contents]

1. Vars and Inits
2. Set Header
3. Init Menu
4. Init Search
5. Init Logo Slider
6. Init Episode Slider
7. Init Reveal
8. Init Categories
9. Init Categories Swiper
10. Init How It Works
11. Init Toggle
12. Init Pricing Slider
13. Init Testimonials Slider
14. Init Bell
15. Init Player
16. Init Shuffle


******************************/

$(document).ready(function()
{
	"use strict";

	/* 

	1. Vars and Inits

	*/

	setHeader();
	initMenu();
	initSearch();
	initLogoSlider();
	initEpisodeSlider();
	initReveal();
	initCategories();
	initCategoriesSwiper();
	initHowItWorks();
	initToggle();
	initPricingSlider();
	initTestimonials();
	initBell();
	initPlayer();
	initShuffle();
	
	$(window).on('resize', function()
	{
		setHeader();

		setTimeout(function()
		{
			$(window).trigger('resize.px.parallax');
		}, 375);
	});

	$(document).on('scroll', function()
	{
		setHeader();
	});

	/* 

	2. Set Header

	*/

	function setHeader()
	{
		var header = $('.header');

		if($(window).scrollTop() > 180)
		{
			header.addClass('scrolled fixed');
		}
		else
		{
			header.removeClass('scrolled fixed');
		}
	}

	/* 

	3. Init Menu

	*/

	function initMenu()
	{
		var burger = $('.burger_container');
		var close = $('.close_container');
		var menu = $('.menu');

		burger.on('click', function()
		{
			gsap.to(menu,
				{
					display:"block",
					opacity: 1,
					duration: 0.5
				});
		});	

		close.on('click', function()
		{
			gsap.to(menu,
				{
					opacity: 0,
					display: "none",
					duration: 0.5
				});
		});
	}

	/* 

	4. Init Search

	*/

	function initSearch()
	{
		var searchOn = false;
		var searchBtn = $('.header_search');
		var saerchPanel = $('.search_group_container');

		searchBtn.on('click', function()
		{
			if(!searchOn)
			{
				gsap.to(saerchPanel,
					{
						duration: 0.5,
						display: "block",
						opacity: 1
					});
				searchOn = true;
				$('#search_icon_base').attr("src", "images/close_2.png");
				$('#search_icon_extra').attr("src", "images/close_2.png");
			}
			else
			{
				gsap.to(saerchPanel,
					{
						duration: 0.5,
						display: "none",
						opacity: 0
					});
				searchOn = false;
				$('#search_icon_base').attr("src", "images/search.png");
				$('#search_icon_extra').attr("src", "images/search.png");
			}
		})
	}

	/* 

	5. Init Logo Slider

	*/

	function initLogoSlider()
	{
		if($('.logo_slider').length)
		{
			var slider = $('.logo_slider');
			slider.owlCarousel(
			{
				items:6,
				autoplay:true,
				autoplayTimeout:6000,
				smartSpeed:1000,
				loop:true,
				dots:false,
				nav:false,
				responsive:
				{
					0:{items:1},
					575:{items:2},
					720:{items:3},
					991:{items:4},
					1200:{items:6}
				}
			})
		}
	}
	
	/* 

	6. Init Episode Slider

	*/

	function initEpisodeSlider()
	{
		var sW = 0;

		const swiper = new Swiper('.episode_swiper',
		{
			init:true,
			direction:'horizontal',
			freeMode: true,
			slidesPerView: 3,
			spaceBetween: 20,
			sticky: true,
			breakpoints:
			{
				0:
				{
					slidesPerView: 1,
					spaceBetween: 16
				},
				320:
				{
					slidesPerView: 2,
					spaceBetween: 16,
					slidesOffsetAfter: 0
				},
				480:
				{
					slidesPerView: 2,
					spaceBetween: 16
				},
				575:
				{
					slidesPerView: 2,
					spaceBetween: 16,
					slidesOffsetAfter: 0
				},
				991:
				{
					slidesPerView: 3,
					spaceBetween: 20
				}
			},
			on:
			{
				init: function()
				{
					if(window.innerWidth <= 480)
					{
						sW = $('.episode_swiper').width();
						this.params.slidesOffsetAfter = (sW - (sW / 1.2));
					}
				},
				resize: function()
				{
					if(window.innerWidth <= 480)
					{
						sW = $('.episode_swiper').width();
						this.params.slidesOffsetAfter = (sW - (sW / 1.2));
					}
				}
			}
		});
	}

	/* 

	7. Init Reveal

	*/

	function initReveal()
	{
		// Reveal 1
		// Gsap - when scrolling down into view
		ScrollTrigger.batch('.reveal_1',
		{
			start: "100px bottom",
			once: false,
			onEnter: batch => {
				gsap.to(batch, 
				{
					duration: 1,
					opacity: 1, 
					stagger: 0.1, 
					rotateX: 0, 
					rotateY: 0
				});
			},
			onLeaveBack: batch => {
				gsap.to(batch, 
				{
					duration: 1,
					opacity: 0,
					rotateX: 5, 
					rotateY: 12
				});
			},
		});

		// Gsap - when scrolling up into view
		ScrollTrigger.batch('.reveal_1',
		{
			start: "100px top",
			once: false,
			onEnterBack: batch => {
				gsap.to(batch, 
				{
					duration: 1,
					opacity: 1, 
					stagger: 0.1, 
					rotateX: 0, 
					rotateY: 0
				});
			},
			onLeave: batch => {
				gsap.to(batch, 
				{
					duration: 1,
					opacity: 0,
					rotateX: 5, 
					rotateY: 12
				});
			}
		});

		// Reveal 2
		// Gsap - when scrolling down into view
		ScrollTrigger.batch('.reveal_2',
		{
			start: "100px bottom",
			once: false,
			onEnter: batch => {
				gsap.to(batch, 
				{
					duration: 0.5,
					opacity: 1, 
					stagger: 0.1, 
					rotateX: 0, 
					rotateY: 0
				});
			},
			onLeaveBack: batch => {
				gsap.to(batch, 
				{
					opacity: 0,
					rotateX: 5, 
					rotateY: 12
				});
			},
		});

		// Gsap - when scrolling up into view
		ScrollTrigger.batch('.reveal_2',
		{
			start: "100px top",
			once: false,
			onEnterBack: batch => {
				gsap.to(batch, 
				{
					duration: 0.5,
					opacity: 1, 
					stagger: 0.1, 
					rotateX: 0, 
					rotateY: 0
				});
			},
			onLeave: batch => {
				gsap.to(batch, 
				{
					duration: 0.75,
					opacity: 0,
					rotateX: 5, 
					rotateY: 12
				});
			}
		});
	}

	/* 

	8. Init Categories

	*/

	function initCategories()
	{
		var categories = $('.category');
		categories.each(function()
		{
			$(this).on('click', function()
			{
				categories.removeClass('active');
				$(this).addClass('active');
			});	
		});
	}

	/* 

	9. Init Categories Swiper

	*/

	function initCategoriesSwiper()
	{
		const categoriesSwiper = new Swiper('.categories_container',
		{
			init:true,
			direction:'horizontal',
			freeMode: true,
			slidesPerView: "auto",
			spaceBetween: 8
		});
	}

	/* 

	10. Init How It Works

	*/

	function initHowItWorks()
	{
		var items = $('.howitworks_item');
		items.each(function()
		{
			$(this).on('click', function()
			{
				items.removeClass('active');
				$(this).addClass('active');
			});	
		});
	}

	/* 

	11. Init Toggle

	*/

	function initToggle()
	{
		var active = true;
		var btn_onetime = $('.mode_onetime');
		var btn_annually = $('.mode_annually');
		var btn_toggle = $('.mode_toggle');
		btn_onetime.on('click', function()
		{
			$('.mode_selection').removeClass('active');
			active = false;
		});
		btn_annually.on('click', function()
		{
			$('.mode_selection').addClass('active');
			active = true;
		});
		btn_toggle.on('click', function()
		{
			if(active)
			{
				$('.mode_selection').removeClass('active');
				active = false;
			}
			else
			{
				$('.mode_selection').addClass('active');
				active = true;
			}
		});
	}

	/* 

	12. Init Pricing Slider

	*/

	function initPricingSlider()
	{
		if($('.pricing_slider').length)
		{
			var pricingSlider = $('.pricing_slider');
			pricingSlider.owlCarousel(
			{
				items:3,
				autoplay:false,
				dots:false,
				nav:false,
				margin:20,
				smartSpeed:1200,
				responsive:
				{
					0:{items:1},
					768:{items:2},
					991:{items:3}
				}
			});
		}
	}

	/* 

	13. Init Testimonials Slider

	*/

	function initTestimonials()
	{
		if($('.testimonials_slider').length)
		{
			var testimonialsSlider = $('.testimonials_slider');
			testimonialsSlider.owlCarousel(
			{
				items:3,
				autoplay:false,
				dots:false,
				nav:false,
				margin:20,
				smartSpeed:1200,
				responsive:
				{
					0:{items:1},
					768:{items:2},
					991:{items:3}
				}
			});
		}
	}

	/* 

	14. Init Bell

	*/

	function initBell()
	{
		var bell_controller = new ScrollMagic.Controller();

		var bellScene = new ScrollMagic.Scene(
			{
				triggerElement:"#bell_trigger",
				offset: ((-$(window).height() / 2) + 200)
			})
			.setTween(".bell_icon", 1, {rotate: "0deg", scale: 1, opacity: 1, ease: Elastic.easeOut})
			.addTo(bell_controller)
	}

	/* 

	15. Init Player

	*/

	function initPlayer()
	{
		if($(".jp-jplayer").length)
		{
			var player = $("#jplayer_1");
			var playerContainer = $('.player_fixed_container');
			var playBtn = $('.play_btn');
			var title_text = "";
			var artist_text = "";
			var poster_text = "";
			var file_url = "";
			var minimize_btn = $('.player_minimize');
			var active = false;
			var minimized = false;

			playBtn.on('click', function()
			{
				// Get file info from button data- attribute
				title_text = $(this).data("title");
				artist_text = $(this).data("artist");
				poster_text = $(this).data("poster");
				file_url = $(this).data("file");

				// Pass the file info to player and start playback
				player.jPlayer("setMedia", {
					title: title_text,
					artist: artist_text,
					mp3: file_url,
					poster: poster_text
				}).jPlayer("play");

				playerContainer.addClass('active');
			});

			player.jPlayer({
				ready: function () {
					$(this).jPlayer("setMedia", {
						title: "The Future of Tech",
							artist: "Brian Smith",
							mp3:"files/bensound-betterdays.mp3"
					});
				},
				play: function() { // To avoid multiple jPlayers playing together.
					$(this).jPlayer("pauseOthers");
				},
				swfPath: "plugins/jPlayer",
				supplied: "mp3",
				cssSelectorAncestor: "#jp_container_1",
				wmode: "window",
				globalVolume: false,
				useStateClassSkin: true,
				autoBlur: false,
				smoothPlayBar: true,
				keyEnabled: true,
				title: '.jp-title',
				currentTime: '.jp-current-time',
  				duration: '.jp-duration',
				solution: 'html',
				preload: 'metadata',
				verticalVolume: true,
				volume: 0.4,
				muted: false,
				backgroundColor: '#000000',
				errorAlerts: false,
				warningAlerts: false
			});

			minimize_btn.on('click', function()
			{
				if(!minimized)
				{
					playerContainer.addClass('minimized');
					minimized = true;
				}
				else
				{
					playerContainer.removeClass('minimized');
					minimized = false;
				}
			});
		}
	}

	/* 

	16. Init Shuffle

	*/

	function initShuffle()
	{
		var btns = $(".category");
		var grid = $('#grid');
		var sizer = grid.find('.grid_item');

		setTimeout(function()
		{
			setupFilters();
		}, 100);

		grid.shuffle(
		{
			itemSelector: '.grid_item',
			sizer: sizer,
			delimeter: ',', // If your group is not json, and is comma delimeted, you could set delimeter to ','. 
			speed:300
		});

		function setupFilters()
		{
			// grid.shuffle('update');
			btns.on('click', function(ele)
			{
				ele.preventDefault();
				grid.shuffle('shuffle', $(this).data('group'));
				setTimeout(function()
				{
					ScrollTrigger.refresh();
				}, 500);
			});
		}
	}

});