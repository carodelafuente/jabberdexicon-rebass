import React from 'react'
import { PageHeader } from 'rebass'
import WordOfTheDay from './WordOfTheDay'

const Home = () =>
  <div className='Home'>
    <PageHeader
      description='The ultimate tech jargon glossary.'
      heading='Hello, Jabberdexicon'
      m={1}
  />
    <WordOfTheDay />
  </div>
export default Home
