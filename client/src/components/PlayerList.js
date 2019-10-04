import React from "react";

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

function Player({ player }) {
  return (
    <div>
      <h3>{player.name}</h3>
      <h4>{player.country}</h4>
      <h5>{`Searches: ${player.searches}`}</h5>
    </div>
  );
}