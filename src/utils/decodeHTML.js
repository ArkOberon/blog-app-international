export const decodeHtml = (html) => {
  console.log(html);
  if (html) {
    const textArea = document.createElement('textarea');
    textArea.innerHTML = html;
    return textArea.value;
  } else {
    return;
  }
};
