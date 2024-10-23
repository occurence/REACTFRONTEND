import { PropagateLoader } from 'react-spinners';
import css from './Loader.module.css';

export const Loader = () => {
    return(
        <div className={css.loaderWrap}>
            <PropagateLoader color="#05b686" speedMultiplier={0.5} />
        </div>
    )
}