//Laura

function ordenarDoisNumeros(array) {
  let primeiro = array[0];
  let segundo = array[1];
 
  if (primeiro > segundo) {
    let temp = primeiro;
    primeiro = segundo;
    segundo = temp;
  }
 
  return [primeiro, segundo];
}
 
console.log(ordenarDoisNumeros([8, 3])); 
 