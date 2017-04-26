import React from 'react'
import { PageHeader } from 'rebass'
import WordOfTheDay from './WordOfTheDay'

const Home = () =>
  <div className='Home'>
    <PageHeader
      description='The ultimate tech jargon glossary.'
      heading='The Jabberdexicon'
      m={1}
  />
    <WordOfTheDay />
    {/* <Overlay open={this.state.modal}>
      <NewEntry onDismiss={this._toggle} />
    </Overlay> */}
  </div>
export default Home
