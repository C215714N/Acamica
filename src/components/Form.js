import { Actions } from './Actions'
export const Form = (props) => { return(
    props.data.formData ?
    <form className={ props.class ? props.class : 'access' } onSubmit={ (e) => { e.preventDefault() } }>
        <h2>{props.title || props.data.title}</h2>
        { props.data.formData.map((field, i) => 
            <label key={i} className="field" htmlFor={field.name}>
                <span>{ field.text }</span>
                <input id={ field.name } name={ field.name } 
                    placeholder={ field.placeholder } 
                    type={ field.type } list={ field.list } 
                    min={ field.min } max={ field.max } required />
            </label> ) } <Actions cancel={props.cancel} success={props.success}/>
    </form> : null
)   }