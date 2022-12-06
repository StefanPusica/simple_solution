import { useState, useEffect, useContext } from 'react'
import './SwitchToggleButton.css';
import SolutionContext from '../../context/SolutionContext'

function SwitchToggleButton() {

  // Bez Coocki-a
  const {setEnglish, changeLanguange} = useContext(SolutionContext)

  const onChange = () => {
    changeLanguange()
  }

 
  return (
    <div>
        <label className='switch'>
              <input 
                type="checkbox"
                onChange={onChange}
              />
              <span className='slider'></span>
        </label>
    </div>
  )
}

export default SwitchToggleButton