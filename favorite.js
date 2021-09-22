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

document.addEventListener("DOMContentLoaded",() => {
    const container = document.querySelectorAll(".container");
   
    const right = window.getComputedStyle(container,'').getPropertyValue("margin-right");
    console.log(right);
});
