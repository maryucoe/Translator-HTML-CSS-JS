let langoption=document.querySelectorAll('select')
let fromtext=document.querySelector('.text')
langoption.forEach((get,con)=>{
    for(let countrycode in language){
    let selected;
    if(con == 0 && countrycode=="en-GB"){
        selected="selected";
    }else if(con==0&&countrycode=="bn-IN"){
        selected="selected";
    }


    let option =`<option value="${countrycode}"${selected}>${language[countrycode]}</option>`; 
    get.insertAdjacentHTML('beforeend',option);
    }
})
fromtext.addEventListener('click',function(){

})