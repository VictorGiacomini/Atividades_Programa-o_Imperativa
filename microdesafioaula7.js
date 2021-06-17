let andar = () => console.log("O carro está andando");
let parar = () => console.log("O carro parou");
let statusCarro = (situacao) => situacao();

statusCarro(andar);
statusCarro(parar);
