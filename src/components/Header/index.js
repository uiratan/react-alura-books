import Logo from '../Logo/index.js';
import OpcoesHeader from '../OpcoesHeader/index.js';
import IconesHeader from '../IconesHeader/index.js';

import styled from 'styled-components';

const HeaderContainer = styled.div`
    background: white;
    display: flex;
    justify-content: center;
`
function Header() {
    return (
        <HeaderContainer>
            <Logo />
            <OpcoesHeader />
            <IconesHeader />
        </HeaderContainer>

    )
}

export default Header;