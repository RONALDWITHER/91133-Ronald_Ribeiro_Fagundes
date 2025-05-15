document.getElementById('voltar').addEventListener('click', () => {
  window.location.href = '/index.html';
});

async function carregarLista() {
  const resposta = await fetch('/listar');
  const pessoas = await resposta.json();

  const tbody = document.querySelector('#tabela tbody');
  tbody.innerHTML = "";

  pessoas.forEach(pessoa => {
    const linha = document.createElement('tr');
    linha.innerHTML = `
      <td>${pessoa.id}</td>
      <td>${pessoa.nome}</td>
      <td>
        <button onclick="excluir(${pessoa.id})">Excluir</button>
        <button onclick="renomear(${pessoa.id}, '${pessoa.nome}')">Renomear</button>
      </td>
    `;
    tbody.appendChild(linha);
  });
}

async function excluir(id) {
  if (confirm("Deseja excluir essa pessoa?")) {
    await fetch(`/excluir/${id}`, { method: 'DELETE' });
    carregarLista();
  }
}


async function carregarPessoas(){
    const resposta = await fetch("/listar");
    const pessoas = await resposta.json();

    const lista = document.getElementById("lista");
    lista.innerHTML = "";
    pessoas.forEach(pessoa=>{
        const li = document.createElement("li");
        li.textContent = pessoa.nome;
        lista.appendChild(li);
    });
}


async function renomear(id, nomeAtual) {
  const novoNome = prompt("Digite o novo nome:", nomeAtual);
  if (novoNome && novoNome.trim() !== "") {
    await fetch(`/renomear/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ nome: novoNome })
    });
    carregarLista();
  }
}

carregarLista();
