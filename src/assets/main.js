const API =
  'https://youtube-v31.p.rapidapi.com/search?channelId=UCBYyJBCtCvgqA4NwtoPMwpQ&part=snippet%2Cid&order=date&maxResults=9';

const content = document.getElementById('content');

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'b080181a7amsh9c022612164facdp105e69jsn525632426e6d',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
  },
};

async function fetchData(urlApi) {
  const response = await fetch(urlApi, options)
    .then((res) => res.json())
    .catch(() => window.alert('Opps.. Ocurrio un error, intenta mas tarde.'));
  console.log(response);

  return response;
}

(async () => {
  const videos = await fetchData(API);

  const view = videos.items
    .map(
      (video) =>
        `<div class='group relative'>
          <div class='w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none'>
           <img
            src='${video.snippet.thumbnails.high.url}'
            alt='${video.snippet.description}'
            class='w-full'
           />
         </div>
        <div class='mt-4 flex justify-between'>
          <h3 class='text-sm text-gray-700'>
            <span>${video.snippet.title}</span>
          </h3>
        </div>
      </div>`
    )
    .join(' ');
  content.innerHTML = view;
})();
