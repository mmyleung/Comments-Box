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
const form = document.getElementById('comment-form');
const submittedCommentContainer = document.getElementById('submitted-comment');
submittedCommentContainer.style.display = 'none';

function handleForm(event) {
    if (count.innerHTML >140) {
        event.preventDefault();
    } else {
    event.preventDefault();
    submittedCommentContainer.style.display = 'block';
    const comments = document.createElement('div');
    submittedCommentContainer.appendChild(comments);
    comments.innerHTML += commentBox.value;
    }
}
form.addEventListener('submit',handleForm);