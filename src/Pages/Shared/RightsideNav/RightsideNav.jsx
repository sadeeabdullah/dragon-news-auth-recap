import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from 'react-icons/fa';
import qzone1 from '../../../assets/qZone1.png'
import qzone2 from '../../../assets/qZone2.png'
import qzone3 from '../../../assets/qZone3.png'
const RightsideNav = () => {
    return (
        <div>
            <div className='p-4 space-y-3 mb-6'>
                <h2 className="text-3xl">Login With</h2>
                <button className="btn btn-outline w-full">
            <FaGoogle></FaGoogle>
  Login with google
</button>   
                <button className="btn btn-outline w-full">
            <FaGithub></FaGithub>
  Login with github
</button>   
            </div>
            <div className='p-4  mb-6'>
                <h2 className="text-3xl mb-3">Find Us</h2>
                <a className='flex p-4 text-lg items-center border rounded-t-lg' href="">
                    <FaFacebook className='mr-3'/>
                    <span>Faceook</span>
                </a>
                <a className='flex p-4 text-lg items-center border-x ' href="">
                    <FaTwitter className='mr-3'/>
                    <span>Twitter</span>
                </a>
                <a className='flex p-4 text-lg items-center border rounded-b-lg' href="">
                    <FaInstagram className='mr-3'/>
                    <span>Instagram</span>
                </a>
            </div>
            {/* Q zone */}
            <div className='p-4 space-y-3 mb-6'>
                <h2 className="text-3xl">Q Zone</h2>
                <img src={qzone1} alt="" />
                <img src={qzone2} alt="" />
                <img src={qzone3} alt="" />
            </div>
        </div>
    );
};

export default RightsideNav;