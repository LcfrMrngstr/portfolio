
const icons = document.querySelectorAll("[data-icon]")

const screen_size = parseInt(window.innerWidth)

const class_names = ["fa-brands fa-instagram-square fa-4x", "fa-brands fa-linkedin fa-4x", "fa-brands fa-twitter-square fa-4x"]


if (screen_size< 800){
    var count = 0
    icons.forEach(icon =>{
        icon.className = class_names [count]
        count += 1
    })
}

$(window).on('resize', function() {
    if($(window).width() < 800) {
        $('#insta_icon').addClass('fa-4x');
        $('insta_icon').removeClass('fa-6x');
        $('#linkedin_icon').addClass('fa-4x');
        $('#linkedin_icon').removeClass('fa-6x');
        $('#twitter_icon').addClass('fa-4x');
        $('#twitter_icon').removeClass('fa-6x');
    }
})