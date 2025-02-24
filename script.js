function calcularINSS(salario) {
    if (salario <= 1412) return salario * 0.075;
    if (salario <= 2666.68) return salario * 0.09 - 21.18;
    if (salario <= 4000.03) return salario * 0.12 - 101.18;
    if (salario <= 7786.02) return salario * 0.14 - 181.18;
    return 908.86;
}

function calcularIR() {
    let salario = parseFloat(document.getElementById("salario").value) || 0;
    let dependentes = parseInt(document.getElementById("dependentes").value) || 0;
    let outrosDescontos = parseFloat(document.getElementById("outrosDescontos").value) || 0;
    let aplicarDesconto = document.getElementById("descontoSimplificado").checked;
    let calcularINSSCheck = document.getElementById("calcularINSS").checked;
    
    let inss = calcularINSSCheck ? calcularINSS(salario) : 0;
    let descontoDependentes = dependentes * 189.59;
    let baseCalculo = salario - inss - descontoDependentes - outrosDescontos;
    
    if (aplicarDesconto) baseCalculo *= 0.8;
    
    let imposto = 0;
    if (baseCalculo > 4664.68) {
        imposto = baseCalculo * 0.275 - 884.96;
    } else if (baseCalculo > 3751.05) {
        imposto = baseCalculo * 0.225 - 636.13;
    } else if (baseCalculo > 2826.65) {
        imposto = baseCalculo * 0.15 - 354.80;
    } else if (baseCalculo > 2112) {
        imposto = baseCalculo * 0.075 - 158.40;
    }
    
    let salarioLiquido = salario - imposto - inss - outrosDescontos;
    
    document.getElementById("resultado").innerHTML = `
        <strong>Base de Cálculo:</strong> R$ ${baseCalculo.toFixed(2)}<br>
        <strong>Imposto Devido:</strong> R$ ${imposto.toFixed(2)}<br>
        <strong>Salário Líquido:</strong> R$ ${salarioLiquido.toFixed(2)}`;
}