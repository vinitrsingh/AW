const searchForm = document.querySelector('.form');
const container = document.querySelector('.movieDisca');

const renderMovie = async (mName) => {
  let uri = 'https://www.omdbapi.com/?apikey=adad0835&t=';

  if(mName){
    uri += mName;
  }

  const res = await fetch(uri);
  const movies = await res.json();
  
  console.log(res.url);
  console.log(movies);

  let template = `
  <div class="movieDiscb">
    <p>Title : </p><p>${movies.Title}</p>
  </div>
  <div class="movieDiscb">
    <p>Year : </p><p>${movies.Year}</p>
  </div>
  <div class="movieDiscb">
    <p>Director : </p><p>${movies.Director}</p>
  </div>
  <div class="movieDiscb">
    <p>imdbRating :</p><p>${movies.imdbRating}</p>
  </div>
  `
  container.innerHTML = template;

  const notificationHandler = function(data) {
    // Do something with the notifications
  };

  const focusHandler = function() {
    // Do something when the visitor is focused
    // Assume the visitor is focused to begin with
  };

  const blurHandler = function() {
    // Do something when the visitor is blurred
    // Assume the visitor is focused to begin with
  };

  lpTag.agentSDK.init({
    notificationCallback: notificationHandler,
    visitorFocusedCallback: focusHandler,
    visitorBlurredCallback: blurHandler
  });

  const notifyWhenDone = function (err) {
    if (err) {
      console.log("Error Occurred in notifyWhenDone: " + err);
    }
  };

  const commandData = { text: 'Title:' + movies.Title + 'Year:' + movies.Year + 'Director:' + movies.Director + 'imdbRating:' + movies.imdbRating };

  lpTag.agentSDK.command(lpTag.agentSDK.cmdNames.write, commandData, notifyWhenDone);
}

searchForm.addEventListener('submit' , (e) => {
  e.preventDefault();
  mName = searchForm.term.value.trim();
  renderMovie(mName);
})

window.addEventListener('DOMContentLoaded', () => {
  // renderMovie();
});
