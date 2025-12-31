// personagem.js
const itens = [
	"Chaves (Personagem)",
	"Pão de queijo (Comida)",
	"Ivete Sangalo (Personalidade)",
	"Girafa (Animal)",
	"Torre Eiffel (Local)",
	"Médico (Profissão)",
	"Pelé (Personalidade)",
	"Bob Esponja (Personagem)",
	"Tubarão (Animal)",
	"Cristo Redentor (Local)",
	"Coxinha (Comida)",
	"Astronauta (Profissão)",
	"Xuxa Meneghel (Personalidade)",
	"Mônica (Turma da Mônica) (Personagem)",
	"Elefante (Animal)",
	"Estátua da Liberdade (Local)",
	"Pizza (Comida)",
	"Bombeiro (Profissão)",
	"Fernanda Montenegro (Personalidade)",
	"Cebolinha (Personagem)",
	"Capivara (Animal)",
	"Maracanã (Local)",
	"Feijoada (Comida)",
	"Palhaço (Profissão)",
	"Roberto Carlos (cantor) (Personalidade)",
	"Emília (Sítio do Picapau Amarelo) (Personagem)",
	"Mico-leão-dourado (Animal)",
	"Pirâmides do Egito (Local)",
	"Brigadeiro (Comida)",
	"Policial (Profissão)",
	"Anitta (Personalidade)",
	"Seu Madruga (Personagem)",
	"Pinguim (Animal)",
	"Lua (Local)",
	"Café (Comida)",
	"Professor (Profissão)",
	"Faustão (Personalidade)",
	"Homem-Aranha (Personagem)",
	"Tamanduá (Animal)",
	"Marte (Local)",
	"Hambúrguer (Comida)",
	"Jogador de futebol (Profissão)",
	"Ana Maria Braga (Personalidade)",
	"Batman (Personagem)",
	"Bicho-preguiça (Animal)",
	"Polo Norte (Local)",
	"Sushi (Comida)",
	"Cozinheiro (Profissão)",
	"Gisele Bündchen (Personalidade)",
	"Mickey Mouse (Personagem)",
	"Ornitorrinco (Animal)",
	"Açaí (Comida)",
	"Presidente (Profissão)",
	"Santos Dumont (Personalidade)",
	"Nazaré Tedesco (Personagem)",
	"Canguru (Animal)",
	"Macarrão (Comida)",
	"Lampião (Personalidade)",
	"Super Mario (Personagem)",
	"Camaleão (Animal)",
	"Ovo frito (Comida)",
	"Mussum (Personalidade)",
	"Coringa (Personagem)",
	"Panda (Animal)",
	"Abacaxi (Comida)",
	"Dercy Gonçalves (Personalidade)",
	"Pato Donald (Personagem)",
	"Avestruz (Animal)",
	"Chocolate (Comida)",
	"Wagner Moura (Personalidade)",
	"Saci-Pererê (Personagem)",
	"Polvo (Animal)",
	"Caipirinha (Comida)",
	"Caetano Veloso (Personalidade)",
	"Morcego (Animal)",
	"Leite condensado (Comida)",
	"Tatá Werneck (Personalidade)",
	"Tartaruga (Animal)",
	"Ronaldinho Gaúcho (Personalidade)",
	"Borboleta (Animal)",
	"Carmen Miranda (Personalidade)",
	"Sapo (Animal)",
	"Oscar Niemeyer (Personalidade)",
	"Pavão (Animal)",
	"Paulo Gustavo (Personalidade)",
	"Jacaré (Animal)",
	"Marta (jogadora) (Personalidade)",
	"Luiz Gonzaga (Personalidade)",
	"Jô Soares (Personalidade)",
	"Renato Aragão (Didi) (Personalidade)",
	"Selton Mello (Personalidade)",
	"Fátima Bernardes (Personalidade)",
	"Galvão Bueno (Personalidade)",
	"Tiradentes (Personalidade)",
	"Machado de Assis (Personalidade)",
	"Michael Jackson (Personalidade)",
	"Elvis Presley (Personalidade)",
	"Leonardo da Vinci (Personalidade)",
	"Barack Obama (Personalidade)",
];

const personagemNome = document.getElementById("personagemNome");
const personagemTipo = document.getElementById("personagemTipo");
const btnReiniciar = document.getElementById("btnReiniciar");

function sortearItem() {
	const indice = Math.floor(Math.random() * itens.length); // [web:40]
	return itens[indice];
}

function separarNomeETipo(texto) {
	const regex = /^([^()]+)\((.*)\)$/; // [web:48][web:60]
	const match = texto.match(regex);
	if (match) {
		const nome = match[1].trim();
		const tipo = match[2].trim();
		return { nome, tipo };
	}
	return { nome: texto.trim(), tipo: "" };
}

function mostrarPersonagem() {
	const sorteado = sortearItem();
	const { nome, tipo } = separarNomeETipo(sorteado);

	personagemNome.textContent = nome.toUpperCase();
	personagemTipo.textContent = tipo ? `(${tipo.toLowerCase()})` : "";
}

btnReiniciar.addEventListener("click", () => {
	// volta para a página do timer
	window.location.href = "index.html";
});

// quando a página carregar, já sorteia um personagem
document.addEventListener("DOMContentLoaded", mostrarPersonagem); // [web:63][web:65]
