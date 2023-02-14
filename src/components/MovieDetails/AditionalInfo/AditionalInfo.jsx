import { NavLink, useLocation } from 'react-router-dom';
import { AditionalInfoLinks, AditionalInfoWrap } from './AditionalInfo.styled';

export function AditionalInfo(id) {
  const location = useLocation();

  return (
    <AditionalInfoWrap>
      <h3>Aditional information</h3>
      <AditionalInfoLinks>
        <NavLink
          to={{
            pathname: `/movies/${id}/cast`,
            state: { from: location },
          }}
        >
          Cast
        </NavLink>
        <NavLink
          to={{
            pathname: `/movies/${id}/reviews`,
            state: { from: location },
          }}
        >
          Reviews
        </NavLink>
      </AditionalInfoLinks>
    </AditionalInfoWrap>
  );
}
