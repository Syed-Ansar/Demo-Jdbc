import Link from 'next/link';
import React from 'react';

const Header = () => {
    return (
        <header>
            <div className='container'>
                <Link href='/'>
                    <h2>JDBC Docs &#128640;</h2>
                </Link>
            </div>
        </header>
    );
};

export default Header;
