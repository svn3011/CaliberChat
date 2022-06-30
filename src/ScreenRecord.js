/* eslint-disable react-hooks/rules-of-hooks */
import React,{useState,useEffect, Fragment} from 'react'
import { useReactMediaRecorder } from "react-media-recorder";
import {IconButton, Badge, Input, Button} from '@material-ui/core'
import CardMedia from '@material-ui/core/CardMedia';
import MovieIcon from '@material-ui/icons/Movie'
import StopIcon from '@material-ui/icons/Stop'
import Modal from 'react-bootstrap/Modal'
import 'bootstrap/dist/css/bootstrap.css'



export const ScreenRecord = () => {
  // const displayMediaOptions = { audio: true, video: true };

  // // { displayMediaOptions }
  //   const { isRecording, recording, toggleRecording } = useScreenRecording();

  const [screenRecord, setScreenRecord] = useState(false)

  let {
      status,
      startRecording,
      stopRecording,
      mediaBlobUrl,
      clearBlobUrl
    } = screenRecord ? useReactMediaRecorder({video:true, screen:true, audio:true, type: "video/mp4" }) :  useReactMediaRecorder({video: true, screen:true, audio:true });
    
  const changeToScreen = () => {
    setScreenRecord(!screenRecord)
  }

  const setUrlNull = () => {
      clearBlobUrl()
  }
  // useEffect(() => {
  //   startRecording()
  // },[screenRecord])

    return (
      <Fragment>
      <IconButton style={{ color: "#424242" }} onClick={status === 'idle' || status === 'stopped'? startRecording : stopRecording}>
			{status === 'idle' || status === 'stopped'? <MovieIcon /> : <StopIcon />}
	    </IconButton>
        {console.log(mediaBlobUrl)}
                <Modal show={mediaBlobUrl !== null} onHide={setUrlNull} style={{ zIndex: "999999" }}>
                    <Modal.Header closeButton>
                        <Modal.Title>Video Recorded</Modal.Title>
                    </Modal.Header>
                    <Modal.Body style={{ overflow: "auto", overflowY: "auto", height: "400px", textAlign: "left" }} >
                        <iframe height='100%' width='100%' src={mediaBlobUrl} />
                    </Modal.Body>
                </Modal>
        
      {/* <button onClick={startRecording}><i class="fas fa-cassette-tape"></i></button>
      <button onClick={stopRecording}>Stop Recording</button> */}
      {/* <video src={mediaBlobUrl} controls autoplay loop /> */}
    </Fragment>
        // <div>
        //   <Button onClick={toggleRecording}>
        //     {isRecording ? "Stop" : "Start Recording"}
        //   </Button>

        //   {!!recording && (
        //     <video autoPlay src={recording && URL.createObjectURL(recording)} />
        //   )}
          
        //   {console.log(recording && URL.createObjectURL(recording))}
        // </div>
    )
}
