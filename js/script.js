// 3. verifico e applico coupon

// referenze
var btn = document.getElementById("button");
var nameInput = document.getElementById("name");
var ingredients = document.getElementsByClassName("ingredient-checkbox");
var priceSpan = document.getElementById("price");
var coupon = document.getElementById("coupon");
var couponArray = [
    '123456ABCDEF',
    '59478HUIDDIK',
    '86921UTVDNIO'
];

btn.addEventListener("click", function () {

    // codice JS da eseguire quando clicco sul pulsante
    var name = nameInput.value.trim();
    // console.log("Nome del burger:", name);

    // 1. name obbligatorio
    if (name.length == 0) {
        alert("Inserisci il nome del tuo hamburger");
    } else {
        
        // 2. calcolo prezzo base + ingredienti
        var price = 50;

        // aggiunta prezzo ingredienti
        for (var i = 0; i < ingredients.length; i++) {
            var ingredientCheckbox = ingredients[i];
            // console.log(ingredientCheckbox.id, ingredientCheckbox.value, ingredientCheckbox.checked);

            if (ingredientCheckbox.checked) {
                price += parseInt(ingredientCheckbox.value);
            }
        }

        // 3. verifico e applico coupon
        var myCouponCode = coupon.value;

        if(couponArray.includes(myCouponCode)) {
            price -= price * 0.2;
        } else if(myCouponCode.length > 0) {
            alert("Codice sconto non valido");
        }

        // console.log("Prezzo", price);
        priceSpan.innerHTML = price.toFixed(2);
        // fine codice JS da eseguire quando clicco sul pulsante
    }

});