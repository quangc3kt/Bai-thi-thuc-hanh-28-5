class PhoneManager{
    listPhone;
    name;
    constructor(nameInput) {

        this.name = nameInput;
        this.listPhone = [];
        let sp1 = new Phone('PC3', 'iPhone 15', 'Apple','2200$');
        this.listPhone.push(sp1);

    }
    add(newProduct){
        this.listPhone.push(newProduct);
    }
}