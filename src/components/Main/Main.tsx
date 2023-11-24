import React, {useState, useEffect} from 'react'
import SearchBar from '../SearchBar/SearchBar'

const Main: React.FC = ()  =>{
    const [book, setBook] = useState<string>('');

  return (
    <div>
        <SearchBar setBook={setBook}/>
        
    </div>
  )
}

export default Main