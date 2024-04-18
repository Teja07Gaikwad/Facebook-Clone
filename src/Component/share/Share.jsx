import React from 'react'
import './share.css'
import { EmojiEmotions, Label, PermMedia, Room } from '@mui/icons-material'

const Share = () => {
  return (
    <div className="share">
        <div className="shareWrapper">
            <div className="shareTop">
                <img className='shareProfileImg' src="src\assets\Person\2.jpg" alt="" />
                <input placeholder='Aj ka din bahut accha' className='shareInput'/>
            </div>
            <hr className='shareHr'/>
            <div className="shareBottom">
                <div className="shareOptions">
                    <div className="shareOption">
                        <PermMedia className='shareIcon' htmlColor='tomato'/>
                        <span className="shareOptionText">Photo & Video</span>
                    </div>
                </div>
                <div className="shareOptions">
                    
                    <div className="shareOption">
                        <Label className='shareIcon' htmlColor='blue'/>
                        <span className="shareOptionText">Tag</span>
                    </div>
                </div>
                <div className="shareOptions">
                    <div className="shareOption">
                        <Room className='shareIcon' htmlColor='green'/>
                        <span className="shareOptionText">Room</span>
                    </div>
                </div>
                <div className="shareOptions">
                    <div className="shareOption">
                        <EmojiEmotions className='shareIcon' htmlColor='goldenrod'/>
                        <span className="shareOptionText">Feelings</span>
                    </div>
                </div>
                <button className='shareButton'>Share</button>
            </div>
        </div>
    </div>
  )
}

export default Share