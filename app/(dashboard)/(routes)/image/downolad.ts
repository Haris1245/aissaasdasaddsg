function forceDownload(blobUrl: string, filename: string) {
  let a = document.createElement("a");
  a.download = filename;
  a.href = blobUrl;
  document.body.appendChild(a);
  a.click();
  a.remove();
}

export default function downloadPhoto(url: string, filename: string) {
  const proxyServerUrl = 'http://localhost:3000/proxy'; // Replace with your proxy server URL
  const params = new URLSearchParams({ url, filename });

  fetch(`${proxyServerUrl}?${params}`, {
    mode: "cors",
  })
    .then(response => response.blob())
    .then(blob => {
      let blobUrl = window.URL.createObjectURL(blob);
      forceDownload(blobUrl, filename);
    })
    .catch(error => console.error(error));
}
