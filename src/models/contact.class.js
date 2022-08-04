export class Contacto {
    first_name = '';
    last_name = '';
    email = '';
    conect = false;

    constructor(first_name, last_name, email, conect){
        this.first_name = first_name;
        this.last_name = last_name;
        this.email = email;
        this.conect = conect
    }
}