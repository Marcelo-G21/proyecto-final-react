import s from './style.module.css'

const NotFound = () =>  (
        <div>
            <div className={s.main_container}>
                <div className={s.image}>
                    <img src='https://http.cat/404' alt='NotFound' />
                </div>
                <div className={s.text}>
                    <div> ... Meow? {"(=^-ω-^=)"} We couldn't find anything!</div>
                </div>

            </div>

        </div>
    )

export default NotFound