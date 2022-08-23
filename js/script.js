$('.nav-link').on('click', function(e){

	let tujuan = $(this).attr('href');
	let elemenTujuan = $(tujuan);


	$('html,body').animate({
		scrollTop: elemenTujuan.offset().top -50
	}, 1250, 'easeInOutExpo');

	e.preventDefault();

});


let i = 0;
function makeProgress(){

    if(i < 100){
        i = i + 1;
        $(".progress-bar" && "#html").css("width", i + "%").text(i + " %");
    }
        if( i < 85){
        i = i + 1;
        $(".progress-bar" && "#css").css("width", i + "%").text(i + " %");
    }

    if( i < 80){
        i = i + 1;
        $(".progress-bar" && "#javascript").css("width", i + "%").text(i + " %");
    }

    if( i < 50){
        i = i + 1;
        $(".progress-bar" && "#nodejs").css("width", i + "%").text(i + " %");
    }
    setTimeout("makeProgress()", 100);
}
makeProgress();