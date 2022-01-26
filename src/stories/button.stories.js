import React from 'react'
import Button from './button'

export default {
  title: 'Form/Button',
  component: Button,
  args: {
    children: 'Button'
  }
}

export const Pomodoro = () => <Button color='pomodoro'>Pomodoro</Button>
export const Short_Break = () => <Button color='short_break'>Short break</Button>
export const Long_Break = () => <Button color='long_break'>long break</Button>