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

const main = document.getElementById("games");

for (let i = 0; i < gameList.length; i++) {
    const game = gameList[i];
    
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
}