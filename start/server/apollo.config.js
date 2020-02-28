module.exports = {
    client: {
        service: {
            name: 'apollo-server-tutorial',
            url: 'http://localhost:4000/graphql',
            includes: ['src/datasources/*.js'],
        }
    }
};