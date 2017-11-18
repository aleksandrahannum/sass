$.getJSON('../package.json', function (data) {
 var element = document.createElement('p');
 element.innerHTML = 'Autorem jest' + data.author;
 document.body.appendChild(element);
//console.log(data);
});



//$.getJSON('../package.json', function (data) {
//   wstaw(data.author);
// 
//});
//
//function wstaw(author) {
//    $('span'),append(autor);
//}