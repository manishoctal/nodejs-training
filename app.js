const express = require('express');
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.post('/getdata', function(request, response){

    const raw_data = request.body; //object  
    return response.json(raw_data); //json
});

app.put('/update/:id', function(request, response){

    const raw_data = request.body;
    const params = request.params;
    return response.json(raw_data);
});
app.delete('/update/:id', function(request, response){ 
    return response.json(raw_data); 
});


app.listen(3000, () => {
    console.log('Nodejs server is running...')
})