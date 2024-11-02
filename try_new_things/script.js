function filterItems(tableId) {
  const input = document.getElementById("searchInput");
  const filter = input.value.toLowerCase();
  const table = document.getElementById(tableId);
  const rows = table.getElementsByTagName("tr");

  // Iteruj przez wszystkie wiersze tabeli (poza naglowkiem)
  for (let i = 1; i < rows.length; i++) {
    const cells = rows[i].getElementsByTagName("td");
    let found = false;

    // sprawdz czy ktoras komorka zawiera szukany tekst
    for (let j = 0; j < cells.length; j++) {
      if (
        cells[j].textContent.toLowerCase().indexOf(filter) > -1 ||
        (cells[j].dataset.categories &&
          cells[j].dataset.categories.toLowerCase().indexOf(filter) > -1)
      ) {
        found = true; // jesli znajdziesz pasujacy tekst, ustaw found na true
        break;
      }
    }

    //pokaz lub ukryj wiersz w zaleznosci czy znaleziono szukana fraze
    if (found) {
      rows[i].style.display = ""; //pokaz
    } else {
      rows[i].style.display = "none"; //ukryj
    }
  }
}
