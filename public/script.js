let src = "http://csce242-assignment14-yx60.onrender.com/";
/*let src = "http://localhost:3000/";*/

const showCrafts = async () => {
    let craftJSON = await getJSON();
    if (craftJSON == "") {
        return;
    }

    let craftDiv = document.getElementsByClassName("crafts-list")[0];


    craftJSON.forEach(craft => {
        let craftItem = document.createElement("div");
        craftItem.classList.add("craft-item");

        let craftImg = document.createElement("img");
        craftImg.src = src + "crafts/" + craft.image;
        craftItem.append(craftImg);

        craftDiv.append(craftItem);
    });

};

const getJSON = async () => {
    try {
        console.log(src + "api/crafts")
        let response = await fetch(src + "api/crafts");
        return await response.json();
    } catch(error) {
        console.log("error retrieving JSON");
        return "";
    }
};


window.onload = () => {
    showCrafts();
};