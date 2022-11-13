import { useDispatch,useSelector } from 'react-redux';


import Layout from '../components/Layout';
import Sidebar from '../components/Sidebar';
import Weather from '../components/Weather';

const Home = () => {
    let {city} = useSelector(state => state.weather)
    let dispatch = useDispatch()


    return (
        <Layout>
            <Sidebar/>
            <Weather/>
        </Layout>
    )
}

export default Home