import Home from '~/components/GlobalStyles/pages/Home';
import Following from '~/components/GlobalStyles/pages/Following';
import Profile from '~/components/GlobalStyles/pages/Profile';
import Upload from '~/components/GlobalStyles/pages/Upload';
import { HeaderOnly } from '~/components/Layout';
import Search from '~/components/GlobalStyles/pages/Search';
const publicRoutes = [
    { path: '/', compoment: Home },
    { path: '/following', compoment: Following },
    { path: '/:nickname', compoment: Profile },
    { path: 'upload', compoment: Upload, layout: HeaderOnly },
    { path: '/search', compoment: Search, layout: null },
];

const privateRoutes = [];
export { publicRoutes, privateRoutes };
