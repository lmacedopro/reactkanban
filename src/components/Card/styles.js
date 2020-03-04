import styled, { css } from 'styled-components';

const handleBgColorPriorty = priority => {
  switch (priority) {
    case "veryurgent":
      return "#ecc5c5";
    case "urgent":
      return "#dbe39f";
    default:
      return "#c1dff0";
  }
};

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  background: ${({ priority }) => handleBgColorPriorty(priority)};
  border-radius: 5px;
  margin-bottom: 10px;
  padding: 0 15px 15px 15px;
  box-shadow: 0 1px 4px 0 rgba(192, 208, 230, 0.8);
  cursor: grab;

  header{
    width: 100%;
    justify-content: space-between;
  }

  button{
    display: flex;
    align-items: center;
    border: 0;
    background: transparent;
  }

  p{
    width: 100%;
    font-size: 0.8rem;
    padding-bottom: 10px;
    font-weight: 500;
    line-height: 20px;
  }

  img{
    width: 24px;
    height: 24px;
    border-radius: 2px;
  }

  ${props => props.isDragging && css`
    border: 2px dashed rgba(0,0,0,0.2);
    padding-top: 31px;
    border-radius: 0;
    background: transparent;
    box-shadow: none;
    cursor: grabbing;

    p, img, header{
      opacity: 0;
    }
  `}
`;

export const Label = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 2px;
  background: ${props => props.color};
`;