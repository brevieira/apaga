import React from 'react';

class Alunos extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
            lista: [
            {
                nome:'brenno',
                polo:'prazeres',
                idade:'17 anos'
            },
            {
                nome:'jeziele',
                polo:'prazeres',
                idade:'33 anos'
            },
            {
                nome:'cicero',
                polo:'prazeres',
                idade:'24 anos'
            },
            {
                nome:'cassio',
                polo:'prazeres',
                idade:'21 anos'
            },
            {
                nome:'kamile',
                polo:'prazeres',
                idade:'16 anos'
            },
            {
                nome:'mateus',
                polo:'prazeres',
                idade:'20 anos'
            },
            {
                nome:'douglas',
                polo:'prazeres',
                idade:'19 anos'
            },
            {
                nome:'priscila',
                polo:'prazeres',
                idade:'35 anos'
            }
        ]
        }
    }

    render() {
        return (
        <div>
            {this.state.alunos.map((item, index) => {
                    return (
                        <div key={index}>
                            <h1>{item.nome}</h1>
                        </div>
                    );
                })
            }
        </div>
        ) 
    }
}


 export default Alunos;