import React from 'react';

function Header() {
    return (
    <header className="header">
        <div className="toolbar">
            <div className="">
                < a href="/">Social</a>
            </div>
            <div className="">
                <button>Novo Post</button>
                <span>img1</span>
                <span>img2 - Teste</span>
            </div>
        </div>
    </header>
)
}


export default Header;