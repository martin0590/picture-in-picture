import { useRef } from 'react'
import { usePIP } from './hooks/usePIP'
import './App.css'

const App = () => {
  const video = useRef(null)
  const { selectMediaStream, togglePIP, isActive } = usePIP({ video })

  return (
    <div className='app__container'>
      <h1 className='title'>Picture in Picture</h1>
      <video
        id='video'
        ref={video}
        controls
        height='360'
        width='360'
        hidden
      />
      <div className='button__container'>
        <button
          id='select'
          onClick={selectMediaStream}
        >
          Select Screen
        </button>
        <button
          id='button-toggle'
          onClick={togglePIP}
          disabled={isActive}
        >
          Toggle PIP
        </button>
      </div>
    </div>
  )
}

export default App
