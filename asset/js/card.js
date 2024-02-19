let CarProduct=[
    {
     id:1,   
     img:"../../img/2023-Crown-XLE-Red-1.png",
     name:"2024 Toyota Crown",
     price:"Starting MSRP $40350*",
     machine:"Up to 42/41 Est. MPG"
    },
    {
        id:2,
        img:"../../img/pruis-prime.png",
        name:"2024 Prius Prime",
        price:"Starting MSPR $32975*",
        machine:"Up to 42/114 Est. MPG*/MPGe*"
    },
    {
        id:3,
        img:"../../img/prius-2024.png",
        name:"2024 Prius",
        price:"Starting MSRP $27,950*",
        machine:"Up to 57/56 Est. MGP*"
    },
    {
        id:4,
        img:"../../img/Gr-corolla1.png",
        name:"2024 GR Corolla",
        price:"Starting MSRP $36500*",
        machine:"Up to 21/28 Est. MPG*",

    },
    {
        id:5,
        img:"../../img/2024-corolla.png",
        name:"2024 Corolla",
        price:"Starting MSRP $22,050*",
        machine:"Up to 32/41 Est. MPG*"
    },
    {
        id:6,
        img:"../../img/corola-hatback.png",
        name:"2024 Corolla Harchback",
        price:"Starting MSRP $23,050*",
        machine:"Up to 32/41 Est. MPG*"
    },
    {
        id:7,
        img:"../../img/2024-camry.png",
        name:"2024 Camry",
        price:"Starting MSRP $26,050*",
        machine:"Up to 28/39 Est. MPG*"
    },
    {
        id:8,
        img:"../../img/2024-camry-hy.png",
        name:"2024 Camry Hybrid",
        price:"Starting MSRP $28,855*",
        machine:"Up to 51/53 Est. MPG*"
    }
]
let container = document.getElementById('carProductsContainer');
let html = '';
CarProduct.forEach((car,index) => {
    html += `
    <a href="../../html/view.html?carIndex=${index}">
        <div class="bg-[#F3F5F3] w-[262px] h-[349px]">
            <div class="flex justify-center items-center h-full group relative overflow-hidden">
                <img src="${car.img}" alt="${car.name}">
                <div class="absolute h-full w-full bg-black/50 cursor-pointer flex items-center justify-center  group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <i class="fa-solid fa-plus text-white"></i>
                </div>
            </div>
            <div>
                <p>${car.name} <br>
                ${car.price} <br>
                ${car.machine}</p>
            </div>
        </div></a>
    `;
});
container.innerHTML = html;