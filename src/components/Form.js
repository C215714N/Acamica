import { Actions } from './Actions'
export const Form = (props) => { return(
    props.data.formData ?
    <form className="form" onSubmit={ (e) => { e.preventDefault() } }>
        <FormFields data={props.data.formData} />
        <Actions />
    </form> : null
)   }
const FormFields = (props) => { return(
    props.data.map((field, i) => 
        <div key={i} className="field">
            <label htmlFor={field.name}> {field.text}</label>
            <input name={field.name} type={field.type} placeholder={field.value} required />
        </div> 
)   )   }