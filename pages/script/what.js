$(function(){
	let numeroAleatorio = numeroAleatorioEntre(0,9);

	var palavra = getPalavraAletoria();
	var qntAcertos = 0;
	var qntPalavrasPuladas = 0;

	preencherDadosPalavras(palavra);
	
	$('#pular-palavra').click(function(){		
		qntPalavraUsadas = parseInt(getQntPalavrasUtilizadas());
		console.log(qntPalavraUsadas);
		if(qntPalavraUsadas < 9){
			palavra = getPalavraAletoria();				
			preencherDadosPalavras(palavra);
			qntPalavrasPuladas++;	
			$('#qnt-pontuacao').text(calcPontuacao());
		}else{
			$.notify('Pronto');
		}
	})

	$('#limpar-texto').click(function(){
		$('#respota-texto').val(' ');		
	});

	$('#resposta-texto').click(function(){
		let palavraDigitada = $('#respota-texto').val();
		palavraDigitada = palavraDigitada.trim();
		let qntPalavraUsadas = getQntPalavrasUtilizadas();
		if(qntPalavraUsadas <= 10){
			if(palavra[0] == palavraDigitada){
				$.notify("Certo", "success");
				palavra.splice(0,palavra.length);
				palavra = getPalavraAletoria();
				preencherDadosPalavras(palavra);
				qntAcertos++;
				$('#qnt-acertos').text(qntAcertos);
				$('#respota-texto').val(' ');
				$('#qnt-pontuacao').text(calcPontuacao());
			}else{
				$.notify('Palavra errada', 'error');
			}
		}else{
			$.notify('erro2');
		}	
	});

	function calcPontuacao(){	
		let qntAcertos_ = qntAcertos;
		var pontuação = qntAcertos_*10 - (qntPalavrasPuladas*2);
		return pontuação;
	}
})


	const PalavraUm = ['hogwarts','Escola de magia da série "Harry Potter"', 'war-ts-hog'];
	const PalavraDois = ['bolseiro','Sobrenome de um personagem da trilogia de "O Hobbit"', 'ro-bol-sei'];
	const PalavraTres = ['gandalf', 'Mago icônico do universo de "O Senhor dos Anéis"', 'dalf-gan'];
	const PalavraQuatro = ['barcelona', 'Clube de futebol famoso da Espanha', 'lo-na-ce-bar'];
	const PalavraCinco = ['maradona', 'Jogador de futebol argentino, considerado um dos melhores da história', 'ra-ma-do-na'];
	const PalavraSeis = ['python', 'Linguagem de programação popular para ciência de dados', 'thon-py'];
	const PalavraSete = ['javascript', 'Linguagem fundamental para desenvolvimento web', 't-va-scrip-ja'];
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
		for (var i = 0; i < 10; i++) {
			numeroSelecionado = numeroAleatorioEntre(0,10);
			if(!numerosUtilizados.includes(numeroSelecionado)){
				numerosUtilizados.push(numeroSelecionado);		
				return palavrasCombinadas[numeroSelecionado];
			}
		}
};

function preencherDadosPalavras(palavra_){
	$('#palavra-embaralhada').text(palavra_[2]);
	$('#dica-palavra').text(palavra_[1]);
}

function getQntPalavrasUtilizadas(){
	return numerosUtilizados.length;
}







