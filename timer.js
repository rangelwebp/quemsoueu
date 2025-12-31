// timer.js
const btnComecar = document.getElementById("btnComecar");
const blocoTimer = document.getElementById("blocoTimer");
const timerValor = document.getElementById("timerValor");

let intervalo = null;

function iniciarTimer() {
	blocoTimer.classList.remove("hidden");
	btnComecar.disabled = true;
	btnComecar.textContent = "Rodada em andamento...";

	let tempo = 10;
	timerValor.textContent = tempo;

	if (intervalo !== null) {
		clearInterval(intervalo); // [web:93]
	}

	intervalo = setInterval(() => {
		tempo--;
		timerValor.textContent = tempo;

		if (tempo <= 0) {
			clearInterval(intervalo);
			intervalo = null;
			// quando acabar o timer, vai para a página do personagem
			window.location.href = "personagem.html"; // redireciona [web:88]
		}
	}, 1000);
}

btnComecar.addEventListener("click", iniciarTimer);
