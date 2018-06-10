# Lixo-Report
Aplicação para o Google Assistant que permite reportar contentores de lixo cheios nos bairros. 

## Como Executar
### DialogFlow
Comece por criar um agente na [consola do DialogFlow](https://console.dialogflow.com).

1. Clique na aba Intents e importe os Intents contidos no directório [intents](https://github.com/rosariopfernandes/Lixo-Report/tree/master/intents);
2. Clique na aba Entities e importe as Entities que estão no directório [entities](https://github.com/rosariopfernandes/Lixo-Report/tree/master/entities);
3. Clique na aba Fulfillment e ative a opção "Inline Editor". Copie o `index.js` e `package.json` do directório [webhook(fulfillment)](https://github.com/rosariopfernandes/Lixo-Report/tree/master/webhook(fulfillment));
4. Clique em "Deploy".

### Cloud Firestore for Firebase
De seguida é necessário incializar o Cloud Firestore:

1. Vá à [consola do Firebase](https://console.firebase.google.com);
2. Selecione o projeto com o mesmo nome do agente criado no DialogFlow;
3. Clique na Aba Database e escolha Cloud Firestore;
4. Inicialize o firebase em modo de teste.

### Testar a aplicação
Clique a opção "See How It Works on Google Assistant" na consola do DialogFlow.

## Licença
> MIT License
> 
> Copyright (c) 2018 Rosário Pereira Fernandes
> 
> Permission is hereby granted, free of charge, to any person obtaining a copy
> of this software and associated documentation files (the "Software"), to deal
> in the Software without restriction, including without limitation the rights
> to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
> copies of the Software, and to permit persons to whom the Software is
> furnished to do so, subject to the following conditions:
> 
> The above copyright notice and this permission notice shall be included in all
> copies or substantial portions of the Software.
> 
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
> IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
> FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
> AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
> LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
> OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
> SOFTWARE.
