class Product {
    public name: string;
    private price: number | undefined;
    readonly category: string;
    readonly tags: string[];

    constructor(name: string, category: string, price ?: number){
        this.name = name;
        this.category = category;
        this.price = price;
        this.tags = ["electronics", "mobile"];
    }

    display() : void {
        console.log("product name is ", this.name, "and price is ", this.price);
    }

    setPrice(p: number) : void {
        if(p <= 0) return;
        this.price = p;
    }


    
}

const p1 = new Product("Iphone", "Electronics", 10000);

p1.setPrice(-20);
console.log(p1);