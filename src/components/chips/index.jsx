import React, { Component } from 'react';

import Styles from './styles.module.scss';

class Chips extends Component {


    constructor( props ) {
        super( props );
        this.setChip = this.setChip.bind(this);
    }


    /**
     * Method to list all the chips
     */
    getChips() {
        let chipsList = [];
        for (let i = 0; i < this.props.chips.length; i++) {
            if (this.props.chipId === i) {
                chipsList.push(<li key={i}  className={ Styles.select }>{this.props.chips[i]}</li>)
            } else {
                chipsList.push(<li key={i} onClick={()=> {this.setChip(i)}}>{this.props.chips[i]}</li>)
            }
        }

        return chipsList
    }

    /**
     * Method to set the current selected chip in state
     * @param {number} id 
     */
    setChip(id) {
        this.props.callback( id );
        // this.setState({
        //     selected: id
        // });
    }

    render() {
        return (
            <div className={ Styles.chipLayout }>
                <ul>
                    { this.getChips() }
                </ul>
            </div>
        )
    }
}

export default Chips