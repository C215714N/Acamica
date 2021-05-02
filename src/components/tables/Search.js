import { Form } from '../forms/Form'
import { SearchData } from './SearchData'
import { Table } from './Table'
export const Search = (props) => { return (
    <section>
        <Form data={ props.data.form } />
        <SearchData />
        <Table data={ props.data.userData } action={ props.action }/>
    </section>
)   }