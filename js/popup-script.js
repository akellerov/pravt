window.addEventListener("load", function(){
    setTimeout(
        function open(event){
            document.querySelector(".popup").style.display = "block";
            document.querySelector(".popup_body").style.display = "block";
        },
        1000
    )
});


document.querySelector("#close").addEventListener("click", function(){
    document.querySelector(".popup").style.display = "none";
});