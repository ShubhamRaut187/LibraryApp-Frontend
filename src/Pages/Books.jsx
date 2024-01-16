import React,{useState} from 'react';
import './Styles/Books.css'
import PageTitle from '../Components/PageTitle';
import CreatorComp from '../Components/CreatorComp';
import CreatorOperations from '../Components/CreatorOperations';
function Books(props) {
    let [Role,SetRole] = useState('VIEWER');
    return (
        <div>
            <PageTitle Title={'Books'}/>
            {
                Role === 'VIEWER' || Role === 'CREATOR' ? <CreatorComp Role={Role} SetRole={SetRole}/> : <></>
            }
            <div className='books_main'>
                <table className='books_table'>
                    <thead>
                    <tr>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Category</th>
                        {
                            Role === 'CREATOR' ? <th>Operations</th> : <></>
                        }
                    </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>ABC</td>
                            <td>ABC</td>
                            <td>ABC</td>
                            {
                                Role === 'CREATOR' ? <CreatorOperations/> : <></>
                            }
                        </tr>
                    </tbody>

                </table>
            </div>
        </div>
    );
}

export default Books;