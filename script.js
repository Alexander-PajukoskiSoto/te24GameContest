const gameList = [
    {
        name: "Smurf Crashout",
        url: "#",
        image: "./images/Robloxhead.webp"
    },
    {
        name: "Some other game",
        url: "#",
        image: "./images/Robloxhead.webp"
    },
    {
        name: "Johannes Douglas",
        url: "#",
        image: "./images/Robloxhead.webp"
    }
];

const randomPush = ()=>{
    const main = document.getElementById("games");
    const gameLength = gameList.length;
    for (let i = 0; i < gameLength; i++) {
        // Makes random number between list length and 0
        gameIndex = Math.floor(Math.random() *gameList.length)
        const game = gameList[gameIndex];
        // 1. Create the section
        let gameSection = document.createElement("section");
        gameSection.className = "gameCard";
    
        // 2. Create the image
        let gameImage = document.createElement("img");
        gameImage.src = game.image;
        gameImage.alt = game.name;
    
        // 3. Put it all together
        gameSection.append(gameImage);
        main.append(gameSection);
        gameList.splice(gameIndex,1);
    }
}
randomPush();