import React , {useState}from 'react';
import "./pictures.css";
import SearchIcon from '@material-ui/icons/Search';
const TextBox = ({searchText}) => {

    const [text, settext] = useState("");
    const onSubmit = (event) => {
        event.preventDefault(); 
        searchText(text);
    }
    return (
        <div className="search-box">
        <form onSubmit={onSubmit}>
        <input type="text" className="input-box" onChange={event => {settext(event.target.value)}}/>
        <button type="submit"><SearchIcon/></button>
        </form>
        </div>
    )
}

export default TextBox
