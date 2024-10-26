//1. Crie uma função que receba o nome de uma pessoa como argumento e retorne uma saudação personalizada. Em seguida, chame a função e exiba a saudação no console.

//2. Crie uma função que receba a idade de uma pessoa e retorne se ela é maior de idade (idade >= 18). Imprima o resultado no console.

//3. Crie uma função que receba uma string e verifique se é um palíndromo (uma palavra que é lida da mesma forma de trás para frente) utilizando o método de string reverse(). Retorne true se for um palíndromo e false caso contrário. Imprima o resultado no console.

//4. Crie uma função que receba três números como parâmetros e determine qual é o maior entre eles. Utilize estruturas condicionais (if, else) para comparar os valores e determinar o maior. Imprima o maior valor no console.

//5.  Crie uma arrow function chamada calculaPotencia que receba dois parâmetros: a base e o expoente. A função deve calcular a potência da base elevada ao expoente e retornar o resultado.

//ATIVIDADE 01
// const saudacao = (nome) => `Olá ${nome} seja bem-vindo`;
// console.log(saudacao('caio'));

//ATIVIDADE 02
// const maiorIdade = (idade) =>{
//     if (idade >= 18){
//         return 'Você é maior de idade.';
//     }else{
//         return 'Você é menor de idade';
//     }
// }

// console.log(maiorIdade(15));
// console.log(maiorIdade(18));
// console.log(maiorIdade(20));

//ATIVIDADE 03
// const palavraPalindromo = (palavra) => {
//     if (palavra.toUpperCase() === palavra.toUpperCase().split("").reverse("").join("")){
//         return `A palavra ${palavra} é um palindromo`;
//     }else{
//         return `A palavra ${palavra} não é um palindromo`;
//     }
// }

// console.log(palavraPalindromo('Ana'));

//ATIVIDADE 04
// const maiorNumero = (valor1, valor2, valor3) => {
//     if(valor1 > valor2 && valor1 > valor3){
//         return `O valor maior é ${valor1}`;
//     }else if (valor2 > valor1 && valor2 > valor3){
//         return `O valor maior é ${valor2}`;
//     }else{
//         return `O valor maior é ${valor3}`;
//     }
// }

// console.log(maiorNumero(4, 5, 3));

//ATIVIDADE 05
// const calculaPotencia = (base, expoente) => base**expoente;

// console.log(calculaPotencia(2, 3));



