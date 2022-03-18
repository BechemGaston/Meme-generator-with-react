import { useState } from "react";
import meme2 from "../images/meme2.png"
import data from "../memesData";


// function HandleCLick(){
//         const memesData = data
//         const randomNumber = Math.floor(Math.random() * memesData.length)
//         const memeName = memesData[randomNumber].name
//         console.log(memeName)
//     }




function BodyInput() {
  const [memeImg, setMemes] = useState(meme2)
  function AddMeme(){
    const newMeme = data
    const randomMeme = Math.floor(Math.random() * newMeme.length)
    const resultMeme = newMeme[randomMeme].profile
   setMemes(resultMeme)
  }
    return(
        <div className="bodyInput">
           <form action="">
             <input type="text" placeholder="Top text" />
             <input type="text" placeholder="Bottom text" /><br />
           </form>
            <button type="submit" onClick={AddMeme}>Get a new meme image <i class="fa-solid fa-image"></i> </button>
               <div className="meme-photo" >
                <img src={memeImg} className="meme2" alt="meme1" />
              </div>
            
        </div>
    )
}

export default BodyInput;