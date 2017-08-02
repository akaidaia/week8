// What do we have to do to get type something and have it show up in the list

// Click on submit button
// Know what is in the input
// Create the list element
// Add the value of the input into the list element
// Add 'list element' to bottom of '.list'
//

const button = document.querySelector('button')
const list = document.querySelector('.list')
const form = document.querySelector('form')

// click button to add
button.addEventListener('click', function (event) {
	event.preventDefault()
	const input = document.querySelector('input')
	const listElement = document.createElement('li')
	listElement.innerHTML = input.value
	list.append(listElement)

	form.reset()

})

// press enter to add
form.addEventListener('submit', function (event) {
	event.preventDefault()

	const listElement = document.createElement('li')
	listElement.innerHTML = input.value
	list.append(listElement)

})

const forms = document.querySelectorAll('form')
forms.forEach(function (form, index) {
	form.style.fontSize = '20px'
	const input = form.querySelector('input')
	console.log(index)
	if (index === 0) {
		input.style.border = '1px solid yellow'
	} else {
		input.style.border = '1px solid green'
	}
})


// when we click on any list item
// know which item we clicked on
// remove the list item from the '.list'

function removeListItem (event) {
	console.log(this)
}

const listItems = list.querySelectorAll('li')
listItems.forEach(function (item) {
	item.addEventListener('click', function () {
		console.log('item clicked')
	})
})