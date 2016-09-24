var womensNames = ['Asia', 'Kasia', 'Ola', 'Jola'];
var mensNames = ['Piotrek', 'Marek', 'Arek', 'Jarek']

var allNames = womensNames.concat(mensNames);

console.log(allNames);

var newName = 'Marian'

if (allNames.indexOf(newName) == -1) 
{
	var x = allNames.push(newName)

	console.log(allNames);
} 

else
{
	console.log('Imię nie może się powtarzać! Imię ' + newName + ' już jest w zestawieniu')
}