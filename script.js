const cards = document.getElementsByClassName('card')

for (let singleCard of cards) {
    const cardsHeart = singleCard.querySelector('.card-heart')
    const callBtn = singleCard.querySelector('.call-btn')
    

    // heart count
    cardsHeart.addEventListener('click',function(){
        let clickCount = parseInt(document.getElementById('heart-img').innerText)
        clickCount++
        document.getElementById('heart-img').innerText = clickCount
    })

    // call btn click
    const serviceName = singleCard.querySelector('.service-name').innerText
    const serviceNumber = singleCard.querySelector('.service-number').innerText
    const setAlert = `📞Calling-${serviceName}-${serviceNumber}`
    callBtn.addEventListener('click',function(){
        alert(setAlert)
    })
}



// const cards = document.getElementsByClassName("card");

// ​
// 3
// console.log(cards);
// 4
// ​
// 5
// for (let singleCard of cards) {
// 6
//   const cardBtn = singleCard.querySelector("button");
// 7
//   const price = singleCard.querySelector(".product-price").innerText;
// 8
//   const cardTitle = singleCard.querySelector(".card-title").innerText;
// 9
//   const cardImg = singleCard.querySelector("img").src;
// 10
// ​
// 11
//   cardBtn.addEventListener("click", function () {
// 12
//     console.log({ price, cardTitle, cardImg });
// 13
//     Adding Price
14
//     const totalPriceElement = document.getElementById("curt-price");
// 15
//     let currentTotalPrice = parseFloat(totalPriceElement.innerText);
// 16
//     currentTotalPrice += parseFloat(price);
// 17
//     totalPriceElement.innerText = currentTotalPrice;
// 18
    // ----
// 19
// ​
// 20
//     const container = document.querySelector("aside.col-span-4");
// 21
//     const newDiv = document.createElement("div"); // <div></div>
// 22
//     newDiv.innerHTML = `
// 23
// ​
// 24
//       <p> ${price} - ${cardTitle}  </p>
// 25
//         <img src="${cardImg}"/>
// 26
//     `;
// 27
// ​
// 28
//     newDiv.addEventListener("click", function () {
// 29
//       // Adding Price
// 30
//       const totalPriceElement = document.getElementById("curt-price");
// 31
//       let currentTotalPrice = parseFloat(totalPriceElement.innerText);
// 32
//       currentTotalPrice -= parseFloat(price);
// 33
//       totalPriceElement.innerText = currentTotalPrice;
// 34
//       // ----
// 35
//       newDiv.remove();
// 36
//     });
// 37
//     container.append(newDiv);
// 38
//   });
// 39
// }




