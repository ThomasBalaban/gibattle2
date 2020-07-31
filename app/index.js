import React from 'react'
import ReactDom from 'react-dom'
import Popular from './components/Popular'
import Battle from './components/Battle'
import Results from './components/Results'
import './index.css'
import { ThemeProvider } from './contexts/theme'
import Nav from './components/Nav'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'

// props are to components as arguments are to functions

// compnent can have - state - lifecycle - UI
class App extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            theme: 'light',
            toggleTheme: () => {
                this.setState( ({theme}) => ({
                    theme: theme === 'light' ? 'dark' : 'light'
                }))
            },
        }
    }

    render() {
        return (
            <Router>
                <ThemeProvider value={this.state}>
                    <div className={this.state.theme}>
                        <div className='container'>
                            <Nav />
                            <Switch>
                                <Route exact path='/' component={Popular} />
                                <Route exact path='/battle' component={Battle} />
                                <Route path='/battle/results' component={Results} />
                                <Route render={ () => <h1>404</h1>} />
                            </Switch>
                        </div>
                    </div>
                </ThemeProvider>
            </Router>
        )
    }
}

ReactDom.render(
    // takes two params - react element then where to render
    <App />,
    document.getElementById("app")
)