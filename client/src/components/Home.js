import React from "react";
import axios from "axios";
import PlayerList from "./PlayerList";

import {
    LineChart,
    Line,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip
  } from "recharts";
  
export default class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      players: [],
      countries: []
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/api/players")
      .then(response => {
        console.log(response.data);
        const countries = response.data.map(player => player.country);

        var counts = {};

        for (var i = 0; i < countries.length; i++) {
          var num = countries[i];
          counts[num] = counts[num] ? counts[num] + 1 : 1;
        }
        const von = {};
        let a = []
        const keys = Object.keys(counts)
        console.log(keys);
        
        var b = 0;
        for(var country in counts){
            von.name = keys[b]
            von.count = counts[country]
            b = b+ 1;
            // console.log(country);
            console.log(von);
            
            this.setState(previous => {
                return {
                    countries: [...previous.countries, von]
                }
            })
            
        }
        console.log(a);
        
        // console.log(counts)

        this.setState({
          players: response.data
        });
      })
      .catch(error => console.log(error));
  }

  render() {
    const { players, countries } = this.state;
    return (
      <div>
        <PlayerList players={players} />

        <LineChart
          width={400}
          height={400}
          data={countries}
          margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
        >
          <XAxis dataKey="name" />
          <YAxis dataKey="count" />
          <Tooltip />
          <CartesianGrid stroke="#f5f5f5" />
          <Line type="monotone" dataKey="count" stroke="#000" yAxisId={0} />
          <Line type="monotone" dataKey="Argentina" stroke="#387908" yAxisId={1} />
        </LineChart>
      </div>
    );
  }
}
