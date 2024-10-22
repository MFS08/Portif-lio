var vida = 100;
var inventario = {
    empatia: 0,
    itens: []
};
var checkpoints = [];
var faseAtual = 0;

function copiarInventario(original) {
    return {
        empatia: original.empatia,
        itens: original.itens.slice()
    };
}

function explorar() {
    alert("Você está explorando o mundo...");
    var tipo = prompt("Você encontrou algo. Era um item de empatia ou um desafio? (item/desafio)");

    if (tipo === 'item') {
        alert("Você encontrou um item de empatia!");
        inventario.empatia += 10;
    } else if (tipo === 'desafio') {
        alert("Você encontrou um desafio!");
        enfrentarDesafio();
    } else {
        alert("Tipo de encontro não reconhecido.");
    }
}

function coletarItem(item) {
    alert("Você coletou um item: " + item);
    inventario.itens.push(item);
}

function interagirComNPC() {
    alert("Você está conversando com um NPC.");
    var acao = prompt("O que você quer fazer? (ajuda/desafio)");

    if (acao === 'ajuda') {
        alert("O NPC oferece ajuda.");
        inventario.empatia += 5;
    } else if (acao === 'desafio') {
        alert("O NPC apresenta um desafio.");
        enfrentarDesafio();
    } else {
        alert("Ação não reconhecida.");
    }
}

function enfrentarDesafio() {
    alert("Você está enfrentando um desafio...");
    let numero = Math.random() ;
    console.log("hahahahah");
    console.log(numero);
    if (numero > 0.5) {
        alert("Você superou o desafio!");
        vida += 10;
    }
    else if (numero < 0.5){
        alert("Você perdeu o desafio!");
        vida -= 10;
    }
    else {
        alert("Empatou!!")
    }

}


function salvarCheckpoint() {
    checkpoints.push({
        vida: vida,
        inventario: copiarInventario(inventario)
    });
    alert("Checkpoint salvo!");
}

function carregarCheckpoint() {
    var indice = prompt("Qual checkpoint você deseja carregar? (Digite o número do checkpoint)");

    indice = Number(indice);

    if (indice >= 0 && indice < checkpoints.length) {
        var checkpoint = checkpoints[indice];
        vida = checkpoint.vida;
        inventario = copiarInventario(checkpoint.inventario);
        alert("Checkpoint carregado!");
    } else {
        alert("Checkpoint inválido.");
    }
}

function jogo() {
    alert("Bem-vindo ao jogo de Amir Rezanejad Hassanjani!");

    var historia = [
        { data: '8 de março de 2005', local: 'Teerã, Irã', texto: 'Hoje competi em minha primeira prova oficial de canoagem. Foi uma experiência emocionante, com a adrenalina correndo em minhas veias.' },
        { data: '21 de agosto de 2010', local: 'Teerã, Irã', texto: 'Tive uma conversa profunda com minha família. Eles estão preocupados com o meu futuro, principalmente porque decidi me dedicar ao slalom.' },
        { data: '14 de setembro de 2011', local: 'Teerã, Irã', texto: 'Minha primeira competição de slalom foi um verdadeiro desafio. O curso de obstáculos parecia impossível, mas eu estava determinado a conquistar cada porta e correnteza.' },
        { data: '3 de abril de 2015', local: 'Teerã, Irã', texto: 'Recebi o convite para treinar com a equipe nacional de slalom. O treino foi intenso e exigiu o máximo de mim, mas as palavras de incentivo do meu treinador e colegas foram o combustível que me manteve em movimento.' },
        { data: '18 de novembro de 2018', local: 'Teerã, Irã', texto: 'Conquistei uma medalha de bronze na competição internacional de slalom. A experiência me fez acreditar que, com o esforço contínuo, poderia alcançar meus maiores sonhos.' },
        { data: '12 de janeiro de 2021', local: 'Istambul, Turquia', texto: 'Finalmente deixei o Irã e cheguei à Turquia. A travessia foi difícil e o processo de deixar tudo para trás foi doloroso.' },
        { data: '25 de março de 2021', local: 'Augsburg, Alemanha', texto: 'Encontrei um clube de canoagem que me acolheu de braços abertos. O clube se tornou minha nova família, oferecendo não só treinamento, mas também um lar longe de casa.' },
        { data: '7 de julho de 2021', local: 'Augsburg, Alemanha', texto: 'Participei do meu primeiro treinamento com a equipe do clube em Augsburg. Cada dia é um desafio, mas também uma oportunidade de me aproximar dos meus objetivos.' },
        { data: '14 de fevereiro de 2024', local: 'Paris, França', texto: 'Fui selecionado para a Equipe Olímpica de Refugiados. É uma sensação indescritível poder competir em Paris, mesmo sem representar oficialmente meu país natal.' },
        { data: '28 de julho de 2024', local: 'Paris, França', texto: 'Hoje foi o dia da minha estreia olímpica. O percurso foi desafiante, e a pressão estava alta, mas a emoção de estar aqui superou todas as minhas ansiedades.' },
        { data: '4 de agosto de 2024', local: 'Paris, França', texto: 'A cerimônia de encerramento das Olimpíadas foi uma celebração de todos os desafios que enfrentei. Foi uma afirmação de que o espírito humano pode superar qualquer obstáculo.' }
    ];

    while (vida > 0 && faseAtual < historia.length) {
        var fase = historia[faseAtual];
        alert("Data: " + fase.data + "\nLocal: " + fase.local + "\n" + fase.texto);
        
        var comando = prompt("Escolha uma ação:\n explorar,\n coletar,\n interagir,\n salvar,\n carregar,\n continuar");
        
        switch (comando) {
            case 'explorar':
                explorar();
                break;
            case 'coletar':
                var item = prompt("Qual item você deseja coletar?");
                coletarItem(item);
                break;
            case 'interagir':
                interagirComNPC();
                break;
            case 'salvar':
                salvarCheckpoint();
                break;
            case 'carregar':
                carregarCheckpoint();
                break;
            case 'continuar':
                faseAtual++;
                break;
            default:
                alert("Comando não reconhecido.");
        }
        
        alert("Vida: " + vida + "\nEmpatia: " + inventario.empatia);
    }

    if (vida <= 0) {
        alert("O jogo terminou. Sua vida chegou a zero.");
    } else {
        alert("Parabéns, você completou a história de Amir Rezanejad Hassanjani!");
    }
}

jogo();