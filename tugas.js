document.getElementById('jumlah-saldo').addEventListener('submit', function (event) {
    event.preventDefault();

    const saldoAwal = parseFloat(document.getElementById('saldo-sekarang').value);
    const saldoTambahan = parseFloat(document.getElementById('saldo-tambahan').value);

    const totalSaldo = saldoAwal + saldoTambahan;
    alert(`jadi toal saldo kamu sebersar Rp. ${totalSaldo}`);

})
