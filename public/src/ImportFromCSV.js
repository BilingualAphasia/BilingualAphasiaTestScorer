
var importFromCSV = function(filename){
	var output= document.getElementById('data_area');
	var contents= output.innerHTML.split("\n");
	if(contents[0].length < contents[1].length){
		return;
	}
	output.innerHTML="";
	
	var header  = contents[0].split(",");
	contents.splice(0,1);
	var rows = [];
	for(r in contents){
		var rowobj = [];
		var rowcontents = contents[r].split(",");
		for (c in rowcontents){
			var obj = {};
			obj.question = header[c];
			obj.response = rowcontents[c];
			rowobj.push(obj);
			var q = document.createElement("div");
			q.innerHTML="<span class='question'>"+header[c]+"</span> : <span class='response'>"+rowcontents[c]+"</span>";
			output.appendChild(q);
		}
		rows.push(rowobj);
	}
	window.rows = rows;
	

};
/*
 HTML5 Drag and Drop, for more information http://www.html5rocks.com/en/tutorials/file/dndfiles/
 */
	
(function() {
	var APP = this.APP || {};
	var data_area = document.getElementById('data_area');
	if(! data_area){
		return;
	}
	
	console.log("Loading APP file functions.");
	APP.file = {
			readBlob : function (file, opt_startByte, opt_stopByte) {
				//console.log(this);
				var start = parseInt(opt_startByte) || 0;
				var stop = parseInt(opt_stopByte) || file.size - 1;
				var reader = new FileReader();

				// If we use onloadend, we need to check the readyState.
				reader.onloadend = function(evt) {
					if (evt.target.readyState == FileReader.DONE) { // DONE == 2
						document.getElementById('data_area').textContent = evt.target.result;
						document.getElementById('byte_range').textContent = [ '' ]
						.join('');
					}
				};

				if (file.webkitSlice) {
					var blob = file.webkitSlice(start, stop + 1);
				} else if (file.mozSlice) {
					var blob = file.mozSlice(start, stop + 1);
				}
				//reader.readAsBinaryString(blob);
				reader.readAsText(file);
			},
			handleFileSelect: function (evt) {
				//console.log("Handling file select.");
				evt.stopPropagation();
				evt.preventDefault();

				var files = evt.dataTransfer.files; // FileList object.

				// files is a FileList of File objects. List some properties.
				var output = [];
				for ( var i = 0, f; f = files[i]; i++) {
					output.push('<li><strong>', f.name, '</strong> (', f.type
							|| 'n/a', ') - ', f.size,
							' bytes, last modified: ', f.lastModifiedDate
							.toLocaleDateString(), '</li>');
					/*
				Read in the file
					 */
					var startByte = 0;
					var endByte = 512;
					APP.file.readBlob(f, startByte, endByte);
				}
				document.getElementById('list').innerHTML = '<ul>'
					+ output.join('') + '</ul>';
			},
			handleDragOver: function (evt) {
				//console.log(this);
				evt.stopPropagation();
				evt.preventDefault();
				evt.dataTransfer.dropEffect = 'copy'; // Explicitly show this is a copy.
			}
	};
	document.body.addEventListener('dragover', APP.file.handleDragOver, false);
	document.body.addEventListener('drop', APP.file.handleFileSelect, false);

}());
