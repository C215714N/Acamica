export const Action = (props) => { return (
    <div className="actions">
        { /*props.data.map( button => <button onClick={ button.action }>{ button.text }</button> ) */ }
        <button type="reset">{ props.cancel || 'Cancelar' }</button>
        <button>{ props.success || 'Aceptar' }</button>
    </div>
)   }