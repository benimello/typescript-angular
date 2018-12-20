var message = "Me ajuda, fulano!";
console.log(message);
var episode = 4;
console.log("Esse é o epsiódio " + 4);
episode = episode + 1;
console.log("próximo episódio é " + episode);
var favoriteDroid;
favoriteDroid = 'BB-8';
console.log("Meu android favorito é " + favoriteDroid);
var isEnoughToBeatMilleniumFalcon = function (parsecs) {
    return parsecs < 12;
};
var distance = 11;
//Template String permite usar expressões na string. Basta usar a crase para abrir e fechar a string
console.log("A " + distance + " parsecs \u00E9 o bastante para bater a Millenium Falcon? " + (isEnoughToBeatMilleniumFalcon(distance) ? 'Sim' : 'Não'));
var call = function (name) { return console.log("C\u00E2mbio, " + name + " ?"); };
call("R2");
function inc(speed, inc) {
    if (inc === void 0) { inc = 1; }
    return speed + inc;
}
console.log("inc (5,1) = " + inc(5, 1));
console.log("inc (5) = " + inc(5));
