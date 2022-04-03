let cl = console.log;

let runner = ['Ravikiran', 123, 5.5, 10, 17, 36];

// let ruunerName = "Ravikiran";
// let ruunerId = 123;
// let times = [5.5,10,17,36]

let  [runnerName, runnerId, ...times] = runner;

cl(runnerName, runnerId, times);

let team = ['Viru', 'Yuvraj', 'Sachin', 'Dada', 'Kumable'];

let [captain, vscaptain, ...players] = team;

cl(captain, vscaptain, players)