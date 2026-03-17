const campo = document.getElementById('campoTarefa');
const botao = document.getElementById('btnAdicionar');
const lista = document.getElementById('lista');

botao.onclick = function (){
    if (campo.value.trim() === "") return;

    const li = document.createElement('li');

    li.innerHTML = `<span>${campo.value}</span>
    <button class="btn-excluir" onclick="this.parentElement.remove()">Excluir</button>`;

    lista.appendChild(li);
    campo.value ="";
    campo.focus();
}