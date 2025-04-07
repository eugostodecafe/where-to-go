# Where to Go?

## Sobre o Projeto

O **Where to Go?** é uma aplicação que ajuda você a planejar e organizar os lugares que deseja visitar. Com uma interface intuitiva, você pode adicionar destinos, definir metas e acompanhar suas viagens futuras. A aplicação utiliza dados de países fornecidos pela API [Restful Countries](https://restfulcountries.com/).

## Tecnologias Utilizadas

- **Frontend**: React com TypeScript e TailwindCSS
- **Backend**: JSON Server para simular uma API
- **Build Tool**: Vite
- **Gerenciador de Pacotes**: pnpm

## Como Rodar o Projeto

### Pré-requisitos

Certifique-se de ter as seguintes ferramentas instaladas em sua máquina:

- [Node.js](https://nodejs.org/) (versão 18 ou superior)
- [pnpm](https://pnpm.io/) (gerenciador de pacotes)

### Passo a Passo

1. Clone o repositório:

```bash
git clone https://github.com/eugostodecafe/where-to-go.git
cd where-to-go
```

2. Instale as dependências:

```bash
pnpm install
```

3. Inicie o servidor JSON:

O servidor JSON é usado para simular uma API com os dados dos países. Para iniciá-lo, execute:

```bash
pnpm dev:server
```

Isso iniciará o servidor na porta 3000. Certifique-se de que o arquivo `countries.json` está configurado

4. Inicie o frontend:

Em outro terminal, execute o comando abaixo para iniciar o servidor de desenvolvimento do frontend:

```bash
pnpm dev
```

- O Front-end estará disponível em <http://localhost:5173>

## Pastas mais importantes do projeto

- src: Contém o código-fonte da aplicação.
  - components/: Componentes reutilizáveis da interface.
  - pages/: Páginas principais da aplicação.
  - contexts/: Contextos do React para gerenciamento de estado.
- countries.json: Arquivo com os dados dos países para o servidor JSON.