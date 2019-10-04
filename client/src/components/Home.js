import React from 'react';
import axios from 'axios';
import PlayerList from './PlayerList'
export default class Home extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            players: []
        }
    }


    componentDidMount(){
        axios.get('http://localhost:5000/api/players')
        .then(response => {
            console.log(response.data);
            this.setState({
                players: response.data
            })
        })
        .catch(error => console.log(error))
    }

    render(){
        const {players} = this.state
        return(
            <PlayerList players={players} />
        )
    }
}