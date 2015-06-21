function Fileviewer(i) {
	this.o = {
		apiKey:false,
		doc:false,
		target:false
	}
	this.opts = $.extend({}, this.o, i);
	this.baseUrl = 'https://viewer.filelabel.co/?';
	this.url = 'https://viewer.filelabel.co/api/?';
	this.fileViewerToken = false;
	
	this.init = function(){
		var that = this;
		this.auth = this.auth(function(){
			that.load(this.fileViewerToken);
		});
	}
	
	this.auth = function(callback){
		if(this.fileViewerToken) {
			return this.fileViewerToken;
		} else {
			this.getResponse({
				'apiKey':this.opts.apiKey,
				'action':'auth'
			}, function(response){
				this.fileViewerToken = response.output.accessToken;
				$('body').trigger('fileviewerAuth');
				callback();
			});
		}
	}
	
	this.getResponse = function(params, callback) {
		var url = this.url+$.param(params);
		var that = this;
		$.getJSON(url, function(response){
			if(that.processResponse(response)){
				if(typeof callback !== 'undefined') {
					callback(response);
				}				
			}
		});
	}
	
	this.load = function(token){
		if(token) {
			if(this.opts.doc) {
				var url = this.baseUrl+'accessToken='+token+'&doc='+encodeURIComponent(this.opts.doc);
				if(this.opts.target) {				
					$(this.opts.target).html('<iframe src="'+url+'"></iframe>');
				} else {
					window.location.href = url;
				}
			}				
		}
	}
	
	this.processResponse = function(response) {
		var error = '';
		if(response.hasOwnProperty('error')) {
			$.each(response.error, function(key, value) {
				error += value+"\n";
			});
		}
		if(error != '') {
			alert(error);
			return false;
		} else {
			return true;
		}
	}	

	this.init();
}
