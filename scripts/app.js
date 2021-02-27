document.addEventListener("DOMContentLoaded", function(){
    const trigger = document.querySelector(".title");

    document.body.className = 'theme-1';
    trigger.addEventListener("click", () => {
	changeBackground();
    });

    function changeBackground() {
	if(body.classList.contains("theme-1")){
	    body.classList.remove("theme-1");
	    body.classList.add("theme-2");
	} else if(body.classList.contains("theme-2")){
	    body.classList.remove("theme-2");
	    body.classList.add("theme-3");
	} else if(body.classList.contains("theme-3")){
	    body.classList.remove("theme-3");
	    body.classList.add("theme-1");
	}
    }
});
