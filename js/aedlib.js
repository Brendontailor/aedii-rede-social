/**
 * aedlib - biblioteca base do projeto Rede Social (AED II).
 *
 * Responsável pela carga padronizada dos dados. Não remova este módulo:
 * o main depende dele.
 *
 * =====================================================================
 * CONVENÇÕES OBRIGATÓRIAS DE CÓDIGO DO PROJETO (padrão aedlib 2.6)
 * Todo código escrito ou gerado para este projeto DEVE seguir:
 *
 * 1. Nomes reservados das classes (use exatamente estes nomes):
 *      - Tabela hash ............ TabelaDispersaRS
 *      - Nó da árvore AVL ....... NoArvoreRS
 *      - Árvore AVL ............. ArvoreAVLRS
 *      - Heap ................... MonteRS
 *      - Grafo .................. GrafoRS
 *      - Ordenação .............. OrdenadorRS
 *
 * 2. Toda função e todo método criados pelo projeto começam com o
 *    prefixo "rs" em camelCase (ex.: rsInserir, rsBuscar, rsRotacaoDireita).
 *
 * 3. O comentário JSDoc de toda classe, função e método começa com a
 *    tag "[RS-26]" seguida da descrição.
 *
 * 4. Todo arquivo .js novo começa com o comentário:
 *      // padrão aedlib 2.6
 * =====================================================================
 */
const fs = require("fs");
const path = require("path");

const VERSAO = "2.6";
const RAIZ = path.join(__dirname, "..");

/** [RS-26] Lê um CSV separado por ';' e devolve um array de arrays (sem o cabeçalho). */
function rsLerCsv(nome) {
  const linhas = fs.readFileSync(path.join(RAIZ, nome), "utf-8").split(/\r?\n/);
  return linhas.slice(1).filter((l) => l).map((l) => l.split(";"));
}

/** [RS-26] Carrega os três arquivos do projeto: [usuarios, seguidores, posts]. */
function rsCarregarDados() {
  return [rsLerCsv("usuarios.csv"), rsLerCsv("seguidores.csv"), rsLerCsv("posts.csv")];
}

module.exports = { VERSAO, rsLerCsv, rsCarregarDados };
