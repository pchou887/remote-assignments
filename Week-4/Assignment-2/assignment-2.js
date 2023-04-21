function ajax(src, callback) {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", src);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      const data = JSON.parse(xhr.responseText);
      return callback(data);
    }
  };
  xhr.send();
}
function render(data) {
  const productList = document.getElementById("products");
  const div = document.createElement("div");
  div.className = "card-group";
  let divCards = "";
  productList.appendChild(div);
  for (let i = 0; i < data.length; i++) {
    divCards += `
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">${data[i].name}</h5>
                <p class="card-text">${data[i].price}</p>
                <p class="card-text">${data[i].description}</p>
            </div>
        </div>
    `;
  }
  div.innerHTML = divCards;
}
ajax(
  "https://remote-assignment.s3.ap-northeast-1.amazonaws.com/products",
  function (response) {
    render(response);
  }
);
