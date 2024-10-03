$(function(){
	let numeroAleatorio = numeroAleatorioEntre(0,9);

	var palavra = getPalavraAletoria();
	var qntAcertos = 0;
	var qntPalavrasPuladas = 0;
	var qntPalavraUsadas = 0;
	var qntPalavrasErradas = 0;

	preencherDadosPalavras(palavra);
	qntPalavraUsadas++;

	//console.log('Qnt palavras usadas: ' + qntPalavraUsadas );
	
	$('#pular-palavra').click(function(){		
		qntPalavraUsadas = parseInt(getQntPalavrasUtilizadas());		
		if(qntPalavraUsadas < 9){
			palavra = getPalavraAletoria();				
			preencherDadosPalavras(palavra);
			qntPalavrasPuladas++;	
			qntPalavraUsadas++;
			$('#qnt-pontuacao').text(calcPontuacao());
			//console.log('Qnt palavras usadas: ' + qntPalavraUsadas );
		}else{
			mostraModalFinal();
		}

	})

	$('#limpar-texto').click(function(){
		$('#respota-texto').val(' ');		
	});

	$('#enviar-resposta').click(function(){
		let palavraDigitada = $('#respota-texto').val();
		palavraDigitada = palavraDigitada.trim();
		palavraDigitada = palavraDigitada.toLowerCase();
		

		if(qntPalavraUsadas == 10){
			if(palavraDigitada === palavra[0]){
				$.notify('Acertou!', 'success');
				qntAcertos++;	
				$('#qnt-acertos').text(qntAcertos);
				$('#qnt-pontuacao').text(calcPontuacao());
				mostraModalFinal();
			}else
			{
				$.notify('Errou', 'error');
				qntPalavrasErradas++;
				$('#qnt-pontuacao').text(calcPontuacao());
				mostraModalFinal();
			}	
		}else{
			if(palavraDigitada == palavra[0]){
				$.notify('Acertou!', 'success');
				$('#respota-texto').val(' ');
				qntAcertos++;
				$('#qnt-acertos').text(qntAcertos);
				$('#qnt-pontuacao').text(calcPontuacao());
				palavra = getPalavraAletoria();
				let palavra_ = palavra;
				preencherDadosPalavras(palavra_);
				qntPalavraUsadas++;
			}else{
				$.notify('Errou', 'error');
				$('#respota-texto').val(' ');
				qntPalavrasErradas++;
				$('#qnt-pontuacao').text(calcPontuacao());
				palavra = getPalavraAletoria();
				let palavra_ = palavra;
				preencherDadosPalavras(palavra_);
				qntPalavraUsadas++;
			}
		}
		//console.log('Qnt palavras usadas: ' + qntPalavraUsadas );
	});

	$('#respota-texto').on('keypress', function(e) {
        if (e.which === 13) { // 13 é o código da tecla Enter        
        	$('#enviar-resposta').click();    
        }
    });	

	function calcPontuacao(){	
		let qntAcertos_ = qntAcertos;
		var pontuação = qntAcertos_*10 - (qntPalavrasPuladas*2) - (qntPalavrasErradas*0.5);
		return pontuação;
	}

	function mostraModalFinal(){	
		$('#resultado-pontuacao').text(calcPontuacao());
		$('#resultado-qnt-acertos').text(qntAcertos);
		$('#modal-resultado').click();
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

function getPalavraAletoria() {
    let numeroSelecionado;
    do {
        numeroSelecionado = numeroAleatorioEntre(0, palavrasCombinadas.length);
    } while (numerosUtilizados.includes(numeroSelecionado) && numerosUtilizados.length < palavrasCombinadas.length);

    if (numerosUtilizados.length < palavrasCombinadas.length) {
        numerosUtilizados.push(numeroSelecionado);
        //console.log('Numero Utilizado '+ numeroSelecionado);
        return palavrasCombinadas[numeroSelecionado];
    } else {
        return null; // Se não houver mais palavras disponíveis
    }
}

function preencherDadosPalavras(palavra_){
	$('#palavra-embaralhada').text(palavra_[2]);
	$('#dica-palavra').text(palavra_[1]);
}

function getQntPalavrasUtilizadas(){
	return numerosUtilizados.length;
}
