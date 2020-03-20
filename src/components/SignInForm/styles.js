import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-wrap: nowrap;
    width: 65%;
    padding: 15px;
    align-items: center;
    justify-content: space-around;
    border: 1px solid rgba(30, 30, 30, 0.2);
    border-radius: 6px;
    flex-direction: row;
    background: #fff;

    .signup{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        align-content: space-between;
        & a{
            color: #fff;
            font-size: 1.2rem;
            background: rgba(51, 153, 254, 1);
            padding: 15px;
            border: 0;
            border-radius: 8px;
            justify-content: center;
            text-decoration: none;
        }
        & p{
            margin-bottom: 15px;
        }
    }
`;

export const Form = styled.form`

    width: 80%;
    flex: 1;
    align-items: center;
    justify-content: space-around;

    .submit{
        width: 100%;
        padding: 20px;
        display: flex;
        flex: 1;
        justify-content: space-between;
        align-items: center;
        & a{
            font-size: 0.8rem;
            color: rgba(51, 153, 254, 1);
            text-decoration: none;
        }
    }

    input{
        flex: 1;
        height: 36px;
        margin-bottom: 15px;
        padding: 0 20px;
        color: #777;
        font-size: 15px;
        width: 100%;
        border: 1px solid #AAA;
        border-radius: 4px;
        &::placeholder {
            color: #999;
        }
    }

    p{
        color: #ff3333;
        font-size: 0.7rem;
        margin-bottom: 15px;
        border: 1px solid #ff3333;
        padding: 10px;
        width: 100%;
        text-align: center;
    }

    button{
        color: #fff;
        font-size: 1.2rem;
        background: rgba(136, 160, 73, 1);
        padding: 10px;
        border: 0;
        border-radius: 5px;
        justify-content: center;
    }
`;