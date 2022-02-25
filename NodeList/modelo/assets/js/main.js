const paragrafos = document.querySelector('.paragrafos');
const ps = paragrafos.querySelectorAll('p');

const estilosBody = getComputedStyle(document.body);
const backGroundColorBody = estilosBody.backgroundColor;
console.log(backGroundColorBody)

for(let p of ps){ 
    // ALTERANDO A COR DO ELEMENTO
    p.style.backgroundColor = backGroundColorBody;
    // ALTERANDO A COR POR CSS
    p.style.color = '#ffffff'
}
