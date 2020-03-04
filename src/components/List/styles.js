import styled from 'styled-components';

export const Container = styled.div`
  padding: 0 15px;
  height: 100%;
  flex: 0 0 320px;
  opacity: ${props => props.done ? 0.6 : 1};

  & + div{
      border-left: 1px solid rgba(0, 0, 0, 0.15);
  }

  header{
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 42px;
  }

  h2{
    font-weight: 800;
    font-size: 16px;
    padding: 0 10px;
  }

  .btadd{
    width: 32px;
    height: 32px;
    border-radius: 10px;
    background: #7109C2;
    border: 0;

  }

  .btadd:active{
    background: #7311FF;
  }

  ul{
      margin-top: 20px;
  }
`;