import { Thead, Tbody } from './TableData';
export const Table = (props) => { return (
    props.data[0] ?
    <table className="table">
        <Thead title={ props.data[0] } />
        <Tbody data={ props.data } action={ props.action }/>
    </table> : <p> No hay datos para mostrar. </p>
)   }