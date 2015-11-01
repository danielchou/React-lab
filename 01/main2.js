document.write('<h1>Hello World</h1>');

$(function(){
	var urls=[
		{ dd:"asdf", u:"http://geek-news.mtv.com//wp-content/uploads/geek/2012/10/spacex_dragon.jpg"},
		{ dd:"3333", u:"http://www.wired.com/wp-content/uploads/images_blogs/autopia/2012/05/Falcon-9-Rocket-in-the-Hangar-660x332.jpg"},
		{dd:"44444", u:"http://www.spacex.com/sites/spacex/files/f9productionfloor2.jpg"}
	];
		
	$(".item").each(function(i,n){
		console.log(urls[i]);
		$(n).find("img").attr("src",urls[i].u);
	});
	$('.carousel').carousel();
});