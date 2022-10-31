import Layout from "./components/Layout"
import Sidebar from "./components/Sidebar";
import Weather from "./pages/Weather";

import 'swiper/css';

const App = () => {
  return (
    <Layout>
      <Sidebar/>
      <Weather/>      
    </Layout>
  )
}

export default App
