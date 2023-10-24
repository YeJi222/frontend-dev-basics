/* method01
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
*/

// method02
/*
	this : 현재 실행중인 함수 또는 메소드가 속한 객체를 가리킴 
	bind 메소드 : 함수를 호출할 때, this 값을 지정할 수 있도록 하는 js 내장 메소드 
				** bind를 사용하면 함수의 this 값을 특정 객체로 고정할 수 있다 
*/
imageViewer = {
	init: function(){
		$(function() {
			$("#btn-change").click(this._changeImage.bind(this));
			$("#btn-slideshow").click(this._slideShow.bind(this));
			$(".image-viewer img").dblclick(this._consoleLog);
			
			// 첫 번째 이미지 선택
			this._changeImage();
		}.bind(this));
	},
	_consoleLog: function(){
		var name = $(this).attr("alt");
		console.log(name);
	},
	_slideShow: function(){
		if(this._intervalId){
			// 슬라이드쇼가 진행 상태
			
			// 1. 타이머 중지
			clearInterval(this._intervalId);
			this._intervalId = null;
			
			// 2. 버튼텍스트 => 슬라이드쇼 시작
			$("#btn-slideshow").text("슬라이드쇼 시작");
		} else {
			// 슬라이드쇼가 중지 상태 //
			
			// 1. 타이머 시작
			this._intervalId = setInterval(function(){
				this._changeImage();
			}.bind(this), 1000);
			
			
			// 2. 버튼텍스트 => 슬라이드쇼 중지 
			$("#btn-slideshow").text("슬라이드쇼 중지");
		}
	},
	_changeImage: function(){
		do {
			var index = Math.floor(Math.random() * this._images.length);
			var info = this._images[index];
			console.log($(".image-viewer img").attr("alt"), info.name);
		} while($(".image-viewer img").attr("alt") === info.name);
		
		$(".image-viewer img").attr({
			src: "images/" + info.file,
			alt: info.name,
			title: info.name
		});		
	},
	_intervalId: null,
	_images: [{ 
			name: "국화",
			file: "Chrysanthemum.jpg"
		}, { 
			name: "사막",
			file: "Desert.jpg"
		}, {
			name: "수국",
			file: "Hydrangeas.jpg"
		}, {
			name: "해파리",
			file: "Jellyfish.jpg"
		}, { 
			name: "코알라",
			file: "Koala.jpg"
		}, { 
			name: "등대",
			file: "Lighthouse.jpg"
		}, {
			name: "펭귄",
			file: "Penguins.jpg" 
		}, {
			name: "툴립",
			file: "Tulips.jpg"
		}]	
}
