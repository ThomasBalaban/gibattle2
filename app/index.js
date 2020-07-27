import React from 'react'
import ReactDom from 'react-dom'
import Popular from './components/Popular'
import './index.css'

// props are to components as arguments are to functions

// compnent can have - state - lifecycle - UI
class App extends React.Component {
    render() {
        return (
            <div className='container'>
                <Popular />
            </div>
        )
    }
}

ReactDom.render(
    // takes two params - react element then where to render
    <App />,
    document.getElementById("app")
)