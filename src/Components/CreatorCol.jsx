import React from 'react';
import CreatorOperations from '../Components/CreatorOperations';
function CreatorCol({Role,elem}) {
    return (
         <tr>
                <td>{elem.Title}</td>
                <td>{elem.Author}</td>
                <td>{elem.Category}</td>
                    {
                        Role === 'CREATOR' ? <CreatorOperations id={elem._id}/> : <></>
                    }
            </tr>
       
    );
}

export default CreatorCol;