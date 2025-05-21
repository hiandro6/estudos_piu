export default function Cards() {
    let images = [
        { title: 'aaaaaa', id: 1, url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi9pGOv0ufhxmN4YF9bUAVPXmRn_4Sf7HHGA&s"},
        { title: 'deixe de ideia peão', id: 2, url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4vlJy2ocsHrAmCifyvgwpHh5jZ_JbjJ2yWg&s"},
        { title: 'seu nó cego', id: 3, url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH5DoExCKhdK1EcxVFhao9wPQXpOkz1sT2Ag&s"},
        { title: 'aaaaaa', id: 1, url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi9pGOv0ufhxmN4YF9bUAVPXmRn_4Sf7HHGA&s"},
        { title: 'aaaaaa', id: 1, url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi9pGOv0ufhxmN4YF9bUAVPXmRn_4Sf7HHGA&s"},
        { title: 'aaaaaa', id: 1, url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi9pGOv0ufhxmN4YF9bUAVPXmRn_4Sf7HHGA&s"}
      ];
    
    const listItems = images.map(image =>
    <li key={image.id}>
        <h1>{image.title}</h1>
        <img src={image.url} alt={image.title} />
        
    </li>
    );
    
    return (
    <ul>{listItems}</ul>
    );
}