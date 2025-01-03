import Link from 'next/link'
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import ListAltIcon from '@mui/icons-material/ListAlt';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
const History = () => {

  const router = useRouter();

  // const router =useRouter();
  useEffect(()=>{
    const checkUserToken = typeof window !== 'undefined' && localStorage.getItem('token');
    
    if(!checkUserToken){
    router.push('/login');
    }
  },[])
  return (
<div className="container">
  <div className="tb-10">
    <div className="row game-list-inner">
      <div className="col-12">
        <Link href="fund-history" className="mplist">
         <LocalAtmIcon />Fund History
        </Link>
      </div>
    </div>
    <div className="row game-list-inner">
      <div className="col-12">
        <Link href="bidding-history" className="mplist">
          <ListAltIcon/> Main Bidding History
        </Link>
      </div>
    </div>
    <div className="row game-list-inner">
      <div className="col-12">
        <Link href="bidding-history-starline" className="mplist">
          <FormatListBulletedIcon/>
          Starline Bidding History
        </Link>
      </div>
    </div>
    <div className="row game-list-inner">
      <div className="col-12">
        <Link href="transaction-history" className="mplist">
          <ListAltIcon/>
          Transaction History
        </Link>
      </div>
    </div>
  </div>
</div>
  )
}

export default History