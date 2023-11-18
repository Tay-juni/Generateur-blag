const quotes =[{
    quote :`"C'est l'histoire d'une jolie petite antenne de télévision qui est tombée amoureuse d'un paratonnerre. Elle lui dit : « Dis, tu y crois toi, au coup de foudre ? » "`,
    writer : `"-les joke de papa"`
},
{
    quote :`"Un enfant demande à sa maman : « Maman, tu dis que nos voisins sont du Midi. Mais, nous, on est du matin ou du soir ? »."`,
    writer : `"-les joke de papa"`
},
{
    quote :`"Deux fesses discutent, quand l’une dit à l’autre « Tu ne trouves pas que ça sent mauvais dans le couloir ? »."`,
    writer : `"-les joke de papa"`
},
{
    quote :`"Tu connais l’histoire du ptit-dej? : << Pas de bol. >> "`,
    writer : `"-les joke de papa"`
},
{
    quote :`"Que fait une fraise sur un cheval? : « Tagada Tagada » "`,
    writer : `"-les joke de papa"`
},
{
    quote :`"Qu'est-ce qui court et qui se jette : « Une courgette! » "`,
    writer : `"-les joke de papa"`
},
{
    quote :`"Qu'est-ce que les élèves usent le plus à l'école? : «  Les professeurs  » "`,
    writer : `"-les joke de papa"`
},

,]


let btn = document.querySelector("#Qbtn");
let quote = document.querySelector(".quote");
console.log(quote);
let writer = document.querySelector(".writer");


btn.addEventListener("click", function () {
    let random = Math.floor(Math.random()* quotes.length);

    quote.innerHTML = quotes[random].quote;
    writer.innerHTML = quotes[random].writer
})
