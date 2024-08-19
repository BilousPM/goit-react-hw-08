import { MagnifyingGlass } from 'react-loader-spinner';
import s from './loader.module.css';
const Loader = () => {
  return (
    <div className={s.loader}>
      <MagnifyingGlass
        visible={true}
        height="2000"
        width="200"
        ariaLabel="magnifying-glass-loading"
        wrapperStyle={{}}
        wrapperClass="magnifying-glass-wrapper"
        glassColor="#0bb0e7"
        color="#df0816"
      />
    </div>
  );
};

export default Loader;
