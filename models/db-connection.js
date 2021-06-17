let mongoose = require('mongoose');

var options = {
    connectTimeoutMS: 5000,
    useNewUrlParser: true,
    useUnifiedTopology: true
}
mongoose.connect('mongodb+srv://jean:test@cluster0.6o07p.mongodb.net/to-do-app?retryWrites=true&w=majority',
    options,
    function (err) {
        console.log(err);
    }
)