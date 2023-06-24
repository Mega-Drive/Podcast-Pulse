/* JS Document */

/******************************

[Table of Contents]

1. Vars and Inits
2. Set Header
3. Init Menu
4. Init Search
5. Init Tabs
6. Init Player


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
	initTabs();
	initPlayer();
	
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

	5. Init Tabs

	*/

	function initTabs()
	{
		if($('.tab').length)
		{
			$('.tab').on('click', function()
			{
				$('.tab').removeClass('active');
				$(this).addClass('active');
				var clickedIndex = $('.tab').index(this);

				var panels = $('.tab_panel');
				panels.removeClass('active');
				$(panels[clickedIndex]).addClass('active');
			});
		}
	}

	/* 

	6. Init Player

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

});