const showCrafts = async () => {
    let response = await fetch("http://localhost:3000/api/crafts");
    let craftJSON = await response.json();
    let craftDiv = document.getElementsByClassName("crafts-list")[0];


    craftJSON.forEach(craft => {
        let craftItem = document.createElement("div");
        craftItem.classList.add("craft-item");

        let craftImg = document.createElement("img");
        craftImg.src = "http://localhost:3000/crafts/" + craft.image;
        craftItem.append(craftImg);

        craftDiv.append(craftItem);
    });

};

window.onload = () => {
    showCrafts();
};