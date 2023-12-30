let container = document.getElementById("container");
async function getproducts() {
  const response = await fetch("http://localhost:5000/productsapi");
  const data = await response.json();
  console.log(data);
  data.map(({ productName, id, productImage }) => {
    container.innerHTML += `<div>
        <h2>${id}</h2>
        <h2>${productName}</h2>
      <img height="200px" width="200px" src=${productImage} alt="">
    </div>`;
  });
}
getproducts();
