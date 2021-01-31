let h1 = document.querySelector("h1")

h1.innerText = ("Les attributs class et id")
console.log(h1);

let h2 = document.querySelector("h2")

h2.innerText = ("Exercice 2 partie A")

let h2Bis = document.querySelectorAll("h2")[1]
h2Bis.innerText = ("Exercice 2 partie B")

let p = document.querySelector("p")
p.innerHTML = (" L'ajout de class et d'ID est assez simple, il suffit de connaitre les methodes <b>par coeur</b> ")

let pBis = document.querySelectorAll("p")[1]
pBis.innerHTML = ("La manipulation de l'attribut Style peut-être une <i>solution</i> rapide ")


h1.setAttribute("id","bigTitle")

let div = document.querySelector("div")

div.classList.add("title")
console.log(div);

let paragraphe = Array.from(document.querySelectorAll("p"))

paragraphe.forEach(el => {
    el.classList.add("text")
    console.log(el);
});

let section = document.querySelector('section')
section.setAttribute("class", "margin-bottom border-black padding")

let section2 = document.querySelectorAll("section")[1]

section2.setAttribute("class", "margin-top border-black padding")

let divParent = section2.querySelector("div")
divParent.style.backgroundColor = "blue"
divParent.style.borderRadius = "red"
divParent.style.height = "20px"
divParent.style.width = "20px"