module.exports = () => {
    const controller = {};

    // Simula um valor de Passagem Aérea
    let valorMin = 200;
    let valorMax = 5000;
    let valor = Number((Math.random() * (valorMax - valorMin) + valorMin).toFixed(2));

    // Simula um id ded Cidade
    let id_cidade = Math.random().toString(36).replace('0.', '');

    // Forma o Json a ser retornado na requisição
    let jsonRetorno = 
    {
        id_cidade: id_cidade,
        valor: valor
    };

    controller.listarPassagensAereas = (req, res) => res.status(200).json(jsonRetorno);

    return controller;
}

