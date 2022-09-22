import Address from "./address";

export default class Customer {

    private _id: string;
    private _name: string = "";
    private _address!: Address;
    private _active: boolean = true;

    constructor(id: string, name: string) {
        this._id = id;
        this.validate();
    }

    validate(): void {
        if (this._id.length === 0) {
            throw new Error("Customer ID is required");
        }
        if (this._name.length === 0) {
            throw new Error("Customer name is required");
        }
    }

    changeName(name: string) {
        this._name = name;
        this.validate();
    }
    
    activate() {
        this._active = true;
    }

    deactivate() {
        this._active = false;
    }
    
}