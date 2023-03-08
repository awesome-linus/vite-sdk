const showIframe = (elementId: string)  => {
  const iframe = document.createElement("iframe");
  iframe.src = "https://www.youtube.com/embed/WPK50Qtz2Z0";
  iframe.style.width = "400px";
  iframe.style.height = "400px";
  document.getElementById(elementId)?.appendChild(iframe);
}

window.showIframe = showIframe
