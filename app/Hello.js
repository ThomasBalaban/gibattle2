import React from 'react'

class Hello extends React.Component {
    render() {
        console.log(this.props)
        return (
            <h2>
                Hello, {this.props.fname} {this.props.lname}
            </h2>
        )
    }
}

export default Hello