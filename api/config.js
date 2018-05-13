module.exports = {
	name: 'API',
	env: process.env.NODE_ENV || 'development',
	port: process.env.PORT || 8080,
	base_url: process.env.BASE_URL || 'http://localhost:8080',
	db: {
		uri: process.env.DB_CONNECTION_PG || 'postgres://localhost:5432/egdb',
	},
};
