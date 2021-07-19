
module.exports =  () =>  {
    
    // Simula um valor de Passagem Aérea
    let valorMin = 200;
    let valorMax = 5000;

    const controller = {};
    controller.listarPassagensAereas = async (req, res) => res.status(200).json( Number((Math.random() * (valorMax - valorMin) + valorMin).toFixed(2)) );

    return controller;
}

