import React from "react";
import { useLocalStorage } from './hooks/useLocalStorage'

export default class PlayerList extends React.Component {
  render() {
    const { players } = this.props;

    return (
      <>
        {players.map(player => (
          <Player key={player.id} player={player} />
        ))}
      </>
    );
  }
}

export function Player({ player }) {
    const [, setPlayerId] = useLocalStorage("id", null)
  return (
    <div onClick={ () => setPlayerId(player.id)} >
      <h3>{player.name}</h3>
      <h4>{player.country}</h4>
      <h5>{`Searches: ${player.searches}`}</h5>
    </div>
  );
}
