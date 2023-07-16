import './App.css'
import Banner from './Components/Banner/Banner'
import Navbar from './Components/Navbar/Navbar'
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
function App() {
  const [ref, inView] = useInView({
    threshold: 0.5,
})
  return (
    <div className='position-relative' ref={ref}>
      <Navbar></Navbar>
      <Banner></Banner>
      <div className='position-absolute w-50 bottom-0 end-0 shadow-lg bg-light container p-4 d-none d-lg-block'>
          <div className="row">
                <div className="col-lg-3 text-center">
                    <span style={{fontSize:"35px"}} className='text-info'>{inView ? <CountUp start={0} end={250}  duration={2} /> :  <CountUp start={0} end={0} />}</span>
                    <h6 className='text-secondary'><small>Best doctor</small></h6>
                </div>
                <div className="col-lg-3 text-center">
                    <span style={{fontSize:"35px"}} className='text-info'>{inView ? <CountUp start={0} end={15}  duration={2} /> :  <CountUp start={0} end={0} />}</span>
                    <h6 className='text-secondary'><small>Clinic Location</small></h6>
                </div>
                <div className="col-lg-3 text-center">
                    <span style={{fontSize:"35px"}} className='text-info'>{inView ? <CountUp start={0} end={28}  duration={2} /> :  <CountUp start={0} end={0} />}</span>
                    <h6 className='text-secondary'><small>Surgery Room</small></h6>
                </div>
                <div className="col-lg-3 text-center">
                    <span style={{fontSize:"35px"}} className='text-info'>+ {inView ? <CountUp start={0} end={1500}  duration={2} /> :  <CountUp start={0} end={0} />}</span>
                    <h6 className='text-secondary'><small>Patient Capacity</small></h6>
                </div>
            </div>
        </div>
    </div>
  )
}

export default App
