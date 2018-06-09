'use strict';

// Importar os módulos necessários
const {dialogflow} = require('actions-on-google');
const functions = require('firebase-functions');
const admin = require('firebase-admin');

//Inicializar a app Firebase
admin.initializeApp({
  credential: admin.credential.applicationDefault()
});
//Inicilizar a app DialogFlow
const app = dialogflow({debug: true});

//Variável para aceder à nossa base de dados
const db = admin.firestore();

//Variável para aceder à nossa "tabela" chamada "Reports"
const reportsRef = db.collection('reports');
//É nessa "tabela" onde iremos colocar todos os nossos reports

//Receber o Intent "Reportar"
app.intent('Reportar', (conv, {Bairro}) => {
    //Guardar o novo report
    return reportsRef.add({
        //Dados do novo Report
        bairro: Bairro,
        data: admin.firestore.FieldValue.serverTimestamp(),
        categoria: "Contentor Está Cheio",
        estado: "Registado"
        
    }).then(function(){
        conv.close('Report enviado!');
    }).catch(function(error){
        conv.close('Não foi possível enviar o Report.');
    });
});

//Receber o Intent "Verificar Estado"
app.intent('Verificar Estado', (conv, {Bairro}) => {
    //Ler todos reports onde o Bairro é o bairro pedido pelo utilizador
    return reportsRef.where('bairro', '==', Bairro).get()
        .then(function (snapshot){
            //Verificar se já existem reports nesse bairro
            if(snapshot.size === 0)
            {
                conv.close("Não foi encontrado nenhum report para esse bairro");
            }
            else{
                //Variável para a resposta
                var resposta = "Aqui estão os reports do bairro "+Bairro+": ";
                //Ciclo para percorrer cada report encontrado
                snapshot.forEach(function(snap){
                    //Obter os dados do report encontrado
                    const report = snap.data();
                    //Adicionar os dados do report à reposta.
                    resposta += report.data + " " + report.estado + ", ";
                });
                //Enviar a resposta e terminar a conversa
                conv.close(resposta);
            }
        });
});

//Receber o Intent "Ver Reports"
app.intent('Ver Reports', (conv) => {
    //Ler todos Reports
    return reportsRef.get()
        .then(function (snapshot){
            //Verificar se já foram criados reports
            if(snapshot.size === 0)
                conv.close("Ainda não existem reports");
            else
            {
                //Variável para a resposta
                var resposta = "Os reports são: ";
                //Ciclo para percorrer cada report encontrado
                snapshot.forEach(function(snap){
                    //Obter os dados do report encontrado
                    const report = snap.data();
                    //Adicionar os dados do report à resposta.
                    resposta += report.bairro + " " + report.estado + ", ";
                });
                //enviar a resposta e terminar a conversa.
                conv.close(resposta);
            }
            
        });
});

// Fazer com que o DialogFlow receba as requisições HTTP
exports.dialogflowFirebaseFulfillment = functions.https.onRequest(app);
