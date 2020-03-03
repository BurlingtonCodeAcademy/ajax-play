console.log('I got loaded by HTML');
alert('click me to load JSON');
window.fetch('/posts')
  .then(response => response.json()) /* Get Data */
  .then((json) => {
    // Find where the list will go
    const target = document.getElementById('response-text');

    // Create the parent of the list items
    const postList = document.createElement('ol');

    // For every post in the JSON
    // make a list item
    const posts = json.map((postData) => {
      const listItem = document.createElement('li')
      listItem.textContent = `ID: ${postData.id} - Title: ${postData.title} - Author: ${postData.author}`;
      return listItem;
    });

    // Add Each Post ListItem to the Parent <ol></ol>
    posts.forEach((post) => {
      postList.appendChild(post);
    });

    // Add the Parent List to the Body of the page
    target.appendChild(postList);
    return undefined;
  });
