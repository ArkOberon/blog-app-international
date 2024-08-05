export const decodeHtml = (html) => {
  if (html) {
    const textArea = document.createElement('textarea');
    textArea.innerHTML = html;
    return textArea.value;
  } else {
    return;
  }
};
