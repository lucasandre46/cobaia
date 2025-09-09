// Lista de categorias com ícones (usando emojis como exemplo)
const categorias = [
  { nome: "Esportes", icone: "⚽" },
  { nome: "Religião", icone: "✝️" },
  { nome: "Filmes", icone: "🎬" },
  { nome: "Música", icone: "🎵" },
  { nome: "Política", icone: "🏛️" },
  { nome: "Literatura", icone: "📖" },
  { nome: "Automobilismo", icone: "🚗" },
  { nome: "Arte", icone: "🎨" },
  { nome: "Games", icone: "🎮" }
];

const cardsContainer = document.getElementById("cardsContainer");
const selectedContainer = document.getElementById("selectedContainer");

// Renderiza os cards principais
function renderCards() {
  categorias.forEach(cat => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `<img src="" alt=""><span>${cat.nome}</span>`;

    // Usa emoji no lugar de imagem real
    card.querySelector("img").outerHTML = `<div style="font-size:28px;">${cat.icone}</div>`;

    // Clique adiciona ao selecionado
    card.addEventListener("click", () => addToSelected(cat));
    cardsContainer.appendChild(card);
  });
}

// Adiciona card na área vermelha
function addToSelected(cat) {
  // Impede duplicados
  if (document.getElementById(`sel-${cat.nome}`)) return;

  const selCard = document.createElement("div");
  selCard.classList.add("selected-card");
  selCard.id = `sel-${cat.nome}`;
  selCard.innerHTML = `
    <div style="font-size:20px;">${cat.icone}</div>
    <span>${cat.nome}</span>
    <button class="remove-btn">x</button>
  `;

  // Botão remover
  selCard.querySelector(".remove-btn").addEventListener("click", () => {
    selCard.remove();
  });

  selectedContainer.appendChild(selCard);
}

// Inicializa
renderCards();
