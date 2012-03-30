/*
 * Author: David Bamber <dbamber@gmail.com>
 * http://bmbr.co
 * 
 * Usage: 	node test.js -u <googleuser> -p <googlepass> 
 * 			node test.js -u <googleuser> -p <googlepass> -regex -url /feeds/default/private/full
 * 
 * Optional Fags:
 * 			-url [url]: requests a different uri from docs api, defaults to /feeds/default/private/full/-/table
 * 			-regex: applies a regex to try and sanitize output 	
 * 
 * Requires: googleclientlogin (npm install googleclientlogin)
 * 
 */

var user = '';
var pass = '';
var doregex = false;
var url = '/feeds/default/private/full/-/table';
var resultFunction = logResult;

for (var i =2;i<process.argv.length;i++)
{
	switch (process.argv[i])
	{
		case '-u':
			user = process.argv[i+1];
			i++;
			break;
		case '-p':
			pass = process.argv[i+1];
			i++;
			break;
		case '-url':
			url = process.argv[i+1];
			i++;
			break;
		case '-regex':
			doregex = true;
			break;
	}
	
}

if (doregex) resultFunction = matchResult;

function logResult (chunk) { console.log(chunk.toString()); }

function matchResult (chunk) {			
	var res = chunk.toString().match('<id>(.*?)</id>.*?<title>(.*?)</title>');
	if (res)
	{
		console.log('Title: ' + res[2] + ' ID: ' + res[1]);
	}				
};
  		
function get(url,callback)
{

	var options = {
		host: 'docs.google.com',
		port: 443,
	    path:  url,
	    method: 'GET',
	    headers: {
	      'Authorization': 'GoogleLogin auth=' + ga.getAuthId()
	      ,'GData-Version': '3.0'
	     }
	};
	
	var req= require('https').request(options,callback);
	req.end();
}

var google2=require('googleclientlogin');
var gac = google2.GoogleClientLogin;

var ga = new gac({
		email: user,
		password: pass,
		service: 'docs',
		accountType: gac.accountTypes.google
	})
	
ga.on(gac.events.login, function(){
	var resFunc = function (res)
	{
		res.on('data', resultFunction);
	}; 
	get(url,resFunc);
});

ga.on(gac.events.error, function(e) {
	
	console.log('ERROR');
});
  	
ga.login();
	
