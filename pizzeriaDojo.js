function pizzaOven(tipoCorteza, tipoSalsa, quesos, salsas, carnes){
    var pizza = {};
    pizza.tipoCorteza = tipoCorteza;
    pizza.tipoSalsa = tipoSalsa;
    pizza.quesos = quesos;
    pizza.salsas = salsas;
    pizza.carnes = carnes;
    return pizza;
}

var p1 = pizzaOven("estilo Chicago", "tradicional", ["mozzarella"], ["pepperoni", "salchicha"], [""]);
console.log(p1);

var p2 = pizzaOven("lanzada a mano", "marinara", ["mozzarella", "feta"], ["champiñones", "aceitunas","cebollas"], [""]);
console.log(p2);

var p3 = pizzaOven("gruesa", "tradicional", ["gauda, estra queso"], ["tomate", "picante"], ["salame"]);
console.log(p3);

var p4 = pizzaOven("delgada", "tradicional", ["mozarella"], ["tomate", "picante"], ["salame", "jamon", "pepperoni"]);
console.log(p4);

    