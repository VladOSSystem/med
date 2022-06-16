import {Outlet} from 'react-router-dom'

const  InnerContent:React.FC = () =>{
  return (
    <div className='inner-content'>
        <Outlet/>
    </div>
  );
}

export default InnerContent;
