import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Home from '~/pages/Home';
// import Following from '~/pages/Following';
// import Home from './components/GlobalStyles/pages/Home';
// import Following from './components/GlobalStyles/pages/Following';
import { publicRoutes } from './routes';
import { DefaultLayout } from './components/Layout';
import { Fragment } from 'react';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {/* <Route path='/' element={<Home />} />
                  <Route path='/' element={<Following />} /> */}
                    {publicRoutes.map((route, index) => {
                        // const Layout = route.layout === null ? Fragment : DefaultLayout;
                        let Layout = DefaultLayout
                        if(route.layout ){
                            Layout = route.layout;
                        }
                        else if(route.layout === null){
                            Layout = Fragment
                        }
                        const Page = route.compoment;
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
