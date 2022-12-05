const form = document.querySelector('fieldset')
export const dinamicForm = (option) => {
    if(option == 'new_user') {
        form.innerHTML = `
        <input class="input-string" name="name" type="text" placeholder="Name">
        <input class="input-string" name="email" type="email" placeholder="E-mail">
        <input class="input-string" name="cellphone" type="tel" placeholder="Telefone">
        <input class="input-string" name="password" type="password" placeholder="Password">
        `;
    }

    if(option == 'new_product') {
        form.innerHTML = `
        <input class="input-string" name="name" type="text" placeholder="Name">
        <select name="category"  id="category-select">
            <option disabled selected>Categoria</option>
        </select>
        <select name="type" id="type-select">
            <option disabled selected>Type</option>
        </select>
        <input class="input-string" type="number" placeholder="Price" step="0.50">
        <select name="ingredients-select" id="ingredients-select">
            <option disabled selected>Ingredients</option>
        </select>
        <div class="promo-option">
            <input type="checkbox" name="promo" id="promo-input">
            <label id="promo-label" for="promo-input">Desconto</label>
        </div>
        `

        const promoOption = document.querySelector('input[name="promo"]')
        const divToAppend = document.querySelector('.promo-option')

        promoOption.addEventListener('click', (e) => {
            if(promoOption.checked) {
                divToAppend.innerHTML = `
                <input class="input-string" type="number" placeholder="%">
                `
            }
        })

        const category = document.querySelector('#category-select').addEventListener('click', () => console.log('aaa'))
    }

    //
}
