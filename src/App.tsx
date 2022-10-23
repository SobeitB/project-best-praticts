import {Link, Route, Routes} from "react-router-dom";
import {Suspense} from 'react'
import {AboutPageLazy} from "./pages/AboutPage/AboutPage.lazy";
import {MainPageLazy} from "./pages/MainPage/MainPage.lazy";
import './styles/index.scss'
import {useTheme} from "./theme/useTheme";
import {classNames} from "./helpers/classNames";

export const App = () => {
   const {theme, toggleTheme} = useTheme()

   return (
      <div className={classNames('app', {},[theme, 'toggle', 'kek'])}>
         <button onClick={toggleTheme}>Set Theme</button>
         <Link to={'/'}>Главная</Link>
         <Link to={'/about'}>О сайте</Link>
         <Suspense fallback={<h1>LOADING...</h1>}>
         <Routes>
            <Route path="/about" element={<AboutPageLazy />} />
            <Route path="/" element={<MainPageLazy />} />
         </Routes>
         </Suspense>
      </div>
   )
}