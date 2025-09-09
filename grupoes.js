// Lista de grupos
const grupos = [
  {
    nome: "Grupão do Silksong",
    desc: "descrição...",
    img: "https://placehold.co/400x200?text=Silksong",
    estrelas: 5
  },
  {
    nome: "Grupão do Hollow Knight",
    desc: "descrição...",
    img: "https://placehold.co/400x200?text=Hollow+Knight",
    estrelas: 4
  },
  {
    nome: "Grupão do R34",
    desc: "descrição...",
    img: "https://placehold.co/400x200?text=R34",
    estrelas: 5
  },
  {
    nome: "Grupão do Forza 4",
    desc: "descrição...",
    img: "https://placehold.co/400x200?text=Forza+4",
    estrelas: 3
  }
];

const cardsArea = document.getElementById("cardsScrollArea");

function renderCards() {
  grupos.forEach((grupo, index) => {
    const card = document.createElement("div");
    card.classList.add("card");

    // alterna cor usando índice
    if (index % 2 === 0) {
      card.classList.add("card-red");
    } else {
      card.classList.add("card-blue");
    }

    let stars = "⭐".repeat(grupo.estrelas);

    card.innerHTML = `
      <img src="${grupo.img}" alt="${grupo.nome}">
      <h3>${grupo.nome}</h3>
      <p>${grupo.desc}</p>
      <div class="stars">${stars}</div>
      <button>ENTRAR</button>
    `;

    cardsArea.appendChild(card);
  });
}

renderCards();
