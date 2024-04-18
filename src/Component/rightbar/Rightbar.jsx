import './rightbar.css'
import { Users } from '../../../dummydata'
import OnlineFriends from '../onlineFriends/OnlineFrineds'
const Rightbar = ({profile}) => {
  const HomeRightbar=()=>{
    return(
      <>
        <div className="birthdayContainer">
          <img className='birthdayImg' src="src\assets\Person\gift.png" alt="" />
          <span className="birthdayText">
          <b>ABCD</b> and <b>23 other friends</b> hav a birthday today.
          </span>
        </div>
        <img className='rightbarAd' src="src\assets\person\6.jpg" alt="" />
          <h4 className='rigthbarTitle'>Online Friends</h4>
          <ul className='rightbarFriendList'>
           {Users.map((u)=>(
           <OnlineFriends key={u.id} user={u}/>
           ))}
          </ul>
      </>
    )
  }
  const ProfileRightbar=()=>{
   return(
    <>
    <h4 className="rightbarTitle">
      User Information
    </h4>
    <div className="rightbarInfo">
      <div className="rightbarInfoItem">
        <span className="rightbarInfoKey">City:</span>
        <span className="rightbarInfoValue">Pune</span>
      </div>
      <div className="rightbarInfoItem">
        <span className="rightbarInfoKey">From:</span>
        <span className="rightbarInfoValue">Mumbai</span>
      </div>
      <div className="rightbarInfoItem">
        <span className="rightbarInfoKey">RelationShip:</span>
        <span className="rightbarInfoValue">Single</span>
      </div>
    </div>
    <h4 className="rightbarInfoItem">User Friends</h4>
    <div className="rightbarFollowings">
      <div className="rightbarFollowing">
        <img className='rightbarFollowingImg' src="src\assets\Posts\3.jpg" alt="" />
        <span className="rightbarFollowingName">Mike</span>
      </div>
      <div className="rightbarFollowing">
        <img className='rightbarFollowingImg' src="src\assets\Posts\3.jpg" alt="" />
        <span className="rightbarFollowingName">Mike</span>
      </div>
      <div className="rightbarFollowing">
        <img className='rightbarFollowingImg' src="src\assets\Posts\3.jpg" alt="" />
        <span className="rightbarFollowingName">Mike</span>
      </div>
      <div className="rightbarFollowing">
        <img className='rightbarFollowingImg' src="src\assets\Posts\3.jpg" alt="" />
        <span className="rightbarFollowingName">Mike</span>
      </div>
      <div className="rightbarFollowing">
        <img className='rightbarFollowingImg' src="src\assets\Posts\3.jpg" alt="" />
        <span className="rightbarFollowingName">Mike</span>
      </div>
      <div className="rightbarFollowing">
        <img className='rightbarFollowingImg' src="src\assets\Posts\3.jpg" alt="" />
        <span className="rightbarFollowingName">Mike</span>
      </div>
      <div className="rightbarFollowing">
        <img className='rightbarFollowingImg' src="src\assets\Posts\3.jpg" alt="" />
        <span className="rightbarFollowingName">Mike</span>
      </div>
    </div>
    </>
   )
  }
  return (
    <div className='rightbar'>
      <div className="rightbarWrapper">
       {profile ?<ProfileRightbar/>: <HomeRightbar/>}
        </div>
      </div>
  )
}

export default Rightbar