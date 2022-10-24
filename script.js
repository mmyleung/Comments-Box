console.log('Hello!');
const commentBox = document.getElementById('comment');
const count = document.getElementById('count');
commentBox.onkeyup = function() {
count.innerHTML = commentBox.value.length;
if (count.innerHTML > 140) {
commentBox.style.borderColor = 'red';
} else {
    commentBox.style.borderColor = 'blue';
}
}