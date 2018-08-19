import React, {component} from 'react'
import { connect } from 'react-redux'


class BookDetails extends component{
    render()
    {  if(!this.props.bk)
        {
            return <div> select a book to get started</div>
        }
        return 
        (
         <div>
            <h3> book details are</h3>
            <div> title: {this.props.bk.title} </div>
            <div> pages: {this.props.bk.pages} </div>
            <div> author: {this.props.bk.author} </div>
        </div>
        )
    }
}

function mapStateToProps(state)
{
    return{
        bk :state.activeBook
    }
}

export default connect(mapStateToProps)(BookDetails)