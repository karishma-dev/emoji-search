// Search component
export default function Search({handleChange}){
    return (
        <div className="search">
            <input 
                type='text' 
                onChange={(e) => handleChange(e)}
                placeholder="Enter a keyword"
                id="search-bar"/>
        </div>
    )
}