const productsElement = document.querySelector(".products")
const modalElem = document.getElementById("modal")
const modalDetail = document.querySelector(".modal-detail")
let url = "https://dummyjson.com/products";

fetch(url)
    .then(res => res.json())
    .then((data) => {
        data.products.forEach(element => {
            productsElement.innerHTML += `
            <div class="product" onclick="showdetail(${element.id})>
                <img src="${element.thumbnail}" alt="">
                <h2>${element.title}</h2>
                <p>${element.description}</p>
                <p>${element.price} $</p>
            </div>`
        })
    })

function showdetail(id) {
    fetch(`${url}/${id}`)
    .then(res => res.json())
    .then((data) => {
        console.log(data);
    })
}

modalElem.addEventListener('click', event => {
    if (!modalDetail.contains(event.target)) {
        modalElem.style.display = "none"
    }
})

