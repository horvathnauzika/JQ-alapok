/* window.addEventListener("load", function(){
    const pELEM=document.querySelector("p");
    console.log(pELEM);
    pELEM.innerHTML="valami";
});

$(document).ready(function(){
    const pELEM = $("p");
    console.log(pELEM);
    pELEM.html("valami");
}); */

$(function(){
    /*const pELEM = $("p");
    console.log(pELEM);
    pELEM.html("valami");*/
});

// az első tartalom div 2. p tagjébe írd be, hogy hurrá JQuery

const pELEM=$("div.tartalom p")
pELEM.eq(1).text("<b>Hurrá JQuery</b>") // kiírja az egészet szövegként
pELEM.eq(1).html("<b>Hurrá JQuery</b>")

// az oké gombra kattintva a pELEM tartalmát tedd bele az azon nevű divbe
const OKELEM = $("button")
const azonELEM = $("#azon")

OKELEM.on("click", function(){
    // pELEM tartalmát tedd bele az azon nevű divbe
    /*let tartalom=pELEM.html().eq(1)
    azonELEM.append(tartalom)*/
    azonELEM.html(pELEM.eq(1).html())
})