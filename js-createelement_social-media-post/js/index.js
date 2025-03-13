console.clear();

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle('post__button--liked');
}

const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener('click', handleLikeButtonClick);

// Exercise:
// Use document.createElement() and append another social media post to the body.

//Create a new post with the appropriate styling
const newPost = document.createElement('article');
newPost.classList.add('post');
document.body.append(newPost);

//Create its children and append them
const newPostParagraph = document.createElement('p');
newPostParagraph.classList.add('post__content');
newPostParagraph.textContent = 'New Post Alert!!!! Lorem ipsum dolor, sit amet consectetur adipisicing elit.';
newPost.append(newPostParagraph);

const newPostFooter = document.createElement('footer');
newPostFooter.classList.add('post__footer');
newPost.append(newPostFooter);

//Create footer children and append them
const newSpan = document.createElement('span');
newSpan.classList.add('post__username');
newSpan.textContent = '@daniel10';
newPostFooter.append(newSpan);

const newButton = document.createElement('button');
newButton.classList.add('post__button');
newButton.textContent = '♥ Like';
newPostFooter.append(newButton);