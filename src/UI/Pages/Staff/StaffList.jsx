import React from 'react';
import styled from 'styled-components';

import {staffData} from 'UI/common/data/staffData.js';

import StaffMember from './StaffMember.jsx';

const StaffList = () => {

    return (
        <StaffListStyled className='StaffList'>
            <div className="wrapper">
                {
                    staffData.map((member, idx) =>{
                        return<StaffMember key={ idx } member= {member} />
                    })
                }
            </div>
        </StaffListStyled>
    );
}

export default StaffList;

const StaffListStyled = styled.div`
    background-color: #014444;
    padding: 20px;
    margin: 20px, 0px;

    .wrapper{
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
    }
`;