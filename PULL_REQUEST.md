# 📝 CoreNotes - API

Esta é uma API para gerenciamento de listas de tarefas. Confira também o [front-end da aplicação](https://github.com/brunnaserafina/corelab-web).

## Funcionalidades

- Retornar notas não favoritadas
- Retornar notas favoritas
- Postar nota
- Editar nota
- Deletar nota
- Editar cor da nota
- Favoritar nota
- Desfavoritar nota


## Documentação da API

#### RETORNAR NOTAS NÃO FAVORITAS:

```http
  GET /api/notes
```

--

#### POSTAR/CRIAR NOVA NOTA:

```http
  POST /api/notes
```

- Body:

| Parâmetro  | Tipo       | Descrição                                                                          |
| :--------- | :--------- | :--------------------------------------------------------------------------------- |
| `title`    | `string`   | `Título da nota`                                                                   |
| `content`  | `string`   | `Conteúdo da nota. Deve conter pelo menos 1 caractere`                             |
| `color`    | `string`   | `Cor da nota. Deve seguir o formato hexadecimal e ser da paleta permitida no site` |
| `favorite` | `boolean`  | `Indica se a nota já foi criada como favorita.`                                    |

--

#### EDITAR NOTA:

```http
  PUT /api/notes
```

- Body:

| Parâmetro  | Tipo       | Descrição                                                                          |
| :--------- | :--------- | :--------------------------------------------------------------------------------- |
| `id`       | `string`   | `ID da nota existente. Deve seguir o ObjectID do MongoDB`                          |
| `title`    | `string`   | `Título da nota`                                                                   |
| `content`  | `string`   | `Conteúdo da nota. Deve conter pelo menos 1 caractere`                             |
| `color`    | `string`   | `Cor da nota. Deve seguir o formato hexadecimal e ser da paleta permitida no site` |
| `favorite` | `boolean`  | `Indica se a nota é favorita.`                                                     |

--

#### DELETAR NOTA:

```http
  DELETE /api/notes/:id
```

- Params:

| Parâmetro | Tipo       | Descrição                                                         |
| :-------- | :--------- | :---------------------------------------------------------------- |
| `id`      | `string`   | `ID da nota a ser deletada. Deve seguir o ObjectID do MongoDB`    |

--

#### EDITAR COR DA NOTA:

```http
  PUT /api/notes/color/:id
```

- Params:

| Parâmetro | Tipo       | Descrição                                                              |
| :-------- | :--------- | :--------------------------------------------------------------------- |
| `id`      | `string`   | `ID da nota a ser editada a cor. Deve seguir o ObjectID do MongoDB`    |

--

- Body:

| Parâmetro  | Tipo       | Descrição                                                                               |
| :--------- | :--------- | :-------------------------------------------------------------------------------------- |
| `color`    | `string`   | `Nova cor da nota. Deve seguir o formato hexadecimal e ser da paleta permitida no site` |


--

#### RETORNAR NOTAS FAVORITAS:

```http
  GET /api/favorites
```

--

#### FAVORITAR NOTA:

```http
  POST /api/favorites/:id
```

- Params:

| Parâmetro | Tipo       | Descrição                                                           |
| :-------- | :--------- | :------------------------------------------------------------------ |
| `id`      | `string`   | `ID da nota a ser favoritada. Deve seguir o ObjectID do MongoDB`    |

--

#### DESFAVORITAR NOTA:

```http
  DELETE /api/favorites/:id
```

- Params:

| Parâmetro | Tipo       | Descrição                                                           |
| :-------- | :--------- | :------------------------------------------------------------------ |
| `id`      | `string`   | `ID da nota a ser desfavoritada. Deve seguir o ObjectID do MongoDB`    |

--

### Pré-requisitos de instalação

Certifique-se de ter os seguintes pré-requisitos instalados antes de executar o projeto:

- Node.js ([manual de instalação aqui](https://nodejs.org/pt-br/download))
- npm ([gerenciador de pacotes](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm))
- Banco de dados MongoDB ([manual de instalação aqui](https://www.mongodb.com/docs/manual/administration/install-community/))

<br />
<br />

## ▶️ Rodando a aplicação

1. Clone este repositório em uma pasta de sua preferência:

```bash
  $ git clone https://github.com/brunnaserafina/corelab-api.git
```

2. Navegue até o diretório do projeto:

```bash
 $ cd corelab-api
```

3. Instale suas depêndencias:

```bash
   npm i
```

4. Crie um banco de dados local com MongoDB e crie uma base de dados chamada "corenotes"
5. Crie um .env com base no .env.example e insira a porta que irá rodar a aplicação e o endereço do banco de dados criado seguindo o modelo:

```
    PORT=3333
    MONGO_URI="mongodb://127.0.0.1:27017/corenotes"
```

6. Inicie a aplicação na raíz do projeto rodando o ambiente de desenvolvimento:

```bash
   npm run dev
```

</br>
</br>

## 🛠️ Tecnologias utilizadas

<img align="left" height="30px" alt="nodejs" src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white" />
<img align="left" height="30px" alt="typescript" src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white" />
<img align="left" height="30px" alt="express" src="https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB" />
<img align="left" height="30px" alt="mongodb" src="https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white" />


</br>
</br>
</br>

## 🙇🏻‍♀️ Autora

- Brunna Serafina - [@brunnaserafina](https://www.github.com/brunnaserafina)
