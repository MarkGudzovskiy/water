window.onload = function () {
    let preloader = document.querySelector(".loading");
    preloader.classList.add('loaded_hiding');
    window.setTimeout(function () {
        preloader.classList.add('loaded');
        preloader.classList.remove('loaded_hiding');
        preloader.classList.remove('loading');
    }, 500);
}