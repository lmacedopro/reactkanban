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
    height: 220px;
    background-color: rgba(165, 197, 75, 1);
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
  }

  header img{
    opacity: 0.5;
  }

  content{
    width: 100%;
    flex-direction: column;
    display: flex;
    color: rgba(110, 110, 110, 1);
    align-items: center;
    justify-content: center;
  }

  h1{
    display: flex;
    font-size: 2.2rem;
    font-weight: 600;
    color: rgba(136, 160, 73, 1);
    align-items: center;
    justify-content: center;
    padding: 10px;
  }

  h4{
    display: flex;
    font-size: 1.2rem;
    font-weight: 600;
    color: rgba(100, 100, 100, 1);
    align-items: center;
    justify-content: center;
    padding: 10px;
  }

  ul{
    margin-top: 10px;
    margin-bottom: 10px;
    display: flex;
    width: 65%;
    align-items: center;
    justify-content: space-between;
    align-items: stretch;
  }

  li{
    display: flex;
    flex-direction: column;
    max-width: 300px;
    align-items: center;
    justify-content: center;
    background: rgba(51, 153, 254, 0.2);
    flex-wrap: wrap;
    padding: 10px;
    text-align: justify;
    border-radius: 6px;

  }

  li h5{
    padding: 10px;
    font-size: 1.2rem;
    color: rgba(51, 153, 254, 1);
  }

  .icon{
    padding: 8px;
    background: rgba(51, 153, 254, 1);
    opacity: 0.6;
    border-radius: 6px;
  }

  footer{
    bottom: 0;
    margin-bottom: 0;
    margin-top: 10px;
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(255, 226, 2, 0.5);
  }

  footer p{
    font-weight: 500;
    font-size: 0.7rem;
    color: rgba(90, 90, 90, 1);
  }

`;