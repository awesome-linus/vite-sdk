import axios from "axios";

const showIframe = (elementId: string)  => {
  const iframe = document.createElement("iframe");
  iframe.src = "https://www.youtube.com/embed/WPK50Qtz2Z0";
  iframe.style.width = "400px";
  iframe.style.height = "400px";
  document.getElementById(elementId)?.appendChild(iframe);
}

const testOuterLib = async () => {
  const res = await axios.get("https://api.github.com/octocat")
  console.log(res.data);
  console.log(res.status);
}

window.showIframe = showIframe
window.testOuterLib = testOuterLib
