function DataTable() {
  return (
    <table border="1" cellPadding="5" cellSpacing="0">
      {/* Table header */}
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Status</th>
        </tr>
      </thead>

      {/* Table body */}
      <tbody>
        {userData.map((user) => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.isAvailable ? "Online" : "Offline"}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

const userData = [
  { id: 1, name: "Alice", isAvailable: true },
  { id: 2, name: "Bob", isAvailable: false },
  { id: 3, name: "Charlie", isAvailable: true },
  { id: 4, name: "suchee", isAvailable: true }
];

export default DataTable;