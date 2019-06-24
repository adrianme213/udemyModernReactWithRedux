import React from 'react';
import { IEpisode } from './interfaces';

const EpisodesList =(props:any):JSX.Element => {
  const { episodes, favorites, toggleFavAction } = props;

  return (
    <div>
      <section className="episode-layout">
        {episodes.map((episode: IEpisode) => {
          if (episode.image === null) {
            episode.image = {};
            episode.image.medium = 'http://static.tvmaze.com/uploads/images/medium_landscape/15/37912.jpg';
          }
          return (
            <section key={episode.id} className="episode">
              <img src={episode.image.medium} alt={`Rick and Morty ${episode.name}`} />
              <div>{`${episode.name}`}</div>
              <section>
                Season: {episode.season} Number: {episode.number}
                <button type='button' onClick={() => toggleFavAction(episode)}>
                  {favorites.includes(episode) ? 'Unfavorite' : 'Fav'}
                </button>
              </section>
            </section>
          );
        })}
      </section>
      { favorites.length > 0 ? <h2 className="header">Favorites</h2> : null }
      <section className="episode-layout">
        {favorites.map((episode: IEpisode) => {
          if (episode.image === null) {
            episode.image = {};
            episode.image.medium = 'http://static.tvmaze.com/uploads/images/medium_landscape/15/37912.jpg';
          }
          return (
            <section key={episode.id} className="episode">
              <img src={episode.image.medium} alt={`Rick and Morty ${episode.name}`} />
              <div>{`${episode.name}`}</div>
              <section>
                Season: {episode.season} Number: {episode.number}
              </section>
            </section>
          );
        })}
      </section>
    </div>
  );
}

export default EpisodesList;
