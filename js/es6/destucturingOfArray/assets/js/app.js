let cl = console.log;

let details = ["RAvikiran Niturkar", 1111, 'javascriptiscoolstuff.com'];

// let fullName = details[0];
// let id = details[1];
// let website = details[2];

let [fullName, id, website] = details;

cl("fullName:", fullName, "id:", id, "website:", website);


// let info = "Cricket, 1983, Kapil Dev";
// let infoArr = info.split(', ');
// cl(infoArr)
// let [sportsName, wcYear, captain] = infoArr;


// cl(sportsName)
// cl(wcYear)
// cl(captain)


let players = ["Viru", "Yuvaraj", "Sachin", "Dravid", "Dada", "Kumbale"];

// let captain;
// let vcCaptain;
// let team = [] ;

// for (let i = 0; i < players.length; i++) {
//     if(i === 0){
//         captain = players[i]
//     }else if(i === 1){
//         vcCaptain = players[i]
//     }else{
//         team.push(players[i])
//     }
// }

let [captain, vcCaptain, ...team] = players;

cl(captain, vcCaptain, team);

cl(...players);
cl(players);


let x = 44;
let y = 33;

// y = y - x;
// x = x + y;
// y = x - y;

[y, x] = [x, y] // [44, 33]

cl("x", x, "y", y)


function convertCurrency(inr) {
    return {
        USD: inr * 1.70,
        AUD: inr * 1.6,
        PUND: inr * 1.4
    }
}

// var result = convertCurrency(100);
// cl(result);


// let usdValue = result.USD;
// let ausValue = result.AUD;
let { USD: usdValue, AUD: ausValue, PUND: pundValue } = convertCurrency(100);
cl(usdValue, ausValue, pundValue);

// default function arrguments
function tipCalc({ total, tip = .5, tax = .14 }) {
    return total + (total * tip) + (total * tax)
}
// { total, tip = .5, tax = .14  } = { tip: .5, tax: .14, total: 1000 }
var bill = tipCalc({ tip: .5, tax: .14, total: 1000 });

cl(bill)