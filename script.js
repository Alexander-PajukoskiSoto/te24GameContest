

const randomPush = ()=>{
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
    let randomGameList = [];
    const gameLength = gameList.length;
    const main = document.getElementById("games");
    for (let i = 0; i < gameLength; i++) {
        let gameIndex = Math.floor(Math.random() * gameList.length);
        randomGameList[i] = gameList[gameIndex];
        gameList.splice(gameIndex,1);
    }
    //  Makes random number between list length and 0
    //  Create the section
    console.log(randomGameList);

    console.log(randomGameList);
    for (let i = 0; i < randomGameList.length; i++) {
        const game = randomGameList[i];
        let gameSection = document.createElement("section");
        gameSection.className = "gameCard";
        gameSection.id = randomGameList[i + 1].name;

        //  Create the image
        let gameImage = document.createElement("img");
        gameImage.src = game.image;
        gameImage.alt = game.name;

        //  Create next game link
        let nextLink = document.createElement("a");
        let nextText = document.createTextNode(">");
        nextLink.setAttribute("href",`#${randomGameList[i].name}`)
        nextLink.append(nextText);
        
        //  Put it all together
        gameSection.append(gameImage);
        main.append(gameSection);
        gameSection.append(nextLink);
        randomGameList.splice(i,1);
        }
    
}
randomPush();