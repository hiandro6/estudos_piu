import './Dropdown.css'

export default function Dropdown(props) {
    return (
        <nav>
            <ul>
                {props.titulo.map((tituloItem, idx) => (
                    <li className='dropdown' key={idx}>
                        <a href=''>{tituloItem}</a>
                        <div className='dropdown-menu'>
                            {props.lista.map((item, index) => (
                                <a key={index} href=''>{item}</a>
                            ))}
                        </div>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
