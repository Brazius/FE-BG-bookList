const bookTable = document.querySelector('.table_list');

function renderBooklist() {
    if (books.length > 0) {
        books.forEach(book => {
            bookTable.innerHTML += `
            <tr class="table_list__content">
                <td>${book.title}</td>
                <td>${book.author}</td>
                <td>${book.year}</td>
                <td>${book.genre}</td>
            </tr>`;
        })
    } else {
        bookTable.innerHTML +='<h1>No books</h1>';
    }
}

renderBooklist();