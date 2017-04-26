import React from 'react'
import { Panel, PanelHeader, PanelFooter, Text, Close, Space, Button } from 'rebass'

const NewEntry = ({onDismiss}) => {
  return <div className='NewEntry' style={{ maxWidth: '720px' }}>
    <Panel theme='info'>
      <PanelHeader
        inverted
        theme='default'
        >
        <Text> Add Entry </Text>
        <Space auto />
        <Close onClick={onDismiss} />
      </PanelHeader>
      <Text>
    Form goes here.
  </Text>
      <PanelFooter theme='default'>
        <Button> Submit </Button>
      </PanelFooter>
    </Panel>
  </div>
}

export default NewEntry
