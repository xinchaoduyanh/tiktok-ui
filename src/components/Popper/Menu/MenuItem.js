import classNames from 'classnames/bind';
import styles from './Menu.Module.scss';
import Button from '~/components/Button';


const cx = classNames.bind(styles);

function MenuItem({data, onClick}) {
    const classes = cx('menu-item', {
        separate: data.separate
    })
    return (  
        <Button className={cx(classes)} leftIcon={data.icon} to={data.to} onClick = {onClick}>
                {data.title}
        </Button>
        // JSON.stringify(data)
    );
}

export default MenuItem;