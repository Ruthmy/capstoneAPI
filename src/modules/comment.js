  // const commentDate = () => {
  //   const today = new Date();
  //   const [dd, mm, yyyy] = [
  //     today.getDate(),
  //     today.getMonth(),
  //     today.getFullYear(),
  //   ];
  //   const commentDate = `${dd}/${mm}/${yyyy}`;
  //   return commentDate;
  // };

  // const countComment = () => {
  //   const total = allComments.lastElementChild.childElementCount;
  //   return `Comments(${total})`;
  // };

  // const addComment = () => {
  //   if (ul.firstChild.innerText === 'No comments yet.') {
  //     clearComment();
  //   }

  //   const li = document.createElement('li');
  //   ul.append(li);
  //   li.innerText = `${commentDate()} ${name.value}: ${insight.value}`;
  //   const values = [name.value, insight.value];
  //   clearForm();
  //   return values;
  // };

  // const showComments = async (response) => {
  //   const comments = await response;
  //   if (comments.error) {
  //     const li = document.createElement('li');
  //     ul.append(li);
  //     li.innerText = 'No comments yet.';
  //   } else {
  //     comments.forEach((item) => {
  //       allComments.firstElementChild.innerText = countComment();
  //       const li = document.createElement('li');
  //       ul.append(li);
  //       li.innerText = `${commentDate()} ${item.username}: ${item.comment}`;
  //     });
  //     allComments.firstElementChild.innerText = countComment();
  //   }
  // };