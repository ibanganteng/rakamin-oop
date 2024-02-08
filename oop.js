class FormTable {
    constructor(formId, tableId) {
      this.form = document.getElementById(formId);
      this.table = document.getElementById(tableId);
      this.tbody = this.table.querySelector('tbody');
    }

   dataMasuk() {
        const nama = this.form.elements.nama.value;
        const umur = this.form.elements.umur.value;
       const uangSaku = this.form.elements.uangSaku.value;

        if (nama && umur && uangSaku) {
          const newRow = this.tbody.insertRow();
          const cellNama = newRow.insertCell(0);
          const cellUmur = newRow.insertCell(1);
          const celluangSaku = newRow.insertCell(2);

          cellNama.textContent = nama;
          cellUmur.textContent = umur;
          celluangSaku.textContent= uangSaku;

          this.form.reset(); // Clear the form fields
        } else {
          alert('Harap isi semua kolom formulir.');
        }
      }
    }

    const formTable = new FormTable('myForm', 'myTable');

    function dataMasuk() {
      formTable.dataMasuk();
    }
