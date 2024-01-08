export default function Filter(props) {
    return <input type="text"
        onChange={(evt) => props.filterEvent(evt.target.value)}
        placeholder="search by name" />

}