$(function(){
    $(".tits h3").click(function(){
        $(this).addClass("active");
        $(this).siblings().removeClass("active");

        $(".cons > div").hide();

        
        $(".cons > div").eq($(this).index()).show();
        //eq = .eq(숫자)는 같은 부모의 자식 중에서 '숫자'번째 에게 접근합니다.
// .index()는 숫자만 반환하는 것에 비에 eq()는 요소를 반환하기 때문에 
//요소의 컨트롤에 매우 유용합니다.

        return false;   //아무것도하지말라는뜻
    });
});