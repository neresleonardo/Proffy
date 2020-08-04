import express from 'express';

const app = express();

app.get('/users', (req,res) => {
    res.json('Ola Mundo');
})

app.listen(3333 , () => {
    console.log('Porta aberta');
    
});
