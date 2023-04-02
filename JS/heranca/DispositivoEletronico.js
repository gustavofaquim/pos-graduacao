class DispositivoEletronico{

    constructor(nome){
        this.nome = nome
        this.ligado = false
    }

    ligar(){
        this.ligado ? console.log("Já está ligado") : this.ligado = true 
    }
}

class Phone extends DispositivoEletronico{
    constructor(nome,cor,modelo){
        super(nome)
        this.cor = cor
        this.modelo = modelo
    }
}

let s1 = new Phone('Smasung', 'Preto', 'A71')
console.log(s1)
s1.ligar();
s1.ligar();
