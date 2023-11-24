import React from 'react'
import {useState, KeyboardEvent} from 'react'

interface SearchProps {
    setBook: (value: string) => void;
}



    const SearchBar: React.FC<SearchProps>= ({setBook})  =>{
    const [searchBook, setSearchBook] = useState<string>('');
    const handleSearch = () => {
        setBook(searchBook);
        setSearchBook('');
      };
  return (
    <div>
        <input
        type='text'
        placeholder='Name of book'
        value={searchBook}
        onChange={(e) => setSearchBook(e.target.value)}
        onKeyDown={(e: KeyboardEvent) => e.key === 'Enter' && handleSearch()}
        />
        <button onClick={handleSearch}>Search</button>
    </div>
  )
}

export default SearchBar