// In this project, we are needed to do the following, whenever we press a key down, a table should appear showing 3 columns and 2 rows

// table column headings: key, code and keycode

// Edge case, if we press space, no text is shown so use a conditional statement for this

const insert = document.querySelector('#insert');

// We will add an event listener to the window here

window.addEventListener('keydown', (e) => {
  // arrow function used here

  // Inserting a whole div for table in innerHTML 
  insert.innerHTML = `
  <div class = "color">
  <table>
  <tr>
  <th>Key</th>
  <th>Code</th>
  <th>KeyCode</th>
  </tr>

  <tr>
  <td>${e.key === ' ' ? 'Space' : e.key}</td>
  <td>${e.code}</td>
  <td>${e.keyCode}</td>

  </tr>
  </table>
  </div>`;

  // resolving the space case in td
});
