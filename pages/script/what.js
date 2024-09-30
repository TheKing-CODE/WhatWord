$(function(){
	let numeroAleatorio = numeroAleatorioEntre(0,9);


	$('#limpar-texto').click(function(){
		$('#respota-texto').val(' ');
		//$('#respota-texto').attr('placeholder','Qual a palavra?');
	})
})


	const PalavraUm = ['Hogwarts','Escola de magia da série "Harry Potter"', 'war-ts-hog'];
	const PalavraDois = ['Bolseiro','Sobrenome de um personagem da trilogia de "O Hobbit"', 'ro-bol-sei'];
	const PalavraTres = ['Gandalf', 'Mago icônico do universo de "O Senhor dos Anéis"', 'dalf-gan'];
	const PalavraQuatro = ['Barcelona', 'Clube de futebol famoso da Espanha', 'lo-na-ce-bar'];
	const PalavraCinco = ['Maradona', 'Jogador de futebol argentino, considerado um dos melhores da história', 'ra-ma-do-na'];
	const PalavraSeis = ['Python', 'Linguagem de programação popular para ciência de dados', 'thon-py'];
	const PalavraSete = ['JavaScript', 'Linguagem fundamental para desenvolvimento web', 't-va-scrip-ja'];
	const PalavraOito = ['Sonic', 'Personagem famoso de jogos de vídeo game, conhecido como "Sonic the Hedgehog"', 'nic-so'];
	const PalavraNove = ['Daenerys', 'Personagem central da série "Game of Thrones"', 'ne-e-da-rys'];
	const PalavraDez = ['Neymar', 'Atacante brasileiro destacado no futebol mundial', 'mar-ney'];

	const palavrasCombinadas = [
	    PalavraUm,
	    PalavraDois,
	    PalavraTres,
	    PalavraQuatro,
	    PalavraCinco,
	    PalavraSeis,
	    PalavraSete,
	    PalavraOito,
	    PalavraNove,
	    PalavraDez
	];

	var numerosUtilizados = [];


function numeroAleatorioEntre(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
};

function getPalavraAletoria(){
	var numeroSelecionado;
	for (var i = 0; i < 10; i++) {
		numeroSelecionado = numeroAleatorioEntre(0,9);
		if(!numerosUtilizados.includes(numeroSelecionado)){
			numerosUtilizados.push(numeroSelecionado);		
			return palavrasCombinadas[numeroSelecionado];
		}
	}
};


/*Hogwarts: Escola de magia da série "Harry Potter".
Frodo: Protagonista da trilogia "O Senhor dos Anéis".
Gandalf: Mago icônico do mesmo universo de "O Senhor dos Anéis".
Barcelona: Clube de futebol famoso da Espanha, conhecido mundialmente.
Messi: Jogador de futebol considerado um dos melhores da história.
Python: Linguagem de programação popular, usada em diversas áreas, como ciência de dados.
JavaScript: Linguagem fundamental para desenvolvimento web e interatividade em sites.
Sonic: Personagem famoso de jogos de vídeo game, conhecido como "Sonic the Hedgehog".
Daenerys: Personagem central da série "Game of Thrones".
Neymar: Atacante brasileiro destacado no futebol mundial.*/




