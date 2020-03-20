import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    display: flex;
    padding: 0;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;

    header{
      display: flex;
      flex-wrap: wrap;
      width: 100%;
      height: 74px;
      background-color: rgba(51, 153, 254, 1);
      align-items: center;
      justify-content: center;
      margin-bottom: 20px;
      color: #fff;
      & img{
          margin-right: 20px;
          opacity: 0.7;
      }
      & h1{
          width: 60%;
          padding: 0;
      }
    }

    h4{
        margin-bottom: 20px;
        display: flex;
        width: 100%;
        justify-content: center;
        align-items: center;
    }
`;