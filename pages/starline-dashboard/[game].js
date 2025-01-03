
import { double_pattifill, single_pattifill, singlefill, triple_pattifill } from '@/resources/images';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const StarlineDashboard = () => {
  const router = useRouter();

  useEffect(() => {
    const { game } = router.query;
    console.log('Game:', game);
  }, [router.query]);

  return (
    <div className="container">
    <div className="card-full-page tb-10">
      <div className="text-center tb-10">
        <h3 className="gdash3">Starline 05:15 PM Dashboard</h3>
        <span>Select Bidding Option</span>
      </div>
      <div className="tb-10">&nbsp;</div>
      <div className="row bidoptions-list tb-10">
        <div className="col-4">
          <a href="starline-single.php?gid=9" className="bidtypebox">
            <img src={singlefill}/>
            <p>Single Ank</p>
          </a>
        </div>
        <div className="col-4">
          <a href="starline-single-patti.php?gid=9" className="bidtypebox">
            <img src={single_pattifill}/>
            <p>Single Patti</p>
          </a>
        </div>
        <div className="col-4">
          <a href="starline-double-patti.php?gid=9" className="bidtypebox">
            <img src={double_pattifill} />
            <p>Double Patti</p>
          </a>
        </div>
      </div>
      <div className="row bidoptions-list tb-10">
        <div className="col-4">
          <a href="starline-triple-patti.php?gid=9" className="bidtypebox">
            <img src={triple_pattifill} />
            <p>Triple Patti</p>
          </a>
        </div>
      </div>
      <div className="tbmar-40 text-center">
        <span>Khelo and Jeeto Har Ghante. </span>
      </div>
    </div>
  </div>
  
  );
};

export default StarlineDashboard;
