import React, {useState} from 'react';
import './styles.css';
import jsonData from './MOCK_DATA.json';

const App = () => {
    const [searchTerm, setSearchTerm] = useState('');
    return(
        <>
        <div className='search-box'>
            <input type='text' placeholder='Search...' onChange={(event => {
                setSearchTerm(event.target.value)
            })} />
        </div>
        <div className='display'>
            {jsonData.filter((data) => {
               if(searchTerm === '')
               return null;
               else if(data.first_name.toLowerCase().includes(searchTerm.toLowerCase()))
               return data; 
            }).map((data, key) => {
                return (
                    <div key={key}>
                        <p>{data.first_name}</p>
                    </div>
                )
            
            })}
        </div>
        </>
    )
}

export default App;