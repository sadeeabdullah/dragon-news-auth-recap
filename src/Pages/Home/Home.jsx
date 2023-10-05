import Header from "../Shared/Header/Header";
import LeftsideNav from "../Shared/LeftsideNav/LeftsideNav";
import Navbar from "../Shared/Navbar/Navbar";
import RightsideNav from "../Shared/RightsideNav/RightsideNav";
import BreakingNews from "./BreakingNews/BreakingNews";

const Home = () => {
    return (
        <div>
            <Header/>
            <BreakingNews></BreakingNews>
            <Navbar/>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                <div>
                    <LeftsideNav></LeftsideNav>
                </div>
                <div className="col-span-2">
                    <h2 className="text-4xl">News coming soon</h2>
                </div>
                <div>
                    <RightsideNav></RightsideNav>
                </div>
            </div>
        </div>
    );
};

export default Home;