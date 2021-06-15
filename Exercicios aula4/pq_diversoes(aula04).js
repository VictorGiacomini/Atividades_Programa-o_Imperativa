function podeSubir(altura, estaAcompanha){
let podeSubir = "";
    if (altura > 1.4 && altura < 2)  {
        podeSubir = "Acesso autorizado";
    }
    if (altura <1.4 && estaAcompanha == true){
        podeSubir ="Acesso autorizado somente acompanhado";
    }
    if (altura <1.20){
        podeSubir ="Acesso negado";
    }
    return podeSubir;
}

console.log(podeSubir(1.3, true));