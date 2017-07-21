window.addEventListener('polymer-ready', function(e) {
    setTimeout(function(){
        if(document.querySelector("core-scaffold")){
            document.querySelector("core-scaffold").style.display = "block";
        }
    },2000)
});
