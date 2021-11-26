const estado = document.getElementById('estados');

const listEstados = ['Rio de Janeiro', 'Piaui', 'Bahia', 'Maranhão'];
for(let index = 0; index < listEstados.length; index += 1) {
  const elementOption = document.createElement('option');
  elementOption.innerHTML = listEstados[index];
  estado.appendChild(elementOption);
}