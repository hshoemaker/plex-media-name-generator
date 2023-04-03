// From main page via HTML
// Title => h1.hero__pageTitle > span
// Id => from url
// Year => 

// From main page viat JS Objects
// in __NEXT_DATA__ -> props -> pageProps -> mainColumnData
// id = the Id I need
// titleType.id = is it a movie or tv show
// titleText.text = Title
// releaseYear.year = release year
// episodes.seasons = number of seasons (just for TV Shows)


async function generateMovieFileName() {
    let nextDataObj = JSON.parse(document.getElementById('__NEXT_DATA__').textContent);
    let movieData = nextDataObj.props.pageProps.mainColumnData;
    let fileName = `${movieData.titleText.text} (${movieData.releaseYear.year}) {imdb-${movieData.id}}`;
}

setTimeout(generateMovieFileName, 1000);

// Generate Movie Title
//===============================================


// Generate TV Show Title
//===============================================


// Generate TV Show Episode Titles
//===============================================
// Go to episodes, choose the desired season
// h3#episode_top => Season name
// div.eplist > div.list_item > 
//      div.info > 
//          meta["itemprop=episodeNumber"] => prop.content => episode number
//          strong > a => Episode Title
//      div.image
//          a > div.hover-over-image > div => season and episode (i.e. "S3, Ep7")