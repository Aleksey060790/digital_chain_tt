$(function () {

    let showFirstModal = function () {
        $(".popup-content").addClass("active")
    };

    let hideFirstModal = function () {
        $(".popup-content").removeClass("active")
    };

    let showSecondModal = function () {
        $(".popup-content-second").addClass("active")
    };

    let spinFirstTime = function () {
        $(".fortune-wheel-inside").css("transform", "rotate(70deg)");
    }

    let spinSecondTime = function () {
        $(".fortune-wheel-inside").css("transform", "rotate(375deg)");
    }

    $("#wheel-btn").click(function () {
        spinFirstTime();
        setTimeout(showFirstModal, 2000);

    });

    $("#spinSecedondTime").click(function () {
        hideFirstModal();
        setTimeout(spinSecondTime, 1500);
        setTimeout(showSecondModal, 3500);
    });

});