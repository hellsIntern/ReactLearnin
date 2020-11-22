import React from 'react';

export default class ItemStatusFilter extends React.Component {

    render() {
        return (
            <div className="btn-group" role="group" aria-label="Basic example">
                <button type="button" className="btn btn-info pointer">All</button>
                <button type="button" className="btn btn-outline-secondary pointer">Active</button>
                <button type="button" className="btn btn-outline-secondary pointer">Done</button>
            </div>
        )
    }
}

