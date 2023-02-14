import { useState } from 'react';
import {
  Wrapper,
  StyledForm,
  StyledSearchFormBtn,
  StyledSpan,
  StyledInput,
  Icon,
} from './SearchBar.styled';

const SearchBar = ({ onSubmit }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleInputValue = e => {
    setSearchQuery(e.currentTarget.value.toLowerCase());
  };

  const handleFormSubmit = e => {
    e.preventDefault();
    onSubmit(searchQuery);
    setSearchQuery('');
  };

  return (
    <Wrapper>
      <StyledForm onSubmit={handleFormSubmit}>
        <StyledInput
          name="search"
          onChange={handleInputValue}
          value={searchQuery}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movie"
          required
        />
        <StyledSearchFormBtn type="submit">
          <Icon />
          <StyledSpan>Search</StyledSpan>
        </StyledSearchFormBtn>
      </StyledForm>
    </Wrapper>
  );
};

export default SearchBar;
