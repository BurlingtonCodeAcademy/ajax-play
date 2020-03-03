console.log('I got loaded by HTML');
alert('click me to load JSON');
window.fetch('/posts')
  .then(response => response.json()) /* Get Data */
  .then((json) => {
    const target = findElement();
    const postList = createParent();
    const posts = makeListItems(json);

    addChildrenToParent(posts, postList);
    addListToBody(postList, target);

    return undefined;
  });

function findElement() {
  // Find where the list will go
  const target = document.getElementById('response-text');
  return target
}

function createParent() {
  // Create the parent of the list items
  const postList = document.createElement('ol');
  return postList;
}

function makeListItems(json) {
  // For every post in the JSON
  // make a list item
  const posts = json.map((postData) => {
    const listItem = document.createElement('li')
    listItem.textContent = `ID: ${postData.id} - Title: ${postData.title} - Author: ${postData.author}`;
    return listItem;
  });
  return posts;
}

function addChildrenToParent(posts, postList) {
  // Add Each Post ListItem to the Parent <ol></ol>
  posts.forEach((post) => {
    postList.appendChild(post);
  });
}

function addListToBody(postList, target) {
  // Add the Parent List to the Body of the page
  target.appendChild(postList);
}
