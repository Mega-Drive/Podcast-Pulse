/* JS Document */

/******************************

[Table of Contents]

1. Vars and Inits
2. Set Header
3. Init Menu
4. Init Search
5. Init Reveal
6. Init Pinning (Sidebar)


******************************/

$(document).ready(function()
{
	"use strict";

	/* 

	1. Vars and Inits

	*/

	var pinScene;
	var controller = new ScrollMagic.Controller();

	setHeader();
	initMenu();
	initSearch();
	initReveal();
	initPinning();
	
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

	6. Init Pinning

	*/

	function initPinning()
	{
		pinScene = new ScrollMagic.Scene({triggerHook: "onLeave", offset: 500, reverse: true})
			.setPin("#pin1", {pushFollowers: false})
			.addTo(controller);

		$(window).on('resize', function()
		{
			// pinScene.refresh();
			pinScene.removePin(true);
			pinScene.setPin("#pin1", {pushFollowers: false});
			pinScene.refresh();
		});
	}

});