$(document).ready(function() {
	var allarticles = {};
	var myUrl = 'http://content.guardianapis.com/search?api-key=8jytc2dmqf5mrb8vpxaz9mjz&ion&section=';

	$('#tab1').show(function() {
		var t = $(this).attr('data-t');
		console.log(t);
		myAjaxCall(t);
	});	

	function myAjaxCall(t) {
		// t refers to prop of allarticles 
		if(allarticles[t] && allarticles[t].length > 0){
			renderHtml(allarticles[t]);
		} else {
			var url = myUrl + t;
			console.log(url);
			$.ajax({
			type: 'GET',
			url: myUrl + t,
			success: function(data) {
			// console.log(data);
			allarticles[t] = data.response.results
			console.log(allarticles[t]);
			renderHtml(allarticles[t]);
			}
			}); 
		}
	};

	function renderHtml(articles) {
		var html = '';
		$.each(articles, function(index, item) {
			html += "<li><a href='" + articles[index].webUrl + "' target=_blank>" + articles[index].webTitle + "</a></li>"
		});	
		var $articles = $('#articles');
		$articles.html(html);		
	}


	$('.tab').click(function() {
		var t = $(this).attr('data-t');
		console.log(t);
		myAjaxCall(t);
	});	

	// $('#tab2').click(function() {
	// 	var t = "sport";
	// 	//var t = $(this).attr('data-t');
	// 	console.log(t);
	// 	myAjaxCall(t);
	// });

	// $('#tab3').click(function() {
	// 	var t = $(this).attr('data-t');
	// 	console.log(t);
	// 	myAjaxCall(t);
	// });
});

// //$('.news-tab').click(function() {
// 		$('#' +tabId).toggle(function() {
// 			t = ('#t');
// 			myAjaxCall();