import React, { Component } from 'react'
import NewEntry from './NewEntry'
import Home from './Home'
import LetterIndex from './LetterIndex'
import SearchResult from './SearchResult'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import { Toolbar,
  NavItem,
  Button,
  Text,
  InlineForm,
  Overlay,
  Space,
  Footer } from 'rebass'

import theme from './theme'

class App extends Component {
  state = {
    modal: false
  }

  _toggle = () => {
    this.setState({
      modal: !this.state.modal
    })
  }

  static childContextTypes = {
    rebass: React.PropTypes.object
  }

  getChildContext () {
    return {
      rebass: theme
    }
  }
  render () {
    return <Router>
      <div className='App'>
        <Toolbar>
          <NavItem is={Link} to='/'> The Jabberdexicon </NavItem>
          <Space auto />
          <InlineForm
            buttonLabel='Search'
            label='InlineForm'
            name='inline_form'
            onChange={function noRefCheck () {}}
            onClick={function noRefCheck () {}}
            backgroundColor='white'
        />
        </Toolbar>
        <LetterIndex />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/search/:word' component={SearchResult} />
        </Switch>
        <Footer>
          <Text> Built with &hearts; at The Iron Yard. </Text>
          <Space auto />
          <Button onClick={this._toggle}> Add New Entry </Button>
        </Footer>
        <Overlay open={this.state.modal}>
          <NewEntry onDismiss={this._toggle} />
        </Overlay>
      </div>
    </Router>
  }
}

export default App
