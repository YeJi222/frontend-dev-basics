var changeImage = function() {
	// 랜덤 변수 
	var index = Math.floor(Math.random() * imageViewer._images.length);
	var info = imageViewer._images[index].split(":");
	// console.log(info);
	
	$('img')
		.attr({
			"src": "/ch07/images/" + info[1],
			"alt": info[0],
			"title": info[0]
		});
}

var imageViewer = {
	init: $(function(){
		$("#btn-change").click(function(){
			changeImage();
		});
		
		$("#btn-slideshow").click(function(){
			var slideshow_btn = $('#btn-slideshow').text();
			if(slideshow_btn == '슬라이드쇼 시작'){
				$('#btn-slideshow').html('<button id="btn-slideshow">슬라이드쇼 중지</button>');
			
				interval = setInterval(function(){
					changeImage();
				}, 1500);
			} else{
				$('#btn-slideshow').html('<button id="btn-slideshow">슬라이드쇼 시작</button>');
				
				clearInterval(interval);
				$('img').removeAttr('src alt title');
			}
		});
	}),
	
	_images: [ 
		"국화:Chrysanthemum.jpg", 
		"사막:Desert.jpg", 
		"수국:Hydrangeas.jpg", 
		"해파리:Jellyfish.jpg", 
		"코알라:Koala.jpg", 
		"등대:Lighthouse.jpg", 
		"펭귄:Penguins.jpg", 
		"툴립:Tulips.jpg" 
	]
}


/*
var changeImage = function() {
	// 랜덤 변수 
	var index = Math.floor(Math.random() * imageViewer._images.length);
	var info = imageViewer._images[index].split(":");
	// console.log(info);
	
	$('img')
		.attr({
			"src": "/ch07/images/" + info[1],
			"alt": info[0],
			"title": info[0]
		});
}

$(function(){
	
	$("#btn-change").click(function(){
		changeImage();
	});
	
	$("#btn-slideshow").click(function(){
		var slideshow_btn = $('#btn-slideshow').text();
		if(slideshow_btn == '슬라이드쇼 시작'){
			$('#btn-slideshow').html('<button id="btn-slideshow">슬라이드쇼 중지</button>');
		
			interval = setInterval(function(){
				changeImage();
			}, 1500);
		} else{
			$('#btn-slideshow').html('<button id="btn-slideshow">슬라이드쇼 시작</button>');
			
			clearInterval(interval);
			$('img').removeAttr('src alt title');
		}
	});
});
*/