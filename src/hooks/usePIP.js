import { useState } from 'react'

export function usePIP ({ video }) {
  const [isActive, setIsActive] = useState(true)

  async function selectMediaStream () {
    try {
      const mediaStream = await navigator.mediaDevices.getDisplayMedia()
      video.current.srcObject = mediaStream
      video.current.onloadedmetadata = () => {
        video.current.play()
        video.current.requestPictureInPicture()
        setIsActive(false)
      }
    } catch (err) {
      console.log(err.message)
    }
  }

  async function togglePIP () {
    if (!video.current.srcObject) return
    if (document.pictureInPictureElement) {
      document.exitPictureInPicture()
    } else if (document.pictureInPictureEnabled) {
      await video.current.requestPictureInPicture()
    }
  }

  return {
    selectMediaStream,
    togglePIP,
    isActive
  }
}
