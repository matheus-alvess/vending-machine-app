# Vending Machine

Este é um projeto de uma Máquina de Vendas que contabiliza e valida seu troco devolvendo em moedas classificadas.

### Pré Requisitos

Para rodar a aplicação você precisa ter instalado em sua máquina o node-v8 (caso não tenha clique [aqui](https://nodejs.org) ou superior. E também o gerenciador de pacotes do node, NPM ou Yarn.

## Começando

Para rodar a aplicação pela primeira vez é necessário rodar algum dos seguintes comandos:

```
yarn ou npm install
```

Depois disso, abra o arquivo index.js e modique os parâmetros da chamada do função, por exemplo:

```
console.log(Index.calculateChange(6.5, [1, 20, 30, 40, 10, 6]));
```

Onde cada parâmetro em sua order corresponde a:

```
6.5 -> troco.
1 -> quantidade de moedas de 1 centavos disponíveis.
20 -> quantidade de moedas de 5 centavos disponíveis.
30 -> quantidade de moedas de 10 centavos disponíveis.
40 -> quantidade de moedas de 25 centavos disponíveis.
10 -> quantidade de moedas de 50 centavos disponíveis.
6 -> quantidade de moedas de 1 real disponíveis.

```

Execute algum dos seguintes comandos:

```
yarn start ou npm run start
```

## Resultado

Ao executar a função respeitando as regras acima você deve receber o seguinte resultado.

Um array com os valores:

```
[ 0, 0, 0, 0, 1, 6 ]
```

Onde cada valor corresponde à:

```
[
  0, => quantidade de moedas de 1 centavo.
  0, => quantidade de moedas de 5 centavos.
  0, => quantidade de moedas de 10 centavos.
  0, => quantidade de moedas de 25 centavos.
  1, => quantidade de moedas de 50 centavos.
  6  => quantidade de moedas de 1 real.
]
```

## Rodando os Testes

Para rodar os tests é muito simples, basta rodar algum dos seguintes comandos:

```

yarn test ou npm run test

```
