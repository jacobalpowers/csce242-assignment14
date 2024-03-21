const showCrafts = async () => {
    let response = await fetch("http://csce242-assignment14-yx60.onrender.com/api/crafts");
    let craftJSON = await response.json();
    let craftDiv = document.getElementsByClassName("crafts-list")[0];


    craftJSON.forEach(craft => {
        let craftItem = document.createElement("div");
        craftItem.classList.add("craft-item");

        let craftImg = document.createElement("img");
        craftImg.src = "http://csce242-assignment14-yx60.onrender.com/crafts/" + craft.image;
        craftItem.append(craftImg);

        craftDiv.append(craftItem);
    });

};

window.onload = () => {
    showCrafts();
};