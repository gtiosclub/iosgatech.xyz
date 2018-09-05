function openFacebook() {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;
    var url = "https://www.facebook.com/groups/gtiosclub/";
    var appUri = "fb://group/?id=501207600034394";

    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        // setTimeout(function () {
        //     window.location = url;
        // }, 5);
        window.location = appUri;
    }
}