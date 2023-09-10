
class Bulka{
    constructor(name,size,ingridients) {
        this.name=name;
        this.size=size;
        this.ingridients=[`cutlet`,`salad`, `tomato`];
        this.setAdditionalIngridients=function(...addIngridients) {
            return this.ingridients.push(...addIngridients);
        }
    }
}

let Humburger=new Bulka(`humburger`, `small`, `ingridients`);

Humburger.setAdditionalIngridients( `mushroom`, `avocado`);
console.log(Humburger);

let Cheeseburger=new Bulka(`cheeseburger`, `big`,);
Cheeseburger.setAdditionalIngridients(`onion`, `black pepper`);
console.log(Cheeseburger);