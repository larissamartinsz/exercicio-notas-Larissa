var nota1 = 7;
var nota2 = 5;
var mediaNotas = (nota1 + nota2) / 2;
var mediaReprovado = 4;
var mediaRecuperacao = 6;

if (mediaNotas > mediaRecuperacao) {
    console.log("Aluno aprovado com", mediaNotas, "de nota média.");
} else if (mediaNotas > mediaReprovado && mediaNotas <= mediaRecuperacao) {
    console.log("Aluno  de recuperação", mediaNotas, "de nota média");
} else {
    console.log("Aluno reprovado com", mediaNotas, "de nota média.");
}