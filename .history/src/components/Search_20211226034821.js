function Search() {
    const [searchTerm, setSearchTerm] = useState('')

    return (
        <div>
             <div class="main items-center justify-center content-center	">
                <input type="text" name="input" class="input" placeholder="Search Something....." onChange={(event) => {
                    setSearchTerm(event.target.value);
                }} />
                
            </div>
        </div>
    )
}

export default Search
