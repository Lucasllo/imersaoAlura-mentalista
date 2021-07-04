var erros = [];

const CHANCES = 6;

var numCorreto = Math.floor(Math.random() * 100) + 1;

function apostarNumero() {
	var inNumero = document.getElementById("inNumero");
	var outErros = document.getElementById("outErros");
	var outChances = document.getElementById("outChances");
	var outDica = document.getElementById("outDica");

	var num = Number(inNumero.value);

	if (num == "" || isNaN(num) || num < 0 || num > 100) {
		alert("Preencha corretamente o campo");
		inNumero.focus();
		return;
	}

	if (num == numCorreto) {
		outDica.textContent = "Parabéns, você acertou!!! o numero correto é " + numCorreto;
		btApostar.disabled = true;
		btJogar.className = "exibe";
	} else {
		if (erros.indexOf(num) >= 0){
			alert("Você já tentou esse numero, tente outro.");
			inNumero.focus();
			return;
		} else {
			erros.push(num);

			var chances = CHANCES - erros.length;

			outErros.textContent = erros.length + "(" + erros.join(" - ") + ")";
			outChances.textContent = chances;
			if (chances == 0) {
				outDica.textContent = "Você perdeu!!! o numero correto é " + numCorreto;
				btApostar.disabled = true;
				btJogar.className = "exibe";
			} else {
				if (num < numCorreto) {
					outDica.textContent = "O numero é maior do que " + num;
				} else {
					outDica.textContent = "O numero é menor do que " + num;
				}
			}
		}
	}

	inNumero.value = "";
	inNumero.focus();
}	

	var btApostar = document.getElementById("btApostar");
	btApostar.addEventListener("click", apostarNumero);

function jogarNovamente() {
	location.reload();
}	

	var btJogar = document.getElementById("btJogar");
	btJogar.addEventListener("click", jogarNovamente);
