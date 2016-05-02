module.exports = 
{
	entry: "./js/app.js",
	output: 
	{
		path: __dirname + "/public/bundle",
		filename: "bundle.js"
	},
	module:
	{
		loaders:
		[
			{
				test: /\js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				query: 
				{
			    	presets: ['react', 'es2015']
			    }
			}
		]
	}
};