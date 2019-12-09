import React from 'react';

class Aula4 extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            games: '',
        }
    }
    jogos = (games) =>{
        console.log(games)
        this.setState({
            games: games ,
        });
    }
    render (){
        return (
            <div className="jogo">
                <div>
                <button onClick={() => this.jogos('Grand Theft Auto V')}>click</button>
                <button onClick={() => this.jogos('Red Dead Redemption 2')}>click</button>
                <button onClick={() => this.jogos('God of War')}>ckick</button>
                </div>
                {this.state.games}
            </div>
        )
    }
} 

export default Aula4;