import React,{Component} from 'react'
import BookList from './book_list'
import BookDetails from './Book_Details'
export default class App extends Component{
    render()
    {
        return(
            <div>
              <p>  React App begins</p> 
              <BookList/>
                <BookDetails/>
                 </div>
        )
    }
}