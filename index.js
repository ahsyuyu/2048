var BLOCK_SIZE = 100;

var move = function(event) {

	if(event.keyCode == 38){
		//move_block("up");
		$( ".block" ).animate({ top: "-=100px" }, 500 );
	} else if(event.keyCode == 40){
		//move_block("down");
		$( ".block" ).animate({ top: "+=100px" }, 500 );
	} else if(event.keyCode == 37){
		//move_block("left");
		$( ".block" ).animate({ left: "-=100px" }, 500 );
	} else if(event.keyCode == 39){
		//move_block("right");
		$( ".block" ).animate({ left: "+=100px" }, 500 );
	}
	
}

var move_block = function(direction){
	$( ".block" ).animate({ left: "+=100px" }, 500 );
}

//var move_block = function(direction) {
//	var current_pos;
//	if(direction == "up" || direction == "down" ){
//		current_pos = $(".block").css("top");
//	} else if(direction == "left" || direction == "right"){
//		current_pos = $(".block").css("left");
//	}
//	
//	current_pos = parseInt(current_pos.replace("px",""));
//	
//	if(direction == "down" || direction == "right"){
//		current_pos += BLOCK_SIZE;
//		
//	} else if(direction == "up" || direction == "left"){
//		current_pos -= BLOCK_SIZE;
//		if(current_pos < 0) return;
//	}
//	
//	if(direction == "up" || direction == "down" ){
//		$(".block").animate({top:current_pos + "px"},500);
//		//$(".block").css({top:current_pos + "px"});	
//	} else if(direction == "left" || direction == "right"){
//		$(".block").animate({left:current_pos + "px"},500);
//		//$(".block").css({left:current_pos + "px"});	
//	}
//	
//}