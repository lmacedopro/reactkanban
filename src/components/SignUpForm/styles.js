import styled from 'styled-components';

export const Container = styled.div`

    display: flex;
    width: 50%;
    align-items: center;
    justify-content: flex-start;
    border: 1px solid rgba(30, 30, 30, 0.2);
    border-radius: 6px;
    flex-direction: column; 
    background: #fff;
    padding: 15px;

    .form{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        & label{
            
        }
    }
`;
