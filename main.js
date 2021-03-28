function generateCat()
{
    
    var cat = document.createElement('img');
    cat.src="http://thecatapi.com/api/images/get?format=src&type=gif&size=small";
    var content = document.getElementById('content');
    content.appendChild(cat);
}