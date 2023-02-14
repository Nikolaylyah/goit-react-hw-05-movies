import styled from 'styled-components';
import { AiOutlineSearch } from 'react-icons/ai';
export const Wrapper = styled.div`
  z-index: 1100;
  display: flex;
  padding: 8px;
  align-items: center;
  color: #fff;
`;

export const StyledForm = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 400px;
  background-color: #fff;
  border-radius: 3px;
  overflow: hidden;
`;

export const StyledSearchFormBtn = styled.button`
  display: inline-block;
  width: 48px;
  height: 30px;
  border: 0;
  /* background-image: url('../../icons/search_FILL0_wght400_GRAD0_opsz48.svg'); */
  background-size: 80%;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  &:hover {
    opacity: 1;
  }
`;
export const StyledSpan = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  clip-path: inset(50%);
  border: 0;
`;
export const StyledInput = styled.input`
  height: 100%;
  display: inline-block;
  width: 100%;
  vertical-align: middle;
  font: inherit;
  font-size: 16px;
  border: 1px solid #cacaca;
  border-radius: 3px;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;
  size: 50px;
  &::placeholder {
    font: inherit;
    font-size: 16px;
  }
`;

export const Icon = styled(AiOutlineSearch)`
  width: 20px;
  height: 20px;
  vertical-align: middle;
`;
