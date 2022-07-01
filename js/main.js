function changeTheme() {
    var checkBox = document.getElementById("myCheck");

    if(checkBox.checked == false) {

        document.documentElement.style.setProperty('--fonddark', '#181a1e');
        document.documentElement.style.setProperty('--fondlight', '#22242d');
        document.documentElement.style.setProperty('--ecriture', '#ffff');
        document.documentElement.style.setProperty('--test2', '#181a1e');
        document.documentElement.style.setProperty('--fondlightREV', '#DEDEDE');
        toggleTheme++;

    } else {

        document.documentElement.style.setProperty('--fonddark', '#22242d');
        document.documentElement.style.setProperty('--fondlight', '#d8d8d8');
        document.documentElement.style.setProperty('--ecriture', '#181a1e');
        document.documentElement.style.setProperty('--test2', '#ffff');
        document.documentElement.style.setProperty('--fondlightREV', '#22242d');
        toggleTheme--;

    }
}

$(window).on("load",function(){
    $(".loader-wrapper").fadeOut("slow");
});