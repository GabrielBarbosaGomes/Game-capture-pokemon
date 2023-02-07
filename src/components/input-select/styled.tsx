import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  display: inline-block;
  width: 200px;
  height: 40px;
  border: 1px solid #ddd;
  border-radius: 4px;
  cursor: pointer;
`

export const Selected = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 10px;
  box-sizing: border-box;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  background-color: #fff;
`

export const Options = styled.div`
  position: absolute;
  top: 40px;
  left: 0;
  width: 100%;
  background-color: #fff;
  border: 1px solid #E4E9F2;
  border-radius: 4px;
  z-index: 2;
  
`

export const Option = styled.div`
  padding: 10px;
  display: flex;
  background-color: #E4E9F2;
  box-sizing: border-box; 

  input[type="checkbox"] {
    margin-right: 10px;
    width: min-content;
  }
  & label{
    z-index: 9999;
  }
  & .itemSelect{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 30px;
    box-sizing: border-box;
  }
` 