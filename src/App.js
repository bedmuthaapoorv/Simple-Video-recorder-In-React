import logo from './logo.svg';
import './App.css';
import { ReactMediaRecorder } from "react-media-recorder";
import { useEffect, useRef } from 'react';
/*
const VideoPreview = ({ stream }: { stream: MediaStream | null }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current && stream) {
      videoRef.current.srcObject = stream;
    }
  }, [stream]);
  if (!stream) {
    return null;
  }
  return <video ref={videoRef} width={500} height={500} autoPlay controls />;
};

const App = () => (
  <ReactMediaRecorder
    video
    render={({ previewStream }) => {
      return <VideoPreview stream={previewStream} />;
    }}
  />
);*/
const VideoPreview=(props)=>{
  const stream=props.stream;
  console.log(stream)
  const videoRef=useRef(null); 
  useEffect(()=>{
    if (videoRef.current && stream) {
      videoRef.current.srcObject = stream;
    }
  },[stream])
  if (!stream) {
    return null;
  }
  return (
  <div style={{
    display:"flex",
    justifyContent:"center",
    flexDirection:"column",
    alignItems:"center"
  }}>
    Live Preview
  <video ref={videoRef} width="390vw" autoPlay />
  </div>
    );
  
}
function liveStream(stream){
  const previewStream=stream;
  if(previewStream!=null){
    return <VideoPreview stream={previewStream} />
  }
}
function download(mediaBlobUrl){
  if(mediaBlobUrl!=null){
  
  return (<a id="mediaDownload" href={mediaBlobUrl} download="apoorv.mp4" style={{display:'none'}}>
  hi
</a>)
}

}
  function Dwn(){
    
    useEffect(()=>{
      const a=document.getElementById("mediaDownload")
      if(a){
        a.click()
      }
    })
    return <></>
  }
  function App() {
    
    return (
    <div className="App" style={{
      display:"flex",
      justifyContent:"center",
      flexDirection:"column",
    }}>
      Video Capture Tool For eKYC 
      <p>
      <ReactMediaRecorder
      video
      audio={false}
      render={({ status, startRecording, stopRecording, mediaBlobUrl,previewStream}) => (
        <div>
          <p>Status : {status}</p>
          <div style={{
            display:"flex",
            justifyContent:"space-around"
          }}>
          <button onClick={startRecording} style={{
            width:"15vw",
            height:"10vh"
          }}>Start Recording</button>
          <button onClick={stopRecording} style={{
            width:"15vw",
            height:"10vh"
          }}>Stop Recording</button>
          </div>
            <div style={{
              display:"flex",
              justifyContent:"center",
              alignItems:"center"
            }}>
           <div style={{
             display:"flex",
             justifyContent:"center",
             alignItems:"center",
             flexDirection:"column"
           }}>
             Recorded Video
           <video width="390vw" src={mediaBlobUrl} controls></video>
           </div>
            {download(mediaBlobUrl)}          
            {/* {Dwn()} */}
           {liveStream(previewStream)}
           </div>
        </div>
      )}
    />
      </p>
    </div>
  );
}

export default App;
