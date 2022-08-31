    import React, {useState} from 'react';
    import styled from 'styled-components';
    
    import SiteLogo from 'UI/common/SiteLogo.jsx';
    import Hamburger from './Hamburger.jsx';
    import Menus from './Menus.jsx';

    const SmallView = () => {
    
        const [showMenu, showMenuUpdate] = useState(false);
        return (
            <SmallViewStyled className='SmallView'>

                <div className="logo">
                    <SiteLogo />
                </div>

                <Hamburger showMenuUpdate={showMenuUpdate} showMenu={ showMenu }/>
                {
                    showMenu && <Menus showMenuUpdate={ showMenuUpdate } />
                }
            </SmallViewStyled>
        );
    }
    
    export default SmallView;
    
    const SmallViewStyled = styled.div`

        /* height: 300px; */
        display: flex;
        align-items:middle;

        .logo {
            display: flex;
            justify-content:center;
            padding:20px;
            
            .Sitelogo{
                max-width: 300px;
            }
        }
    `;