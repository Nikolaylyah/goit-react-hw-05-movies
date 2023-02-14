import { Dna } from 'react-loader-spinner';
import { WrapLoad } from './Loader.styled';
const Loader = () => {
  return (
    <WrapLoad>
      <Dna
        visible={true}
        height="80"
        width="80"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
      />
    </WrapLoad>
  );
};
export default Loader;
