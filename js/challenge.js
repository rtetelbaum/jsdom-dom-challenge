const counter = document.querySelector("#counter")
const minusBtn = document.querySelector("#minus")
const plusBtn = document.querySelector("#plus")
const likeBtn = document.querySelector("#heart")
const likeUl = document.querySelector(".likes")
const commentForm = document.querySelector("#comment-form")
const commentInput = document.querySelector("#comment-input")
const commentList = document.querySelector('#list')
const pauseBtn = document.querySelector("#pause")
const submitBtn = document.querySelector("#submit")



function countUp () {
	let count = parseInt(counter.textContent)
	count++
	counter.textContent = count
}

function countDown () {
	let count = parseInt(counter.textContent)
	count--
	counter.textContent = count
}

function addLike () {
	const existingLike = likeUl.querySelector(`[data-id = "${counter.textContent}"]`)
	if (existingLike) {
		existingLike.dataset.timesLiked++
		existingLike.textContent = existingLike.dataset.id + " has been liked " + existingLike.dataset.timesLiked + " times"
		console.log(existingLike)
	} else {
		const likeLi = document.createElement("li")
		const currentCount = counter.textContent
		likeLi.dataset.timesLiked = 1
		likeLi.dataset.id = currentCount
		likeLi.textContent = currentCount + " has been liked " + likeLi.dataset.timesLiked + " times"
		likeUl.append(likeLi)
	}
}

minusBtn.addEventListener("click", countDown)
plusBtn.addEventListener("click", countUp)
likeBtn.addEventListener("click", addLike)

pauseBtn.addEventListener("click", function() {
	if (pauseBtn.textContent === " pause ") {
		pauseBtn.textContent = " resume "
		plusBtn.disabled = true
		minusBtn.disabled = true
		likeBtn.disabled = true
		submitBtn.disabled = true
	} else if (pauseBtn.textContent === " resume ") {
		pauseBtn.textContent = " pause "
		plusBtn.disabled = false
		minusBtn.disabled = false
		likeBtn.disabled = false
		submitBtn.disabled = false
	}
})

commentForm.addEventListener("submit", function(event){
	event.preventDefault()
	const commentP = document.createElement('p')
	commentP.textContent = commentInput.value
	commentList.append(commentP)
	event.target.reset()
})

setInterval(countUp, [1000])     
