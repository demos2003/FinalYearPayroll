import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const FaceEnroll = () => {
    let faceioInstance = null

  useEffect(() => {
    const faceIoScript = document.createElement('script')
    faceIoScript.src = '//cdn.faceio.net/fio.js'
    faceIoScript.async = true
    faceIoScript.onload = () => faceIoScriptLoaded()
    document.body.appendChild(faceIoScript)

    return () => {
      document.body.removeChild(faceIoScript)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const faceIoScriptLoaded = () => {
    console.log(faceIO)
    if (faceIO && !faceioInstance) {
      faceioInstance = new faceIO('fioade7a')
    }
  }

  const faceRegistration = async () => {
    try {
      const userInfo = await faceioInstance.enroll({
        locale: "auto",
      })
      console.log(userInfo)
      console.log('Unique Facial ID: ', userInfo.facialId)
    
  
      // Send the unique facial ID to the server using Axios
      await axios.post('/api/enroll', {
       
        facialId: userInfo.facialId,
      })
  
    } catch (errorCode) {
      console.log(errorCode)
      handleError(errorCode)
    }
  }


  return (
    <div>FaceEnroll</div>
  )
}

export default FaceEnroll