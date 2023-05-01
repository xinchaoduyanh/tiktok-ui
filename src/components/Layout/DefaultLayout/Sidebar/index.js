import stlyes from './SideBar.module.scss'
import classNames from 'classnames/bind';

const cx = classNames.bind(stlyes)
function Sidebar() {
    return (
        <aside  className={cx('wrapper')}>
            <h2>Sidebar</h2>
        </aside>
    );
}

export default Sidebar;