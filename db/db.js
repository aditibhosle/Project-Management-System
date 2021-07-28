const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/pm", 
    { 
        useNewUrlParser: true, 
        useFindAndModify: false, 
        useUnifiedTopology: true,
        useCreateIndex: true
    }).then(() => console.log('DB connected'));

