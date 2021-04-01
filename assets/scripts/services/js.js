
/*************************Key****************************/ 
const searchbox = document.querySelector('#search')

const APIKEY = "XPopyBNaDradpd7pMdSPbu2jJBntPNKW"
const ENDPOINT = {
    trending: '/trending', 
    search: '/search',    
    autocomplete: '/search/tags',
}


/*************************autocomplete****************************/ 

const searchbox = document.querySelector('#searchList')








/************************* prender boton morado****************************/ 

let colors = ['purple'];

let button = document.getElementById('btnstart');

button.addEventListener('click', function(){
    console.log('test')
    var randomColor = colors[Math.floor(Math.random() * colors.length)]

    let container = document.getElementById('dot1');

    container.style.background = randomColor;
})

/*************************dark mode****************************/ 
