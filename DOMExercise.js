const btn1 = document.getElementById(`one`);

btn1.addEventListener('click', () =>{
alert('Cool! You can hear/understand a hummingbird and ants');
});

const h3 = document.querySelector('h3');

h3.addEventListener('mouseover', ()=>{
    alert("OH NO! The squirrels are on to you. Now you have to leave this reality and move to a new one");
});


const form = document.querySelector(`form`);

form.addEventListener(`submit`, q => {
    q.preventDefault();
    const mess = form.elements.quote.value;
    alert(`${mess}`);

})

const darkMode = document.querySelector(`#dm`);

darkMode.addEventListener(`click`, () =>{
for(element of document.querySelectorAll(`*`)){
    elements.classList.toggle(`dark-mode`);
}
});

const newReality = document.querySelector(`#reality`);

let i=1;

function realityJump(){
    if(i < 3){
        alert("you have successfully moved to another reality");
        i++;

    }else{
        alert ("Oh no you can only move to a new reality a 3 times youre' stuck");
        newReality.removeEventListener(`click`, realityJump);
    }
}

newReality.addEventListener(`click`, realityJump);


