import React from 'react';
import './inputBox.css';
import { useRef,useState,useEffect } from 'react';
import {uploadFile} from './API';
import { FaCopy } from 'react-icons/fa';


export default function InputBox() {
    const refToInputFile=useRef();

    const [file,setFile]=useState('');
    const [result,setResult]=useState('');

    const takeInput=()=>{
        refToInputFile.current.click();
    }

    useEffect(()=>{
        const getFile=async()=>{
            if(file){
                const data=new FormData();
                data.append("name",file.name);
                data.append("file",file);
                let response=await uploadFile(data);
                setResult(response.path);
                // console.log(result);
            }
        }
        getFile();

    },[file])

    const handleCopy = () => {
      navigator.clipboard.writeText(result)
        .then(() => {
          alert('Link copied to clipboard!');
        })
        .catch(err => {
          console.error('Failed to copy text: ', err);
        });
    };

    return (
      <div className="InputBox" style={{ overflow: "hidden", padding: 5, wordWrap: "break-word" }}>
        <h1>Share Freely</h1>
        <p>Click on Upload to Share Link</p>
        <button type="button" className="btn btn-primary" onClick={takeInput}>Upload</button>
        <input type="file" ref={refToInputFile} onChange={(e) => setFile(e.target.files[0])} style={{ display: "none" }} />
        <div className='link' style={{ display: '', alignItems: 'center', marginTop: '10px' }}>
          <a href={result} style={{ padding: '5px' }}>{result}</a>
          {result && (
            <button onClick={handleCopy} style={{ background: 'transparent', border: 'none', cursor: 'pointer', marginLeft: '10px' }}>
              <FaCopy size={20} />
            </button>
          )}
        </div>
      </div>
    );
  }
