export class Contact{
    _id:string;
    firstName:string;
    lastName:string;
    email:string;
    phone?:string;
    created_date:any;

    constructor(){
        this._id = '';
        this.firstName = '';
        this.lastName = '';
        this.email = '';
        this.phone = '';
        this.created_date='';
    }
}