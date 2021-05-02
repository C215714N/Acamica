export const Field = (props) => { return (
    <label className="field" htmlFor={ props.field.name }>
        <span>{ props.field.text }</span>
        <input
            id={ props.field.name }   name={ props.field.name } 
            type={ props.field.type } placeholder={ props.field.placeholder } 
            min={ props.field.min }   minLength={ props.field.min }
            max={ props.field.max }   maxLength={ props.field.max }
            list={ props.field.list } required />
    </label>
)   }