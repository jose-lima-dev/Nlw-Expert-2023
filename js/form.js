import { JSDOM } from 'jsdom';

// Crie uma instância do objeto JSDOM
const dom = new JSDOM('<!DOCTYPE html><html><body><div id="quiz"></div></body></html>');

// Acesse o documento simulado
const document = dom.window.document;

// Acesse o elemento "quiz"
const quiz = document.getElementById('quiz');

// Perguntas
const perguntas = [
    {
        pergunta: "Qual é a maneira correta de declarar uma variável em JavaScript?",
        respostas: [
            "var x;",
            "variable x;",
            "v x;",
        ],
        correta: 0
    },
    {
        pergunta: "Qual é o operador de comparação estrita em JavaScript?",
        respostas: [
            "==",
            "===",
            "!=",
        ],
        correta: 1
    },
    {
        pergunta: "Qual é o método utilizado para converter uma string em um número inteiro em JavaScript?",
        respostas: [
            "parseInt()",
            "stringToInt()",
            "toInteger()",
        ],
        correta: 0
    },
    {
        pergunta: "Qual função é usada para exibir uma caixa de diálogo com uma mensagem em JavaScript?",
        respostas: [
            "prompt()",
            "alert()",
            "confirm()",
        ],
        correta: 1
    },
    {
        pergunta: "Qual método é usado para remover o último elemento de um array em JavaScript?",
        respostas: [
            "pop()",
            "shift()",
            "slice()",
        ],
        correta: 0
    },
    {
        pergunta: "Qual é a maneira correta de escrever um comentário de linha única em JavaScript?",
        respostas: [
            "// Este é um comentário",
            "' Este é um comentário",
            "# Este é um comentário",
        ],
        correta: 0
    },
    {
        pergunta: "Qual é a saída do seguinte código: console.log(typeof 'Hello World');",
        respostas: [
            "number",
            "string",
            "undefined",
        ],
        correta: 1
    },
    {
        pergunta: "Qual é a função do operador '===' em JavaScript?",
        respostas: [
            "Comparação estrita",
            "Atribuição",
            "Comparação não estrita",
        ],
        correta: 0
    },
    {
        pergunta: "Qual método JavaScript é usado para remover os espaços em branco no início e no final de uma string?",
        respostas: [
            "trim()",
            "strip()",
            "clean()",
        ],
        correta: 0
    },
    {
        pergunta: "Qual é o resultado da expressão 5 + '3' em JavaScript?",
        respostas: [
            "53",
            "8",
            "Error",
        ],
        correta: 0
    },
];

// Itere sobre as perguntas e adicione-as ao quiz
for (const item of perguntas) {
    // Crie um elemento de pergunta
    const perguntaElement = document.createElement('div')
    perguntaElement.textContent = item.pergunta;
    // Adicione o elemento de pergunta ao quiz
    quiz.appendChild(perguntaElement);

    // Itere sobre as respostas e adicione-as ao quiz
    for(let resposta of item.respostas) {
        const respostaElement = document.createElement('div');
        respostaElement.textContent = resposta;
        quiz.appendChild(respostaElement);
    }
}

// Saída do HTML renderizado
console.log(dom.serialize());
