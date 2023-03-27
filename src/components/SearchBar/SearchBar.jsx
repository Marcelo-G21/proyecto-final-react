import { Search as SearchIcon } from "react-bootstrap-icons";
import s from "./style.module.css";

const SearchBar = ({ onSubmit }) => {
    function submit(e) {
        if (e.key === "Enter" && e.target.value.trim() !== "") {
            console.log(e.target.value)
            onSubmit(e.target.value);
        }
    }
    return (
        <div className={s.searchbar}>
            <SearchIcon size={27} className={s.icon} />
            <input
                type="text"
                onKeyUp={submit}
                className={s.input}
                placeholder="Search a cat breed! (=^･ω･^=) "
            />
        </div>
    )
}

export default SearchBar