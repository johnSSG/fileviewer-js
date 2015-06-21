# fileviewer-js
JavaScript Library for using viewer.filelabel.co in your application, requires jQuery.

## Basic Usage
Load the document in the browser:

	var viewer = new Fileviewer({
		'apiKey':'YOUR_API_KEY',
		'doc':'https://viewer.filelabel.co/documents/file.pdf'
	});

Load the document in an iframe within an element on your page:

	var viewer = new Fileviewer({
		'apiKey':'YOUR_API_KEY',
		'doc':'https://viewer.filelabel.co/documents/file.pdf',
		'target':'#viewer'
	});
	
## Further Info

Please note that this library will expose your API key if you use it in the browser, which is not recommended. Furthermore, if you need more complex integration with permissions, you should use a server side integration. You can read the documentation at:

https://filelabelexpress.com/software/document-viewer/viewer-documentation/
