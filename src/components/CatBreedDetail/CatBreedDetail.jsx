import FiveStarRating from '../FiveStarRating/FiveStarRating'
import s from './style.module.css'

const CatBreedDetail = ({ catBreed }) => (
    <div>
        <div className={s.main_container}>
            <div className={s.image_container}>
                <img src={catBreed.image_link} alt="catImg" />
            </div>
            <div className={s.description_container}>
                <div>Name: {catBreed.name}</div>
                <div>Origin: {catBreed.origin}</div>
                <div>Length: {catBreed.length}</div>
                <div>Min weight: {catBreed.min_weight}</div>
                <div>Max weight: {catBreed.max_weight}</div>
                <div>Min life expectancy: {catBreed.min_life_expectancy} years</div>
                <div>Max life expectancy: {catBreed.max_life_expectancy} years</div>

                <div className={s.atribute_container}>
                    <div className={s.atribute}>General Health: </div>
                    <div className={s.star_container}>
                        <FiveStarRating rating={catBreed.general_health} />
                    </div>
                </div>

                <div className={s.atribute_container}>
                    <div className={s.atribute}>Intelligence: </div>
                    <div className={s.star_container}>
                        <FiveStarRating rating={catBreed.intelligence} />
                    </div>
                </div>

                <div className={s.atribute_container}>
                    <div className={s.atribute}>Playfulness: </div>
                    <div className={s.star_container}>
                        <FiveStarRating rating={catBreed.playfulness} />
                    </div>
                </div>

                <div className={s.atribute_container}>
                    <div className={s.atribute}>Grooming: </div>
                    <div className={s.star_container}>
                        <FiveStarRating rating={catBreed.grooming} />
                    </div>
                </div>

                <div className={s.atribute_container}>
                    <div className={s.atribute}>Shedding: </div>
                    <div className={s.star_container}>
                        <FiveStarRating rating={catBreed.shedding} />
                    </div>
                </div>

                <div className={s.atribute_container}>
                    <div className={s.atribute}>Children Friendly: </div>
                    <div className={s.star_container}>
                        <FiveStarRating rating={catBreed.children_friendly} />
                    </div>
                </div>

                <div className={s.atribute_container}>
                    <div className={s.atribute}>Family Friendly: </div>
                    <div className={s.star_container}>
                        <FiveStarRating rating={catBreed.family_friendly} />
                    </div>
                </div>

                <div className={s.atribute_container}>
                    <div className={s.atribute}>Other Pets Friendly: </div>
                    <div className={s.star_container}>
                        <FiveStarRating rating={catBreed.other_pets_friendly} />
                    </div>
                </div>

            </div>
        </div>



    </div>
)

export default CatBreedDetail