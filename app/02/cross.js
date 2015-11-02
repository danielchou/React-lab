$(function(){
	var urls=[
		{ d:"111111", u:"http://geek-news.mtv.com//wp-content/uploads/geek/2012/10/spacex_dragon.jpg"},
		{ d:"11111", u:"http://www.wired.com/wp-content/uploads/images_blogs/autopia/2012/05/Falcon-9-Rocket-in-the-Hangar-660x332.jpg"},
		{ d:"3333", u:"http://www.spacex.com/sites/spacex/files/f9productionfloor2.jpg"},
        { d:"44444", u :"http://i.ytimg.com/vi/1_FXVjf46T8/maxresdefault.jpg"}
	];
	var ss="", url={};
	$(urls).each(function(i,n) {
        url=urls[i];
        ss+="<div class='crosscover-item'><img src='"+url.u+"' alt='"+url.d+"'/></div>";
	});
    $(".crosscover-list").html(ss);
    
    $(".crosscover").crosscover({
        inClass: 'fade-in',
        outClass: 'fade-out',
        interval: 5000,
        startIndex: 0,
        autoPlay: true,
        dotsNav: true,
        controller: false,
        controllerClass: 'crosscover-controller',
        prevClass: 'crosscover-prev',
        nextClass: 'crosscover-next',
        playerClass: 'crosscover-player',
        playerInnerHtml: '<span class="crosscover-icon-player"></span>',
        prevInnerHtml: '<span class="crosscover-icon-prev"></span>',
        nextInnerHtml: '<span class="crosscover-icon-next"></span>'
    });

});