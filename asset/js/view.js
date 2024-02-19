
window.addEventListener('DOMContentLoaded', () => {
        const urlParams = new URLSearchParams(window.location.search);
        const carIndex = urlParams.get('carIndex');
        console.log(carIndex)
        const car = CarProduct[carIndex];
        const carDetailsDiv = document.getElementById('carDetails');
       console.log(carDetailsDiv)
        carDetailsDiv.innerHTML = `
        <img src="${car.img}" alt="">
        `;
    
   })