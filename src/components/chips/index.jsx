import React, { Component } from 'react'
import './styles.scss'


class Chips extends Component {


    constructor( props ) {
        super( props );
        this.state = {
            chips: [
                "All", "Movie", "Series", "Short Movie", "Documentary"
            ],
            selected: 0
        }
        this.setChip = this.setChip.bind(this);
    }
    /**
     * Method to list all the chips
     */
    getChips() {
        let chipsList = [];
        for (let i = 0; i < this.state.chips.length; i++) {
            if (this.state.selected === i) {
                chipsList.push(<li key={i}  className="select">{this.state.chips[i]}</li>)
            } else {
                chipsList.push(<li key={i} onClick={()=> {this.setChip(i)}}>{this.state.chips[i]}</li>)
            }
        }

        return chipsList
    }

    /**
     * Method to set the current selected chip in state
     * @param {number} id 
     */
    setChip(id) {
        this.props.callback( this.state.chips[id].toLowerCase() );
        this.setState({
            selected: id
        });
    }

    render() {
        return (
            <div className="chips-layout">
                <ul>
                    { this.getChips() }
                </ul>
            </div>
        )
    }
}

export default Chips