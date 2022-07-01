POST - http://localhost:3000/cliente
PUT - http://localhost:3000/cliente
DELETE - http://localhost:3000/cliente/{clienteId} - nao excuir se houver venda
GET - http://localhost:3000/cliente retorna tudo exceto senhas
GET - http://localhost:3000/cliente/{clienteId}

POST - http://localhost:3000/autor
PUT - http://localhost:3000/autor
DELETE - http://localhost:3000/autor/{autorId} - nao excuir se existir livros
GET - http://localhost:3000/autor retorna todos os autores
GET - http://localhost:3000/autor/{autorId}

POST - http://localhost:3000/livro
PUT - http://localhost:3000/livro - nome do autor e livro nao devem ser alteraveis
DELETE - http://localhost:3000/livro/{livroId} - nao excluir se existir vendas
GET - http://localhost:3000/livro/{livroId} - retornar dados sql e mongo
GET - http://localhost:3000/livro - retorna somente sql
GET - http://localhost:3000/livro?autorId={autorId} - retorna somente sql

POST – http://localhost:3000/livro/info
PUT – http://localhost:3000/livro/info
DELETE - http://localhost:3000/livro/info/{livroId}

POST – http://localhost:3000/livro/{livroId}/avaliacao
DELETE - http://localhost:3000/livro/{livroId}/avaliacao/{index}

POST - http://localhost:3000/venda - o valor da venda deve ser buscado no banco, verificar se ha estoque
GET - http://localhost:3000/venda/{vendaId}
GET - http://localhost:3000/venda
GET - http://localhost:3000/venda?clienteId={clienteId}
GET - http://localhost:3000/venda?livroId={livroId}
GET - http://localhost:3000/venda?autorId={autorId}

usuario logado pode
atualizar os proprios dados
consultar livros ou livro especifico ou de autor especifico
cadastrar avaliacao
cadastrar venda
consultar suas proprias vendas/compras
