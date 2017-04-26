import React, { Component } from 'react'
import NewEntry from './NewEntry'
import Home from './Home'
import LetterIndex from './LetterIndex'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import { Toolbar,
  NavItem,
  Button,
  Text,
  InlineForm,
  Overlay,
  Space,
  Footer } from 'rebass'

class App extends Component {
  state = {
    modal: false
  }

  _toggle = () => {
    this.setState({
      modal: !this.state.modal
    })
  }

  _submit = (e) => {
    e.preventDefault()
    const query = this.refs.query.value
    const path = query.length > 0 ? `/search/${query}` : '/'
    this.props.history.push(path)
    this.setState({
      query
    })
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
            onSubmit={this._submit}
            backgroundColor='white'
        />
        </Toolbar>
        <LetterIndex />
        <Switch>
          <Route exact path='/' component={Home} />
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
