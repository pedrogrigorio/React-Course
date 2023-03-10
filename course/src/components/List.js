import Item from "./Item"

function List() {

    return(
        <>
            <h1>Minha Lista</h1>
            <ul>
                <li>Item 1</li>
                <li>Item 2</li>
                <Item marca="Ferrari" lancamento={1985} />
            </ul>
        </>
    )
}

export default List