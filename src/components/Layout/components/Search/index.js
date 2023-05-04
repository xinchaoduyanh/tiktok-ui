import styles from './Search.module.scss';
import classNames from 'classnames/bind';
import 'tippy.js/dist/tippy.css'; // optional
import HeadlessTippy from '@tippyjs/react/headless';
import axios from 'axios';
import * as request from '~/utils/request';
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';
import * as searchService from '~/apiServices/searchService';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState, useRef } from 'react';

import useDebounce from '~/routes/hooks/useDebounce';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '../../AccountItem';
import { SearchIcon } from '~/components/Icon';

const cx = classNames.bind(styles);

function Search() {
    const [searchValue, setSearchValue] = useState('');

    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(true);
    const [loading, setLoading] = useState(false);

    const debounced = useDebounce(searchValue, 500);

    const inputRef = useRef();

    const handleHideResult = () => {
        setShowResult(false);
    };
    const handleClear = () => {
        setSearchValue('');
        inputRef.current.focus();
    };

    useEffect(() => {
        if (!debounced.trim()) {
            setSearchResult([]);
            return;
        }

       const fetchApi = async () => {
        setLoading(true)

        const result = await searchService.search(debounced);
        setSearchResult(result);
        setLoading(false)
       }
       fetchApi();
    }, [debounced]);

    return (
        <HeadlessTippy
            interactive
            visible={searchResult.length > 0 && showResult}
            render={(attrs) => (
                <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        <h4 className={cx('search-title')}>Accounts</h4>
                        {searchResult.map((result) => (
                            <AccountItem key={result.id} data={result} />
                        ))}
                    </PopperWrapper>
                </div>
            )}
            onClickOutside={handleHideResult}
        >
            <div className={cx('search')}>
                <input
                    ref={inputRef}
                    value={searchValue}
                    placeholder="Search accounts and videos"
                    spellCheck={false}
                    onChange={(e) => setSearchValue(e.target.value)}
                    onFocus={() => setShowResult(true)}
                />

                {!!searchValue && !loading && (
                    <button className={cx('clear')} onClick={handleClear}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                )}

                {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}

                <button className={cx('search-btn')}>
                    <SearchIcon />
                </button>
            </div>
        </HeadlessTippy>
    );
}

export default Search;
