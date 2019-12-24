import styled from 'styled-components';

export const Item = styled.div`
  a {
    display: block;
    background-color: #fff;
    border: 1px solid #fff;
    margin: 5px;
    text-decoration: none;
    padding: 10px;
    border-radius: 5px;
    color: #000;
    transition: all ease 0.2s;

    &:hover {
      border: 1px solid #ccc;
    }

    .itemImage img {
      width: 100%;
      border-radius: 5px;
    }

    .itemName {
      font-weight: bold;
      margin: 5px 0px;
    }
  }
`;
