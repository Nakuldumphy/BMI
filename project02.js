let male = document.getElementById('m');
let female = document.getElementById('f');

male.addEventListener('click',()=>{
    male.style.boxShadow = "0px 0px 5px #da640a"
    female.style.boxShadow = "none"
})


female.addEventListener('click',()=>{
    female.style.boxShadow = "0px 0px 5px #da640a";
    male.style.boxShadow = "none"
})

const submit = document.querySelector('button');
submit.addEventListener('click',()=>{

    let height = document.getElementById('myhei').value;
    let weight = document.getElementById('mywei').value;
    const res = document.getElementsByClassName('result')[0];
    res.textContent = "BMI: " + Math.round(((weight*100*100)/(height * height))*100)/100;
})

