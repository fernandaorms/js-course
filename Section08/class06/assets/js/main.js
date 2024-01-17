class Table {
    constructor(objects, tClass, keys) {
        this.objects = objects;
        this.tClass = tClass;
        this.keys = keys;
        this.body = document.querySelector('#display');
    }

    createTableHead() {
        const thead = document.createElement('thead');
        
        this.keys.forEach(el => {
            let th = document.createElement('th');
            th.setAttribute('scope', 'col');
            
            if((el == 'id') || el == 'cpf') th.textContent = el.toUpperCase();
            else th.textContent = el;

            if(el === 'id') thead.insertAdjacentElement('afterbegin', th);
            else thead.insertAdjacentElement('beforeend', th);
        });

        return thead;
    }

    createTableRow(el) {
        const tr = document.createElement('tr');

        this.keys.forEach(key => {
            let td = document.createElement('td');
            
            if(key === 'salary') td.textContent = 'R$ ' + parseFloat(el[key]).toFixed(2);
            else td.textContent = el[key];

            if(key === 'id') {
                td.setAttribute('scope', 'row');
                tr.insertAdjacentElement('afterbegin', td);
            }
            else tr.insertAdjacentElement('beforeend', td);
        });
        
        return tr;
    }

    createTableBody() {
        const tbody = document.createElement('tbody');
        
        this.objects.forEach(el => {
            tbody.appendChild(this.createTableRow(el));
        });

        return tbody;
    }

    createTable() {
        const table = document.createElement('table');
        table.classList.add(this.tClass);

        table.appendChild(this.createTableHead());
        table.appendChild(this.createTableBody());

        this.body.appendChild(table);
    }
}


function loadElements(json) {
    json.forEach((obj, key) => obj.id = key);

    const keys = Object.keys(json[0]);

    const table = new Table(json, 'table', keys);

    table.createTable();
}


axios('people.json')
    .then(awnser => loadElements(awnser.data));

