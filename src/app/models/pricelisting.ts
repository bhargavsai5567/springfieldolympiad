export default class PriceList{
 
    id:string;
    price:number;
    op:number;
    data:string;
    constructor(id:string,price:number,op:number,data:string)
    {
       
        this.id=id;
        this.price=price;
        this.op=op;
        this.data=data;
    }
}