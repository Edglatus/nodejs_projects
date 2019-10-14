class Person
{
    constructor(name, rg, cpf, sex, tel, cel, email)
    {
        this._name = name
        this._rg = rg
        this._cpf = cpf
        this._sex = sex
        this._tel = tel
        this._cel = cel
        this._email = email
    }

    get name()  { return this._name }

    get rg()    { return this._rg   }

    get cpf()   { return this._cpf  }

    get sex()   { return this._sex  }

    get tel()   { return this._tel  }
    set tel(tel)   { this._tel = tel }

    get cel()   { return this._cel  }
    set cel(cel)   { this._cel = cel }

    get email() { return this._email}
    set email(em) { this._email = em}
}

module.exports = Person;
