let navList = document.querySelector('.nav-list2');
let display = 0;

function hideShow(){
    if(display == 1){
    navList.style.display = 'block';
    display = 0;
    console.log("dispalyed the div");
    }
    else{
        navList.style.display = 'none';
        display = 1;
    }
}