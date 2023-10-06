import { useLoaderData } from "react-router-dom";
import Header from "../Shared/Header/Header";
import LeftsideNav from "../Shared/LeftsideNav/LeftsideNav";
import Navbar from "../Shared/Navbar/Navbar";
import RightsideNav from "../Shared/RightsideNav/RightsideNav";
import BreakingNews from "./BreakingNews/BreakingNews";
import NewsCard from "./NewsCard";

const Home = () => {

    const news = useLoaderData();

    return (
        <div>
            <Header/>
            <BreakingNews></BreakingNews>
            <Navbar/>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                <div>
                    <LeftsideNav></LeftsideNav>
                </div>

                {/* news container */}
                <div className="col-span-2">
                    {
                        news.map(aNews=><NewsCard
                            key={aNews.id}
                            news={aNews}
                        ></NewsCard>)
                    }
                </div>
                <div>
                    <RightsideNav></RightsideNav>
                </div>
            </div>
        </div>
    );
};

export default Home;