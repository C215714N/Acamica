import { Field } from './Field'
import { Action } from './Action'
export const Form = (props) => { return(
    <form className={ props.data.class } onSubmit={ (e) => { e.preventDefault() } }>
        <h2>{ props.data.title }</h2>
        { props.data.formData.map( ( field, i ) => <Field key={i} field={ field } /> ) } 
        <Action data={ props.data.event}/>
    </form>
)   }