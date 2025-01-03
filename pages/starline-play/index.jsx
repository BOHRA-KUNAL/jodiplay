import Link from 'next/link'
import { useRouter } from 'next/router';
import React, { useEffect } from 'react'

const Starline = () => {
  const router = useRouter();

  // const router =useRouter();
  useEffect(()=>{
    const checkUserToken = typeof window !== 'undefined' && localStorage.getItem('token');
    
    if(!checkUserToken){
    router.push('/login');
    }
  },[])
  return (
<>
  <div className="container text-center ">
    <div className="tb-10">
      <div className="row">
        <div className="col-6">
          <a href="#" className="home-sl-box">
            Play Big &amp; Win Big <br /> <span>Har Ghante Jeeto</span>
          </a>
        </div>
        <div className="col-6">
          <a href="#" className="home-sl-box">
            Starline Chart <br /> <span> View Old Record</span>
          </a>
        </div>
      </div>
    </div>
  </div>
  <div className="container text-center">
    <div className="tb-10">
      <div className="row game-list-inner">
        <div className="col-4">
          <span className="sgameName"> 09:15 AM </span>
        </div>
        <div className="col-4">
          <span className="sgameResut"> 350-8 </span>
        </div>
        <div className="col-4 splaydiv">
          {/*<a ClassName="game-play gray"> <i ClassName="fa fa-play-circle"></i><br>Play Game</a>*/}
        </div>
      </div>
   
      <div className="row game-list-inner">
        <div className="col-4">
          <span className="sgameName"> 05:15 PM </span>
        </div>
        <div className="col-4">
          <span className="sgameResut"></span>
        </div>
        <div className="col-4 splaydiv">
          <Link
            href={`starline-dashboard/game?${'112-55'}`}
            className="sgame-play"
          >
            {" "}
            Play
          </Link>
        </div>
      </div>
    
    </div>
  </div>
</>
  )
}

export default Starline