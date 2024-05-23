// > Crea un array composto da 15 automobili.
// > Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).
// < Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.
// < Infine stampa separatamente i 3 array.


// let auto = [{
//     marca:('ford'),
//     modello:('kuga'),
//     alimentazione:('benzina')
// },
// {
//     marca:('ford'),
//     modello:('kuga'),
//     alimentazione:('benzina')
// },
// {
//     marca:('ford'),
//     modello:('kuga'),
//     alimentazione:('metano')
// },
// {
//     marca:('ford'),
//     modello:('kuga'),
//     alimentazione:('benzina')
// },
// {
//     marca:('ford'),
//     modello:('kuga'),
//     alimentazione:('benzina')
// },
// {
//     marca:('audi'),
//     modello:('Auno'),
//     alimentazione:('diesel')
// },
// {
//     marca:('audi'),
//     modello:('Auno'),
//     alimentazione:('diesel')
// },
// {
//     marca:('audi'),
//     modello:('Auno'),
//     alimentazione:('metano')
// },
// {
//     marca:('audi'),
//     modello:('Auno'),
//     alimentazione:('diesel')
// },
// {
//     marca:('audi'),
//     modello:('Auno'),
//     alimentazione:('diesel')
// },
// {
//     marca:('fiat'),
//     modello:('fiorino'),
//     alimentazione:('gpl')
// },
// {
//     marca:('fiat'),
//     modello:('fiorino'),
//     alimentazione:('gpl')
// },
// {
//     marca:('fiat'),
//     modello:('fiorino'),
//     alimentazione:('elettrico')
// },
// {
//     marca:('fiat'),
//     modello:('fiorino'),
//     alimentazione:('gpl')
// },
// {
//     marca:('fiat'),
//     modello:('fiorino'),
//     alimentazione:('metano')
// },
// ];



let persone = [{
    nome:('sofia'),
    cognome:('rossi'),
    età:('91')
},
{
    nome:('carlo'),
    cognome:('rossi'),
    età:('22')
},
{
    nome:('giovanni'),
    cognome:('rossi'),
    età:('17')
},
{
    nome:('carlo'),
    cognome:('rossi'),
    età:('22')
},
{
    nome:('marina'),
    cognome:('rossi'),
    età:('12')
},
{
    nome:('carlo'),
    cognome:('rossi'),
    età:('22')
},
{
    nome:('mimmo'),
    cognome:('rossi'),
    età:('42')
},
{
    nome:('pippo'),
    cognome:('rossi'),
    età:('100')
},
{
    nome:('john'),
    cognome:('rossi'),
    età:('2')
},
{
    nome:('carl'),
    cognome:('rossi'),
    età:('21')
},
];

const abilitazione = [];

for (let persona of persone) {
    if (persona.età < 18) {
        console.log(persona.nome + ' non può guidare');
    } else {
        console.log(persona.nome + ' può guidare');
    }
};