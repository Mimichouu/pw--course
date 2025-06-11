class Team {
    constructor(name, players) {
        this.name = name;
        this.players = [];
    }

    addPlayer(player) {
        this.players.push(player);
    }

    listPlayers() {
        this.players.forEach(player => {
            console.log(`Player Name: ${player.name}`);
        });
    }
}

const team = new Team ('Hà Nội FC');
team.addPlayer({name: "haha"});
team.addPlayer({name: "hihi"});
team.addPlayer({name: "hehe"});

console.log(`Team: ${team.name}`);
team.listPlayers();