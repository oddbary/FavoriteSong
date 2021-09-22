document.addEventListener("DOMContentLoaded",() => {
    const title = document.querySelectorAll('.responsive-title');

    for(let i= 0; i < title.length; i++) {
        let titleEach = title[i];
        let content = titleEach.nextElementSibling;
        titleEach.addEventListener('click',()=> {
            titleEach.classList.toggle('active');
            content.classList.toggle('open');
        });
    }
});

document.addEventListener("DOMContentLoaded",() => {
    const footertitle = document.querySelectorAll('.footer-title');

    for(let i= 0; i < footertitle.length; i++) {
        let footertitleEach = footertitle[i];
        let footercontent =footertitleEach.nextElementSibling;
        footertitleEach.addEventListener('click',() => {
            footertitleEach.classList.toggle('active');
            footercontent.classList.toggle('open');
        });
    }
});

//document.addEventListener("DOMContentLoaded",() => {
    var container = document.getElementById("container");

    document.getElementById("container") != null
    
    var right = window.getComputedStyle( $('#'+container)[4], "");

    console.log(right.display)
    
    console.log(right.getPropertyValue("margin-right"));
    

