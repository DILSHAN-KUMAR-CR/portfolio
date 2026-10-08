$(document).ready(function () {

    // Display current year
    $("#year").text(new Date().getFullYear());

    // Mobile navigation
    $("#menuBtn").click(function () {
        $("#navMenu").toggleClass("open");
    });

    // Resume print option
    $("#printResume").click(function () {
        window.print();
    });

    // Small jQuery hover effect
    $(".card").hover(
        function () {
            $(this).css("transform", "translateY(-4px)");
        },
        function () {
            $(this).css("transform", "translateY(0)");
        }
    );
});
