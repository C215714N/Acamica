export const Actions = (props) => { return (
    <div>
        <button type="reset">{ props.text || 'Cancelar' }</button>
        <button>{ props.text || 'Aceptar' }</button>
    </div>
)   }