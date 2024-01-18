import Address from "./api";
export default class Addre{
    Message:string;
    PostOffice:Address[];
    Status:string;
    constructor(Message:string,PostOffice:Address[],Status:string)
    {
        this.Message=Message;
        this.PostOffice=PostOffice;
        this.Status=Status;
    }
}