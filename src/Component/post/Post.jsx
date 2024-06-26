import { MoreVert } from '@mui/icons-material'
import './post.css'
import { Users } from '../../../dummydata'
import { useState } from 'react'

const Post = ({post}) => {
const [like, setLike]= useState(post.like)
const [isLiked, setisLiked]= useState(post.like)
const likehandler =()=>{
    setLike(isLiked? like-1: like+1)
    setisLiked(!isLiked)
}
    return (
    <div className="post">
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img src={Users.filter((u)=>u.id===post?.userId)[0].profilePicture} alt="" className='postProfileImg'/>
                    <span className="postUsername">{Users.filter((u)=>u.id===post?.userId)[0].username}</span>
                    <span className="postDate">{post.date}</span>
                </div>
                <div className="postTopRight">
                    <MoreVert/>
                </div>
            </div>
            <div className="postCenter">
                <span className="postText">{post?.desc}</span>
                <img src={post.photo} alt="" className='postImg'/>
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    <img onClick={likehandler} className='likeIcon' src="src\assets\Person\like.png" alt="" />
                    <img onClick={likehandler} className='likeIcon' src="src\assets\Person\heart.png" alt="" />
                    <span className="postLikeCounter">{like}</span>
                </div>
                <div className="postBottomRight">
                    <span className="postCommentText">{post.comment} Comments</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Post