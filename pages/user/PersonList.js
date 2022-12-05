export default function PersonList({ personList, deletePerson }) {
  return (<>
    {personList.map((e) => {
      return (<div>
        <p>ID: {e.id} <span><button onClick={() => {deletePerson(e.id)}}>Hapus</button></span></p>
        <p>Name: {e.name}</p>
        <p>username: {e.username}</p>
        <p>email: {e.email}</p>
        <hr />
      </div>)
    })}
  </>);
}
