# Meteora

Meteora é uma aplicação de e-commerce de moda que permite visualizar produtos, aplicar múltiplos filtros (como categoria, termo de busca, faixa de preço, gênero, entre outros), adicionar itens ao carrinho e aos favoritos, além de ampliar imagens dos produtos. Este projeto foi desenvolvido inicialmente pela plataforma Alura. Porém fiz diversas implementações e melhorias individuais. Além de que fiz todo o projeto olhando apenas o FIGMA da aplicação, desenvolvendo as funcionalidades de acordo com o que achei necessário.

## 🎥 Demonstração

![Demo](./public/preview-gif.gif)

## 🎨 Design do projeto:

[![Figma](https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white)](https://www.figma.com/community/file/1410403957296992419)

## 🚀 Funcionalidades Principais

- **Filtro Dinâmico de Produtos**
  - Filtragem por: categoria, termo de busca, faixa de preço, gênero (e possibilidade de expandir para outros filtros)
  - Feedback visual dos filtros aplicados (os filtros ativos são exibidos como "tags" na interface)
  - Persistência de filtros  no navegador utilizando LocalStorage

- **Gerenciamento de Produtos**
  - Sistema de Favoritos com feedback por toast (notificações animadas)
  - Carrinho de Compras integrado com feedback visual e atualização em tempo real
  - Modal para ampliação de imagens dos produtos
 
 - **Sitema de Autenticação (AuthContext)**
  - Criação de um contexto de autenticação global (AuthContext) para gerenciar login e logout
  - Componente AuthProvider responsável por fornecer o estado e as funções de autenticação para toda a aplicação
  - Hook personalizado useAuth() para facilitar o acesso ao contexto de autenticação

- **Interface e Usabilidade**
  - Componentes reutilizáveis (ex.: ProdutoCard) para uma UI consistente e escalável
  - Estilização com Styled Components, garantindo um design moderno e responsivo
  - Toasts customizados com animações e feedback visual utilizando React Toastify

## 💡 Conceitos e Técnicas Aplicados

### React
- **Gestão de Estado com Context API e useReducer:**
  - Compartilhamento global de estado para produtos, carrinho e favoritos
  - Uso de `useMemo` para otimização na renderização dos produtos filtrados
  - Persistência dos estados relevantes no LocalStorage
  - Uso de `useRef` para armazenar a última versão salva dos filtros e evitar chamadas desnecessárias ao `localStorage`

- **Componentização e Modularização:**
  - Estrutura organizacional com componentes reutilizáveis (ex.: ProdutoCard, Barra de Navegação, Modal)
  - Arquitetura modular que favorece a escalabilidade e manutenção

- **Técnicas Avançadas:**
  - Renderização condicional e tratamento de estados assíncronos
  - Uso de Styled Components para encapsular e gerenciar os estilos de forma dinâmica
  - Feedback visual com toasts animados para ações do usuário

### JavaScript Moderno
- **ES6+ Features:**
  - Arrow functions, destructuring, template literals e spread operator para manipulação de estado imutável
- **Manipulação de Dados:**
  - Utilização de métodos como `.map()`, `.filter()` e `.some()` para renderização e verificação de listas
- **Boas Práticas:**
  - Código limpo e organizado, com separação de responsabilidades
  - Modularização e reutilização eficiente de componentes e hooks

### Backend
- **Node.js e Express:**
  - A aplicação utiliza um backend com **Node.js** e **Express** para fornecer os dados dos produtos, como lista de produtos, categorias, e detalhes dos itens. O backend também permite implementar outras funcionalidades que exigem interação com um servidor.
  - O backend foi desenvolvido para suportar as operações de consulta de produtos e outras funcionalidades que a aplicação precisa.

- **Comunicação Frontend-Backend:**
  - O front-end faz chamadas assíncronas para o backend utilizando **fetch** para obter os dados, como a lista de produtos e as categorias, por meio de requisições GET.
  - O uso do `fetch` permite a integração direta entre o frontend e o backend, possibilitando a atualização dinâmica dos dados na interface.

```javascript
fetch('http://localhost:5000/api/produtos')
  .then(response => response.json())
  .then(data => {
    // Atualiza o estado com os dados recebidos do backend
  })
  .catch(error => console.error('Erro ao buscar produtos:', error));
```

- **Estrutura do Backend:**
  - O servidor Express é responsável por expor endpoints que retornam os dados necessários para a aplicação frontend.
  - A estrutura do servidor inclui uma API RESTful para comunicação entre o backend e o frontend.
  - O backend pode ser expandido para implementar funcionalidades adicionais, como autenticação de usuários, gerenciamento de pedidos e outras operações relacionadas a e-commerce.

## 🛠️ Tecnologias Utilizadas

- **Core:**
  ![React](https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=white&style=flat)
  ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black&style=flat)

- **Estado e UI:**
  ![React Context API](https://img.shields.io/badge/Context%20API-5849BE?logo=react&logoColor=white&style=flat)
  ![Styled Components](https://img.shields.io/badge/Styled_Components-DB7093?logo=styled-components&logoColor=white&style=flat)
  ![React Toastify](https://img.shields.io/badge/React_Toastify-FF4081?logo=react&logoColor=white&style=flat)

- **Backend:**
  ![Node.js](https://img.shields.io/badge/Node.js-339933?logo=node.js&logoColor=white&style=flat)
  ![Express](https://img.shields.io/badge/Express-000000?logo=express&logoColor=white&style=flat)

- **Iconografia:**
  ![React Icons](https://img.shields.io/badge/React_Icons-FF4081?logo=react&logoColor=white&style=flat)

## ⚙️ Instalação e Execução

### Pré-requisitos

- [Node.js](https://nodejs.org/) (v14 ou superior)
- [Git](https://git-scm.com/)
- Backend rodando localmente ou em um servidor (caso deseje testar a integração)

### Passo a Passo

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/seu-usuario/meteora.git
   cd meteora
   ```

2. **Instale as dependências do frontend:**
   ```bash
   npm install
   ```

3. **Inicie o backend:**
   - Vá até a pasta do backend e execute:
   ```bash
   cd backend
   npm install
   npm start
   ```

4. **Inicie a aplicação frontend:**
   ```bash
   cd ..
   npm start
   ```

5. **Acesse a aplicação:**
   Abra o navegador e acesse `http://localhost:3001` para visualizar a aplicação em funcionamento.

---

**Meteora** foi projetado para ser uma solução escalável e de fácil manutenção, com o objetivo de melhorar a experiência do usuário no processo de compra de moda online. Ao longo do desenvolvimento, busquei aplicar as melhores práticas em React, otimização de performance e design responsivo, com foco na experiência do usuário.
