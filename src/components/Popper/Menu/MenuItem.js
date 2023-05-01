import classNames from 'classnames/bind';
import styles from './Menu.Module.scss';
import Button from '~/components/Button';


const cx = classNames.bind(styles);

function MenuItem({data}) {
    return (  
        <Button className={cx('menu-item')} leftIcon={data.icon} to={data.to} >
                {data.title}
        </Button>
        // JSON.stringify(data)
    );
}

export default MenuItem;