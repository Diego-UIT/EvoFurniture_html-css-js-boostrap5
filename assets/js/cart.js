function format(n) {
    return (n * 1000).toLocaleString('vi', {
        style: 'currency',
        currency: 'VND'
    })
}

function renderCart(items) {
    const $cart = document.querySelector("#order_items")
    const $total = document.querySelector(".total")
    const $totalPrice = document.querySelector(".total.amount")
    const $countItemsDesktop = document.querySelector(".count_item.desktop")
    const $countItemsMobile = document.querySelector(".count_item.mobile")
    const $countItemsCart = document.querySelector(".count-item")
    

    $cart.innerHTML = items.map((item) => `
            <tr class="cart-items">
                <th scope="row">
                    <div class="image">
                        <img src="./assets/img/All-products/${item.img}.jpg" alt="" width="150" height="auto">
                    </div>
                </th>
                <td>
                    <div>
                        <a href="" class="name">${item.name}</a>
                    </div>
                    <div>
                        <button id="deleteButton" class="btn btn-link" onClick="cartLS.remove(${item.id})">Xóa</button>
                    </div>
                </td>
                <td>
                    <div class="price">
                        <span id="dongia">${format(item.price)}</span>
                    </div>
                </td>
                <td>
                    <div class="custom-btn-number">
                        <button id="incs"class="btn-cts btn-minus" onClick="cartLS.quantity(${item.id},-1)">-</button>
                        <input type="text" id="qty" value="${item.quantity}">
                        <button id="decs" class="btn-cts btn-plus" onClick="cartLS.quantity(${item.id},1)">+</button>
                    </div>
                </td>
            </tr>`).join("")

    $total.innerHTML = format(cartLS.total())
    $totalPrice.innerHTML = format(cartLS.total())
    $countItemsDesktop.innerHTML = cartLS.totalCount()
    $countItemsMobile.innerHTML = cartLS.totalCount()
    $countItemsCart.innerHTML = '(' + cartLS.totalCount() + ' sản phẩm)'
}
renderCart(cartLS.list())
cartLS.onChange(renderCart)