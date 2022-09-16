import React from 'react'
import { Settings, Add } from '@mui/icons-material'
import { Button, styled, Typography } from '@mui/material'

const BlueButton = styled(Button)({
  backgroundColor: 'skyblue',
  color: '#888',
  margin: 5,
  '&:hover': {
    backgroundColor: 'lightblue'
  },
  '&:disabled': {
    backgroundColor: 'gray',
    color: 'white'
  }
})

const App: React.FC = () => {
  return (
    <div>
      <Button
        variant="text">
          Text
      </Button>
      <Button
        startIcon={<Settings />}
        variant="contained"
        color="secondary" size="small"
        >
          Contained
      </Button>
      <Button
        startIcon={<Add />}
        variant="contained"
        color="success"
        >
          Add
      </Button>
      <Button
        variant="outlined"
        disabled
        >
          Outlined
      </Button>
      <Typography variant="h1" component="p">
        It uses h1 style but it&apos;s a p tag
      </Typography>
      <BlueButton variant="contained">
        My Unique Button
      </BlueButton>
      <BlueButton variant="contained" disabled>
        My Unique Button
      </BlueButton>
    </div>
  )
}

export default App
