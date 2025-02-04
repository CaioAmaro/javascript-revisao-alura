// 1. Crie variáveis que armazenem o valor do saldo, de depósito e de um saque de uma conta bancária, depois realize operações de adição e subtração entre eles utilizando uma variável chamada operacao, considerando a função de cada variável criada anteriormente. Exiba os resultados finais no console.

// 2. Crie uma variável numérica com um valor. Utilize um operador ternário para verificar se esse valor é par ou ímpar. Exiba o resultado no console.

// 3. Considere uma situação em que você está verificando se um usuário está logado e tem permissão de administrador para acessar determinada funcionalidade. Utilize variáveis booleanas para simular essas condições e use o operador AND para verificar se ambas são verdadeiras.

// 4. Declare duas variáveis booleanas e use o operador OR para verificar se pelo menos uma delas é verdadeira. Exiba o resultado no console.

// 5. Imagine um sistema que determina se um usuário tem idade suficiente para comprar o ingresso para um show. Declare duas variáveis que determinem a idade mínima e qual a idade do usuário e utilize estruturas condicionais (if, else) para determinar se o usuário pode realizar a compra.

//ATIVIDADE 01
// let saldo = 100;
// const saque = 50;
// const deposito = 200;

// let operacao = saldo - saque;
// saldo = operacao;
// console.log(saldo);

// operacao = saldo + deposito;
// saldo = operacao;
// console.log(saldo);

//ATIVIDADE 02
// let valor = 4;
// let sinal = valor%2 == 0 ? "Valor é par": "Valor é Impa";
// console.log(sinal);

//ATIVIDADE 03
// const logado = true;
// const permisaoAdm = true;

// if (logado === true && permisaoAdm === true){
//     console.log('Seja bem-vindo ao painel do ADM!');
// }else{
//     console.log('Acesso Negado: Você não está logado ou não tem permissão para acessar.');
// }

//ATIVIDADE 04
// let valor1 = false;
// let valor2 = false;

// if (valor1 || valor2){
//     console.log('Pelo menos 1 das váriaveis é verdadeira.');
// }else{
//     console.log('Nenhuma das váriaveis são verdadeiras');
// }

//ATIVIDADE 05
// const idadeMinima = 15;
// const idadeUser = 14;

// if (idadeUser >= idadeMinima){
//     console.log('Compra realizada com sucesso!');
// }else{
//     console.log(`Você tem ${idadeUser} anos, não pode comprar (Idade minima: ${idadeMinima})`);
// }
