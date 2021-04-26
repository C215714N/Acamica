export const Actions = (props) => { return (
    <div className="actions">
        <button type="reset">{ props.cancel || 'Cancelar' }</button>
        <button>{ props.success || 'Aceptar' }</button>
    </div>
)   }