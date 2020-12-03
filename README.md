# softplan-desafio-fullstack-frontend
Projeto front end com React - Sistema de Gerenciamento de Processos

## Ferramentas de Desenvolvimento
## Preparação do ambientes front-end:

## 1. NodeJs: nodejs.org - Engine que roda JS do lado do servidor.
node -v
npm -v = Gerenciador de pacotes

npm install -g yarn - windows 
sudo yum install curl - fedora
yarn init my_yarn_project
yarn --version

npm install -g create-react-app 
create-react-app softplan-desafio-fullstack-frontend

softplan-desafio-fullstack-frontend> yarn buid (Montar a aplicação)

softplan-desafio-fullstack-frontend> yarn start (Iniciar a aplicação)

http://localhost:3000

## 2. Instalando Visual Studio Code - VSCode
i. https://code.visualstudio.com/

ii. Abrir o projeto criado;
/home/projetos/softplan-desafio-fullstack-frontend

Abrir no VSCode: softplan-desafio-fullstack-frontend

iii. Instalnado Bootswatch e Bootstrap:
/home/projetos/softplan-desafio-fullstack-frontend> yarn add bootswatch

iv. Rotas para navegar entre as Views:
/home/projetos/softplan-desafio-fullstack-frontend> yarn add react-router-dom

## 3. Instalando Axios para realizar requisição para a API REST :
i. github.com/axios/axios

ii. yarn add axios

## 4. Instalar o PrimeReact : componentes de botões e etc.
Usado no projeto:

https://www.primefaces.org/primereact/

npm install primereact --save
npm install primeicons --save

yarn add primereact primeicons classnames react-transition-group

## 5. Instalar a biblioteca JavaScript Toastr que nos permite exibir notificações para o usuário em aplicações web:
yarn add toastr

## 6. Um utilitário Javascript simples que o ajuda a exibir moeda corretamente:
yarn add currency-formatter

## 7. Build em tempo de desenvolvimento:
yarn build

## 8. Iniciar o servidor: 
yarn start

=================================================================================================================================================================

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
