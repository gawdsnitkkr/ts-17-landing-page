(function(d, dO, $) {
	var Vars = {
		noOfStars: null
	},
	DOM = {
		intro: null,
		title: null,
		animatedBackground: null
	},
	Functions = {
		addStars: function() {
			for(var i = 1; i <= Vars.noOfStars; i++) {
				var star = document.createElement('div');
				var r = Functions.getRandomInt(1, 3);
				if (r == 1) {
					star.className = 'small-star';
				}
				else if (r == 2) {
					star.className = 'medium-star';
				}
				else if (r == 3) {
					star.className = 'large-star';
				}
				star.style.left = Functions.getRandomInt(0, 100) + '%';
				star.style.top = Functions.getRandomInt(100, 150) + '%';
				DOM.animatedBackground.append(star);
			}
		},
		start: function() {
			var intro = $('#intro');
			var title = $('#title');
			TweenMax.to(intro, 1, {
				opacity: 1, 
				delay: 0
			});
			TweenMax.to(intro, 0.5, {
				opacity: 0,
				repeat: 4, 
				delay: 1.1
			});
			TweenMax.to(title, 1.7, {
				opacity: 1, 
				delay:4
			});
			TweenMax.to(date, 1.5, {
				opacity: 1,
				delay: 5
			});
			TweenMax.staggerFrom(".icon", 0.5, {
				scale: 5,
				opacity: 0,
				delay: 6, 
				ease: Power0.easeNone
			}, 0.5);
		},
		getRandomInt: function(min, max) {
			return Math.floor(Math.random() * (max - min + 1)) + min;		
		}			
	};
	dO.ready(function() {
		DOM.intro = $('#intro');
		DOM.title = $('#title');
		DOM.animatedBackground = $('#animated-background');
		Vars.noOfStars = Functions.getRandomInt(0, window.innerWidth) / 3;
		Functions.addStars();
		Functions.start();
	});
})(document, jQuery(document), jQuery);