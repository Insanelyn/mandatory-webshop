let products = [
    {
        name: "Mint chokolate chip cake",
        price: 1235,
        description: "A gooey cake with mint and chokolateflavour. 8-10 pieces",
        img:"https://img.taste.com.au/VaiIDvqh/w720-h480-cfill-q80/taste/2016/11/choc-chip-candy-cane-ice-cream-cake-110463-1.jpeg",
    },
    {
        name: "Vanilla Raspberry Cake",
        price: 995,
        description: "A classic cake for the classic taste. 5-8 pieces.",
        img: "https://img.taste.com.au/waYpI9GZ/w720-h480-cfill-q80/taste/2017/03/chocolate-meringue-layer-cake-124699-1.jpg",
    },


    {
        name: "Super Brownie Cake",
        price: 975,
        description: "The ultimate chocolate cake with all that a chocolate lover would want. 6-9 pieces.",
        img:"https://food.fnr.sndimg.com/content/dam/images/food/fullset/2012/12/20/0/FNM_010113-Smores-Cake-Recipe_s4x3.jpg.rend.hgtvcom.616.462.suffix/1371611980872.jpeg",
    },

    {
        name: "Birthday Cake",
        price: 658,
        description: "A classic birthday cake. Perfect for the kids birtdays. 12-15 pieces- ",
        img:"https://food.fnr.sndimg.com/content/dam/images/food/fullset/2011/4/5/0/RX-FNM_050111-TV-Sweeps-010_s4x3.jpg.rend.hgtvcom.616.462.suffix/1371595337466.jpeg",
    }
];



let body = document.getElementsByTagName("body")[0];
let section = document.createElement("section");
section.setAttribute("id", "prod");
body.appendChild(section);
body.insertBefore(section, body.childNodes[1]);


for (let items of products) {
    document.getElementById("prod").innerHTML += `<div>${items.name}
    <img src="${items.img}">
    <p>${items.price} kr</p>
    <p>${items.description}</p></div>`;
}





