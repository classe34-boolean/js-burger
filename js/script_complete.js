// salviamo in una variabile il nostro bottone
var btn = document.getElementById('button');
console.log(btn);

// salviamo in una variabile i nostri add
var add = document.getElementsByClassName('ingredient-add');
console.log(add);

for (var i = 0; i < add.length; i++) {
  const thisAdd = add[i];
  thisAdd.addEventListener('click',
    function () {
      console.log(thisAdd.previousElementSibling);
      
      thisAdd.previousElementSibling.checked = !thisAdd.previousElementSibling.checked;
    }
  );
}

//rimaniamo in ascolto di un evento click su quel bottone
btn.addEventListener('click',
  function () {
    //quando il bottone viene cliccato sara avviato questo codice

    // prendiamo il valore dell'input nome
    var name = document.getElementById('name').value;
    console.log(name);
    
    //se non abbiamo un nome non possiamo procedere
    if (name.length === 0) {
      alert('non hai inserito un nome');
    } else {
      // prendiamo il valore dai checkboxes
      var checkboxes = document.getElementsByClassName('ingredient-checkbox');
      console.log(checkboxes);

      //prendiamo i singoli valori e sommiamoli al prezzo base
      var sum = 50;
      for (var i = 0; i < checkboxes.length; i++) {
        var thisCheckbox = checkboxes[i];
        console.log(thisCheckbox.checked);

        if (thisCheckbox.checked) {
          sum += parseInt(thisCheckbox.value);
        }
      }

      console.log(sum);

      // prendiamo il valore del coupon
      var coupon = document.getElementById('coupon').value;
      var coupons = [
        '123456ABCDEF',
        '59478HUIDDIK',
        '86921UTVDNIO',
      ];

      //controlliamo che sia un codice valido
      if (coupons.includes(coupon)) {
        console.log('coupon valido');
        // applichiamo 20% di sconto
        sum = sum - (sum / 100 * 20);
      }

      //stampiamo il prezzo
      var elPrice = document.getElementById('price');
      elPrice.innerHTML = sum;
    }

  }
);