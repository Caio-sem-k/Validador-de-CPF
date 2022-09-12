function validaCPF(){
    var cpf = document.getElementById('cpf').value,
        cpfnumber = cpf.replace(".",'').replace(".", '').replace("-", ''),
        noveprimeirosnumeros = cpfnumber.substr(0, 9),
        dezprimeironumeros = cpfnumber.substr(0, 10),
        soma1 = 0,
        soma2 = 0,
        multiplicador = 10

    for (var i = 0; i < noveprimeirosnumeros.length; i++) {
        var numero = noveprimeirosnumeros.substr(i, 1);
        soma1 += numero * multiplicador
        multiplicador --;
    }

    multiplicador = 11;

    for (var i = 0; i < dezprimeironumeros.length; i++) {
        var numero = dezprimeironumeros.substr(i, 1);
        soma2 += numero * multiplicador
        multiplicador --;
    }

    var resultadodomodulo1 = (soma1 * 10) % 11;
    var resultadodomodulo2 = (soma2 * 10) % 11;

    if ((resultadodomodulo1.toString() + resultadodomodulo2.toString() )=== cpfnumber.substr(9, 2)) {
        alert('valido');
    } 
    else {
        alert('invalido')
    }
}