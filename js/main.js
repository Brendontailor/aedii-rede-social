/*
 * Atividade Final - AED II - Rede Social
 * Ponto de partida em JavaScript (Node.js). Leia o README.md na raiz do repositório.
 *
 * Este arquivo apenas carrega os dados. Todo o resto é com você:
 * crie suas próprias estruturas (hash, AVL, heap, grafo, ordenação)
 * em quantos arquivos quiser dentro desta pasta.
 */
const fs = require("fs");
const path = require("path");

const RAIZ = path.join(__dirname, "..");

/** Lê um CSV separado por ';' e devolve um array de arrays (sem o cabeçalho). */
function lerCsv(nome) {
  const linhas = fs.readFileSync(path.join(RAIZ, nome), "utf-8").split(/\r?\n/);
  return linhas.slice(1).filter((l) => l).map((l) => l.split(";"));
}

function main() {
  const usuarios = lerCsv("usuarios.csv");     // [id, usuario, nome, data_cadastro]
  const seguidores = lerCsv("seguidores.csv"); // [seguidor, seguido]
  const posts = lerCsv("posts.csv");           // [id, autor, data, curtidas, texto]

  console.log(`Usuários carregados:  ${usuarios.length}`);
  console.log(`Conexões carregadas:  ${seguidores.length}`);
  console.log(`Posts carregados:     ${posts.length}`);

  // TODO: construir as estruturas e implementar os comandos descritos no README.
}

main();
