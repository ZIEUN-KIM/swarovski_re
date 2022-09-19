//--햄버튼--//
$(function () {
    //hamBtn1
    $(".hamBtn1").click(function () {
        count++;
        if (count % 2 == 0) {
            $(this).find("img").attr("src", "images/ham1.png")
        }
        else {
            $(this).find("img").attr("src", "images/close1.png");

        }
    })
    //hamBtn2
    $(".ham").click(function () {
        $(this).children().toggleClass("active");
    })

//--헤더 메뉴--//
    $(function () {
        $("#nav>.headMenu").click(function () {
            console.log("123")
            $(this).siblings().find(".head").css("display", "none");
            $(this).find(".head").css("display", "flex");
            $(this).siblings().find("a").removeClass("active");
            $(this).find("a").addClass("active");

        });
        $(".ham").click(function () {
            if ($("#nav").css("display") == "none") {
                $("#nav").show(300); //display :none 일때
            } else {
                $("#nav").hide(500); //display :block 일때
            }
        });
    })

//--newBox--//
    $(document).ready(function () {
        $('.slider').bxSlider({
            maxSlides: 4,
            minSlides: 2,
            slideWidth: 270,
            slideMargin: 10,
            moveSlides: 1,
            pagerSelector: "#btn"
        });
    });

//--상하슬라이드--//
    
    $(document).ready(function () {
        $('.slideBanner').bxSlider({
            mode: 'vertical',
            maxSlides: 4,
            minSlides: 2,
            slideWidth: 270,
            slideMargin: 10,
            moveSlides: 1,
            pagerSelector: "#btn"
        });
    });

//--category--//
    $(".title>li").click(function () {
        let styleIndex = $(this).index();
        $(".style .title li").removeClass();
        $(".style .title li").eq(styleIndex).addClass("active");
        $(".style .imgSquare ul li").css("display", "none");
        $(".style .imgSquare ul li").eq(styleIndex).css("display", "block");

        $(".style .imgRight ul li").css("display", "none");
        $(".style .imgRight ul li").eq(styleIndex).css("display", "block");
    })
    $(".head>li").click(function () {
        let styleIndex = $(this).index();
        $(".style .title li").removeClass();
        $(".style .title li").eq(styleIndex).addClass("active");
        $(".head li .sub li").css("display", "none");
        $(".style .imgSquare ul li").eq(styleIndex).css("display", "block");

        $(".style .imgRight ul li").css("display", "none");
        $(".style .imgRight ul li").eq(styleIndex).css("display", "block");
    })

//--footer--//
    $(document).ready(function () {
        $('.couponText').bxSlider({
            maxSlides: 3,
            minSlides: 3,
            slideWidth: 1000,
            slideMargin: 20,
            moveSlides: 1,
            auto: true
        });
    });
})