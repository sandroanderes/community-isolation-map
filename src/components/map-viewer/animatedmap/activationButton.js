import React, { useState } from 'react'
import './activationButton.scss'

/** @type {{ event: string; event_action: string; event_label: string; }[]} */
export const ActivationButton = ({
  // @ts-ignore
  activate,
  // @ts-ignore
  deactivate,
  // @ts-ignore
  initialState,
  buttonTexts = ['Karte aktivieren', 'Karte sperren'],
  icon = ['moving.svg', 'lock.svg']
}) => {
  const [state, setState] = useState(initialState)
  return (
    <>
      {!state ? (
        <div
          className='buttonText'
          onClick={() => {
            activate()
            setState(true)
          }}
        >
          <img src={require('./move.svg')} width='30px' />
          <br />
          {buttonTexts[0]}
        </div>
      ) : (
        <div
          className='buttonText active'
          onClick={() => {
            deactivate()
            setState(false)
          }}
        >
          <img src={require('./move.svg')} width='30px' />
          <br />
          {buttonTexts[1]}
        </div>
      )}
    </>
  )
}
