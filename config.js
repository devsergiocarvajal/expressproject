
var config = {
	db: {
		host: '127.0.0.1',
		user: 'root',
		password: '123456',
		database: 'codejobs',
		port: 3306,
		debug: true,
	 	//socket: '/var/run/mysqld/mysqld.sock', // For linux...
		socket: '/Applications/XAMPP/xamppfiles/var/mysql/mysql.sock' //For mac...
 	},

	site: {
		url: 'http://localhost:3000',
		title: 'Express',
		language: 'en',
		html: {
			engine: 'jade',
			minify: false
	 	}
 	},

  application: {
    controllers: {
      default: 'index'
    },
    langs : ['en', 'es'],
    languages : 'en|es'
  }
};

module.exports = config;
