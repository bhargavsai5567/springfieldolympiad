
export default class Address{
    Name:string="";
    Description:string;
    BranchType:string;
    DeliveryStatus:string;
    Circle:string;
    District:string;
    Division:string;
    Region:string;
    State:string;
    Country:string;
    constructor( Name:string,Description:string,BranchType:string,DeliveryStatus:string,Circle:string,District:string,Division:string,Region:string,
                                State:string,Country:string)
    {
        this.Name=Name;
        this.Description=Description;
        this.BranchType=BranchType;
        this.DeliveryStatus=DeliveryStatus;
        this.Circle=Circle;
        this.District=District;
        this.Division=Division;
        this.Region=Region;
        this.State=State;
        this.Country=Country;
    }
   
}