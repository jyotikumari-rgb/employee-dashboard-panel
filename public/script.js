fetch('http://localhost:3000/api/employees')
  .then(res => res.json())
  .then(users => {
    const tableBody = document.getElementById("user-table-body");
    const searchInput = document.getElementById("search");

    function renderTable(data) {
      tableBody.innerHTML = "";
      data.forEach(user => {
        const row = document.createElement("tr");
        row.innerHTML = `
          <td>${user.name}</td>
          <td>${user.email}</td>
          <td>${user.role}</td>
          <td class="${user.status === 'Active' ? 'status-active' : 'status-inactive'}">${user.status}</td>
          <td><button class="btn-action">Actions ⬇</button></td>
        `;
        tableBody.appendChild(row);
      });
    }

    renderTable(users);

    searchInput.addEventListener("input", () => {
      const query = searchInput.value.toLowerCase();
      const filtered = users.filter(user =>
        user.name.toLowerCase().includes(query)
      );
      renderTable(filtered);
    });
  });
