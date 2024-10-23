import { Helmet, HelmetProvider } from 'react-helmet-async';
import css from './HomePage.module.css';

const HomePage = () => {
    return(
        <HelmetProvider>
            <Helmet>
                <title>Task</title>
            </Helmet>
            <div className={css.container}>
                <h1 className={css.title}>Welcome Page</h1>
            </div>
        </HelmetProvider>
    )
}

export default HomePage;