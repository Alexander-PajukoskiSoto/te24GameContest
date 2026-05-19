

const randomPush = ()=>{
    const gameList = [
        {
            name: "Clunky Combat",
            url: "https://zawirama-artz-founder.itch.io/clunky-combat",
            image: "./images/ClunkyCombat.png"
        },
        {
            name: "Lalulu Rampage",
            url: "https://ironclone.itch.io/labubu-rampage",
            image: "./images/LaluluRampage.png"
        },
        {
            name: "Skyfront Battle",
            url: "https://shahzaib57.itch.io/skyfront-battle",
            image: "./images/skyFrontBattle.png"
        },
        {
            name: "Whispering Halls",
            url: "https://www.roblox.com/games/100990031855212/Whispering-Halls",
            image: "./images/WhisperingHalls.png"
        },
        {
            name: "Zombie Survival",
            url: "https://darkwavedev.itch.io/zombie-survival-arena",
            image: "./images/ZombieSurvival.png"
        },
        {
            name: "Wanderer",
            url: "./sites/wanderer.html",
            image: "./images/wanderer1.jpg"
        },

    ];
    const randomGameList = [...gameList];

    for (let i = randomGameList.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));

        [randomGameList[i], randomGameList[j]] =
        [randomGameList[j], randomGameList[i]];
    }

    console.log(randomGameList);
    //  Makes random number between list length and 0
    //  Create the section

    const main = document.getElementById("games");
    console.log(randomGameList);

    
    for (let i = 0; i < randomGameList.length; i++) {
        const game = randomGameList[i];
        let gameSection = document.createElement("section");
        gameSection.className = "gameCard";

        //  Create the image
        let gameImage = document.createElement("img");
        gameImage.src = game.image;
        gameImage.alt = game.name;

        //  Create game link
        const gameName = document.createTextNode(game.name);
        const gameLink = document.createElement("a");
        gameLink.href = game.url;
        gameLink.target="_blank"
        gameLink.append(gameName);
        
        //  Put it all together
        gameSection.append(gameImage);
        gameSection.append(gameLink);
        main.append(gameSection);
    }
    
}
randomPush();