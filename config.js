const config = {
    mongoOptions: {
        mongoUrl: 'mongodb://localhost:27017/Boosting',
        options: {useNewUrlParser: true}
    },
    port: 27017,
    salt: 'Volantis',
    secretPhrase: 'Daenerys Targaryen'
}

module.exports = config;
