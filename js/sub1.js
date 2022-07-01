$(function(){
    var currenSlide = 0;
    $(".btn_prev").click(function(){
        currenSlide <= 0 ? currenSlide = 0 : currenSlide--;
        // currenSlide--;
        $(".slide ul").animate({"left": -(currenSlide*100) +"%"});
    });
    $(".btn_next").click(function(){
        currenSlide >= 3 ? (currenSlide = 3) : currenSlide++; 
        // currenSlide++;
        $(".slide ul").animate({"left": -(currenSlide*100) +"%"});
    });
});