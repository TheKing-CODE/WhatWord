$(function(){
	let numeroAleatorio = numeroAleatorioEntre(0,9);

	var palavra = getPalavraAletoria();
	var qntAcertos = 0;

	preencherDadosPalavras(palavra);
	
	$('#pular-palavra').click(function(){
		palavra = getPalavraAletoria();
		if(palavra == undefined){
			
		}
		preencherDadosPalavras(palavra);
	})

	$('#limpar-texto').click(function(){
		$('#respota-texto').val(' ');		
	});

	$('#resposta-texto').click(function(){
		let palavraDigitada = $('#respota-texto').val();
		if(palavra[0] == palavraDigitada){
			$.notify("Certo", "success");
			palavra = getPalavraAletoria();
			preencherDadosPalavras(palavra);
			qntAcertos++;
			$('#qnt-acertos').text(qntAcertos);
			$('#respota-texto').val(' ')
		}else{
			return false;
		}		
	});
})


	const PalavraUm = ['hogwarts','Escola de magia da série "Harry Potter"', 'war-ts-hog'];
	const PalavraDois = ['bolseiro','Sobrenome de um personagem da trilogia de "O Hobbit"', 'ro-bol-sei'];
	const PalavraTres = ['gandalf', 'Mago icônico do universo de "O Senhor dos Anéis"', 'dalf-gan'];
	const PalavraQuatro = ['barcelona', 'Clube de futebol famoso da Espanha', 'lo-na-ce-bar'];
	const PalavraCinco = ['maradona', 'Jogador de futebol argentino, considerado um dos melhores da história', 'ra-ma-do-na'];
	const PalavraSeis = ['python', 'Linguagem de programação popular para ciência de dados', 'thon-py'];
	const PalavraSete = ['javaScript', 'Linguagem fundamental para desenvolvimento web', 't-va-scrip-ja'];
	const PalavraOito = ['sonic', 'Personagem famoso de jogos de vídeo game, conhecido como "Sonic the Hedgehog"', 'nic-so'];
	const PalavraNove = ['daenerys', 'Personagem central da série "Game of Thrones"', 'ne-e-da-rys'];
	const PalavraDez = ['neymar', 'Atacante brasileiro destacado no futebol mundial', 'mar-ney'];

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
	if(numerosUtilizados.length() > 9){
		return undefined;
	}else{
		for (var i = 0; i < 10; i++) {
			numeroSelecionado = numeroAleatorioEntre(0,9);
			if(!numerosUtilizados.includes(numeroSelecionado)){
				numerosUtilizados.push(numeroSelecionado);		
				return palavrasCombinadas[numeroSelecionado];
			}
		}
	}
};

function preencherDadosPalavras(palavra_){
	$('#palavra-embaralhada').text(palavra_[2]);
	$('#dica-palavra').text(palavra_[1]);
}






