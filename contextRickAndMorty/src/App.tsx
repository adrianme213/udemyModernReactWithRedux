import React, { Fragment } from 'react';
import { Store } from './Store';
import { IAction, IEpisode } from './interfaces';


const EpisodesList = React.lazy<any>(() => import('./EpisodesList'));

export default function App():JSX.Element {
  const { state, dispatch } = React.useContext(Store);

  const fetchDataAction = async () => {
    const URL = 'https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty-&embed=episodes';
    const data = await fetch(URL);
    const dataJSON = await data.json();
    return dispatch({
      type: 'FETCH_DATA',
      payload: dataJSON._embedded.episodes
    });
  }

  const toggleFavAction = (episode: IEpisode):IAction => {
    let newFavorites = [...state.favorites];
    if (state.favorites.includes(episode)) {
      newFavorites = newFavorites.filter((epi: IEpisode) => epi !== episode);
    } else {
      newFavorites.push(episode);
    }
    return dispatch({
      type: 'TOGGLE_EPISODE_ON_FAVORITES',
      payload: newFavorites
    })
  }

  const props = {
    episodes: state.episodes,
    favorites: state.favorites,
    toggleFavAction
  }

  React.useEffect(() => {
    if (state.episodes.length === 0) {
      fetchDataAction()
    }
  });

  return (
    <Fragment>
      <header className="header">
        <h1>Rick and Morty</h1>
        <p>Pick your favorite episode!</p>
      </header>
      <React.Suspense fallback={<div>Loading Episodes...</div>}>
        <EpisodesList {...props} />
      </React.Suspense>
    </Fragment>
  )
}
