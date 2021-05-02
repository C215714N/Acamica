export const DataList = (props) => {
    <datalist id={ props.id }>
        { props.options.map( opt => <option id={ opt.id } value={ opt.value }>{ opt.text }</option> ) }
    </datalist>
}