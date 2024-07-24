const search = document.querySelector('i')
const input = document.querySelector('input')
const odd = 0;
let odd1 = 0;
search.addEventListener('click' , (e) => {
    if(input.classList != ""){
        input.classList.remove('display');
        search.classList.remove('active');
        // console.log(input.classList);
    }else{
        input.classList.add('display');
        search.classList.add('active');

    }
})