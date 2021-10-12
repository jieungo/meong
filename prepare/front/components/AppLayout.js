import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

const AppLayout = ({children}) => {
    return (
        <>
            <div>
                <div>공통분모</div>
                <Link href="/"><a>메인</a></Link>
                <Link href="/writePost"><a>새글작성</a></Link>
                <Link href="/community"><a>커뮤니티</a></Link>
                <Link href="/myPage"><a>마이페이지</a></Link>
                <Link href="/login"><a>로그인</a></Link>
            </div>
            <div>
                {children}
            </div>
        </>
    );
};

AppLayout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default AppLayout;