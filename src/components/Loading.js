import React, { Component } from 'react'
import { Ring } from 'react-awesome-spinners'

export default class Loading extends Component {
    render() {
        return (
            <div className="loading">
                <Ring />
            </div>
        )
    }
}
