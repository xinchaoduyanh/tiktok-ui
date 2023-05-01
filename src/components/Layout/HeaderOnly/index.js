import Home from "~/components/GlobalStyles/pages/Home";
import Following from "~/components/GlobalStyles/pages/Following";
import Profile from "~/components/GlobalStyles/pages/Profile";
import Header from "~/components/Layout/components/Header";



function HeaderOnly({children}) {
    return ( 
        
        <div>
            <Header />
            <div className="container">
                <div className="content">{children}</div>
            </div>

        </div>

     );
}

export default HeaderOnly;