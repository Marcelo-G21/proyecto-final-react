import { useState, useEffect, useCallback } from 'react'
import Logo from './components/Logo/Logo'
import SearchBar from './components/SearchBar/SearchBar';
import CatBreedDetail from './components/CatBreedDetail/CatBreedDetail';
import NotFound from './components/NotFound/NotFound';
import { catAPI } from './api/cats'
import logoImg from "./assets/images/logo.png"
import s from './style.module.css';


function App() {

  const [catBreed, setCatBreed] = useState();


  const fetchCatBreed = useCallback(async (breed) => {
    const fetchedCatBreed = await catAPI.fetchCatBreed(breed);
    if (fetchedCatBreed) {
      setCatBreed(fetchedCatBreed[0]);
    }
  }, []);

  useEffect(() => {
    fetchCatBreed()
  }, []);

  return (
    <div className={s.main_container}>
      <div className={s.header}>
        <div className={s.logo}>
          <Logo image={logoImg} />
        </div>
        <div className={s.searchbar}>
          <SearchBar onSubmit={fetchCatBreed} />
        </div>
      </div>

      <div className={s.cat_breed_detail_container}>
        {catBreed ?
          <CatBreedDetail catBreed={catBreed} /> :
          <NotFound />}
      </div>

    </div>
  )
}

export default App;