import React, { useEffect, useState } from "react";
import "./Home.css";
import Card from "./Card";
import { getDownloadURL, ref , uploadBytes} from "firebase/storage";
import {storage} from './Firebase'

const Home = () => {

    let [image , setImage] = useState(null)

    const handaleChange = (e)=>{
        setImage(e.target.files[0])
    }

    const uploadImage = async()=>{
        if(image){
            try {
                const storageref = ref(storage , `Images/${image.name}`)
    
                await uploadBytes(storageref , image);
    
                const url = await getDownloadURL(storageref)
                console.log("URL: " + url);

                
            } catch (error) {
                console.log("Error Occur");
            }
        }
    }

    useEffect(()=>{
        uploadImage()
    } , [image])

  return (
    <>
      <div className="container">
        <header>
          <input type="file" accept={"image/*"} id="img" onChange={(e)=>{handaleChange(e)}}/>
          <label htmlFor="img">Choose File</label>
        </header>
        <div className="list">
          <Card />
        </div>
      </div>
    </>
  );
};

export default Home;
