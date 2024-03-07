const perguntas = [
    {
        pergunta: "Qual líder liderou a Revolução Russa de 1917?",
        resposta: [
            "Vladimir Lenin",
            "Joseph Stalin",
            "Leon Trotsky"
        ],
        correta: Math.floor(Math.random() * 3)
    },
    {
        pergunta: "O que causou a entrada dos Estados Unidos na Segunda Guerra Mundial?",
        resposta: [
            "O ataque japonês a Pearl Harbor",
            "A invasão da Polônia pela Alemanha",
            "O bombardeio de Londres pela Luftwaffe"
        ],
        correta: Math.floor(Math.random() * 3)
    },
    {
        pergunta: "Quem foi o primeiro presidente dos Estados Unidos?",
        resposta: [
            "George Washington",
            "Thomas Jefferson",
            "Abraham Lincoln"
        ],
        correta: Math.floor(Math.random() * 3)
    },
    {
        pergunta: "Qual evento marcou o início da Primeira Guerra Mundial?",
        resposta: [
            "O assassinato do Arquiduque Franz Ferdinand",
            "A invasão da Polônia pela Alemanha",
            "A queda do Império Austro-Húngaro"
        ],
        correta: Math.floor(Math.random() * 3)
    },
    {
        pergunta: "Quem liderou o movimento pelos direitos civis nos Estados Unidos na década de 1960?",
        resposta: [
            "Martin Luther King Jr.",
            "Malcolm X",
            "Rosa Parks"
        ],
        correta: Math.floor(Math.random() * 3)
    },
    {
        pergunta: "Qual civilização antiga construiu as pirâmides de Gizé?",
        resposta: [
            "Egípcios",
            "Sumérios",
            "Gregos"
        ],
        correta: Math.floor(Math.random() * 3)
    },
    {
        pergunta: "Quem liderou a Revolução Cubana em 1959?",
        resposta: [
            "Fidel Castro",
            "Che Guevara",
            "Hugo Chávez"
        ],
        correta: Math.floor(Math.random() * 3)
    },
    {
        pergunta: "Qual foi o desfecho da Revolução Francesa?",
        resposta: [
            "A abolição da monarquia e o estabelecimento de uma república",
            "A restauração da monarquia absoluta",
            "A ascensão de Napoleão Bonaparte ao poder"
        ],
        correta: Math.floor(Math.random() * 3)
    },
    {
        pergunta: "Qual país foi o primeiro a lançar um satélite artificial ao espaço?",
        resposta: [
            "União Soviética",
            "Estados Unidos",
            "China"
        ],
        correta: Math.floor(Math.random() * 3)
    },
    {
        pergunta: "Quem foi o primeiro imperador romano?",
        resposta: [
            "César Augusto",
            "Júlio César",
            "Marco Aurélio"
        ],
        correta: Math.floor(Math.random() * 3)
    }
];


const quiz = document.querySelector('#quiz')
const template = document.querySelector('template')

const corretas = new Set()
const totalDePerguntas = perguntas.length
const mostrarTotal = document.querySelector('#acertos span')
mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas

// loop ou laço de repetição 
for (const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta

    for (let resposta of item.resposta) {
        const dt = quizItem.querySelector('dl dt').cloneNode(true)
        dt.querySelector('span').textContent = resposta
        dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
        dt.querySelector('input').value = item.resposta.indexOf(resposta)
        dt.querySelector('input').onchange = (event) => {
            const estaCorreta = event.target.value == item.correta

            corretas.delete(item)
            if (estaCorreta) {
                corretas.add(item)
            }
            mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
        }

        quizItem.querySelector('dl').appendChild(dt)
    }


    quizItem.querySelector('dl dt').remove()


    // colocar a pergunta na tela 
    quiz.appendChild(quizItem)
}






