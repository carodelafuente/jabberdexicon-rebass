import React from 'react'
import { Block, Heading, Text } from 'rebass'

const WordOfTheDay = () => {
  return <div className='WordOfTheDay'>
    <Block
      borderLeft
      px={3}
      color='primary'>
      <Heading
        level={3}
        alt
        children='Word of The Day' />
      <Heading
        level={3}
        size={1}
        children='Programmatic Thinking' />
      <Heading level={3} size={2} />
      <Text color='black'>
         A core mindset for developers and coders,
         programmatic thinking means approaching large problems
         by breaking them down into smaller, discrete steps,
         and describing specific objects into clearly defined
         values that a computer can understand.
       </Text>
    </Block>
  </div>
}

export default WordOfTheDay
