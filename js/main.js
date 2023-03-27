function inverterString() {
    let stringOriginal = document.getElementById("stringInput").value;
    let caracteresInvertidos = [];
    for (let i = stringOriginal.length - 1; i >= 0; i--) {
      caracteresInvertidos.push(stringOriginal[i]);
    }
    let stringInvertida = caracteresInvertidos.join("");
    document.getElementById("stringOriginal").textContent = stringOriginal;
    document.getElementById("stringInvertida").textContent = stringInvertida;
}
