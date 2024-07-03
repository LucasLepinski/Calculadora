
const prompt = require('prompt-sync')();


function exibirMenu() {
    console.log(`
        
    ()()
    (-.-)
    (    > Menu
  o_(")(")

    1. Adição
    2. Subtração                   
    3. Multiplicação                
    4. Divisão                     
    5. Porcentagem                  
    6. Sair
    `);

    const opcao = prompt('Escolha uma opção: ');

    switch (opcao) {
        case "1":
            calculoSoma();
            break;
        case "2":
            calculoSubtracao();
            break;
        case "3":
            calculoMultiplicacao();
            break;
        case "4":
            calculoDivisao();
            break;
        case "5":
            calculoPorcentagem();
            break;
        
            console.log("Opção inválida, tente novamente.");
            exibirMenu(); 
            return;
    }
}


function calculoSoma() {
    const num1 = parseFloat(prompt('Digite o primeiro número: '));
    const num2 = parseFloat(prompt('Digite o segundo para somar: '));
    const resultado = num1 + num2;
    console.log(`Resultado: ${resultado}`);
    exibirMenu(); // Volta ao menu principal
}


function calculoSubtracao() {
    const num1 = parseFloat(prompt('Digite o primeiro número: '));
    const num2 = parseFloat(prompt('Digite o segundo para subtrair: '));
    const resultado = num1 - num2;
    console.log(`Resultado: ${resultado}`);
    exibirMenu(); 
}


function calculoMultiplicacao() {
    const num1 = parseFloat(prompt('Digite o primeiro número: '));
    const num2 = parseFloat(prompt('Digite o segundo para multiplicar: '));
    const resultado = num1 * num2;
    console.log(` Resultado: ${resultado} `);
    exibirMenu(); 
}


function calculoDivisao() {
    const num1 = parseFloat(prompt('Digite o primeiro número: '));
    const num2 = parseFloat(prompt('Digite o segundo número para dividir: '));

    if (num2 === 0) {
        console.log("Não é possível dividir por zero.");
        exibirMenu(); 
    } else {
        const resultado = num1 / num2;
        console.log(`Resultado: ${resultado}`);
        exibirMenu(); 
    }
}


function calculoPorcentagem() {
    const num = parseFloat(prompt('Digite o número: '));
    const percentual = parseFloat(prompt('Digite a porcentagem: '));

    const resultado = (num * percentual) / 100;
    console.log(`Resultado: ${resultado}`);
    exibirMenu(); 
}


exibirMenu(); 
