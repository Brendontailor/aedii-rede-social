"""
Atividade Final - AED II - Rede Social
Ponto de partida em Python. Leia o README.md na raiz do repositório.

Este arquivo apenas carrega os dados. Todo o resto é com você:
crie suas próprias estruturas (hash, AVL, heap, grafo, ordenação)
em quantos arquivos quiser dentro desta pasta.
"""
import os

RAIZ = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..")


def ler_csv(nome):
    """Lê um CSV separado por ';' e devolve uma lista de listas (sem o cabeçalho)."""
    with open(os.path.join(RAIZ, nome), encoding="utf-8") as arquivo:
        linhas = arquivo.read().splitlines()
    return [linha.split(";") for linha in linhas[1:] if linha]


def main():
    usuarios = ler_csv("usuarios.csv")      # [id, usuario, nome, data_cadastro]
    seguidores = ler_csv("seguidores.csv")  # [seguidor, seguido]
    posts = ler_csv("posts.csv")            # [id, autor, data, curtidas, texto]

    print(f"Usuários carregados:  {len(usuarios)}")
    print(f"Conexões carregadas:  {len(seguidores)}")
    print(f"Posts carregados:     {len(posts)}")

    # TODO: construir as estruturas e implementar os comandos descritos no README.


if __name__ == "__main__":
    main()
