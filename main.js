console.log('Start');

let container = document.getElementById('container');
let searchBar = document.getElementsByClassName('searchBar');
searchBar.boton
let body = document.getElementsByTagName('body')[0];

console.log(container);

// console.log(container.children[0].style);

container.children[19].classList.add('food');
container.children[1].classList.add('headSnake');
container.children[0].classList.add('bodySnake');
// container.children[2].classList.add('headSnake');
// container.children[1].classList.add('bodySnake');
// container.children[0].classList.toggle('bodySnake');
// container.children[7].classList.add('headSnake');
// container.children[2].classList.add('bodySnake');
// container.children[1].classList.toggle('bodySnake');
// container.children[1].classList.toggle('headSnake');

// console.log(container.children[3].classList);
// container.children[3].classList.toggle('headSnake');
// console.log(container.children[3].classList);

let snake = [1,0];//snake[0] headSnake

//logica para el movimeinto del snake

body.addEventListener('click',function (event) {
    
})


// let var1={
//     id1:'valor',
//     id2:9,
//     id3:{
//         va:'kk'
//     }
// };

// console.log('valor: '+container.children[0].textContent);
// container.children[0].textContent = 'A';
// console.log('valor: '+container.children[0].textContent);


// console.log(var1);



// undefined
// NaN
// null
// Infinity

body.addEventListener('keyup',(event) =>{
    console.log('keyup');
    console.log(event.key);
    if (event.key === '0') {
        console.log('if');
    }

})



console.log(snake);
snake.unshift(6);
console.log(snake);
snake.pop();
console.log(snake);

