var message = require('./message');
var test = (id = 7) => `id contain is ${id}`;

var app = document.getElementById('root');
app.innerHTML = '<h1> Hi there '+message.name+test()+'</h1>';

if (module.hot) {
    module.hot.accept();
}