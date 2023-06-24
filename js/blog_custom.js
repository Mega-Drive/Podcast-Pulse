/* JS Document */

/******************************

[Table of Contents]

1. Vars and Inits
2. Set Header
3. Init Menu
4. Init Search
5. Init Reveal
6. Init Categories
7. Init Categories Swiper
8. Init Bell
9. Init Shuffle


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
	initReveal();
	initCategories();
	initCategoriesSwiper();
	initBell();
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

	5. Init Reveal

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

	6. Init Categories

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

	7. Init Categories Swiper

	*/

	function initCategoriesSwiper()
	{
		var sW = 0;

		const swiper = new Swiper('.swiper',
		{
			init:true,
			direction:'horizontal',
			freeMode: true,
			slidesPerView: "auto",
			spaceBetween: 8
		});
	}

	/* 

	8. Init Bell

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