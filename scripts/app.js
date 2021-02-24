document.addEventListener("DOMContentLoaded", function(){
    const body = document.body;
    const header =  document.querySelector('header');
    body.className = 'theme-1';
    header.insertAdjacentHTML('afterend', '<span class="theme-toggle">cycle themes</span>');

    const trigger = document.querySelector(".theme-toggle");

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
