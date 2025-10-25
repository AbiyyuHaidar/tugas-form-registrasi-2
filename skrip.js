function tampilkanLog() {
  const namaDepan = document.getElementById('namaDepan').value;
  const namaBelakang = document.getElementById('namaBelakang').value;
  const nilaiAngka = parseInt(document.getElementById('nilaiAngka').value);

  if (isNaN(nilaiAngka) || namaDepan === "" || namaBelakang === "") {
    alert("Harap isi semua kolom terlebih dahulu!");
    return;
  }

  let nilaiHuruf = "";
  if (nilaiAngka >= 85) nilaiHuruf = "A";
  else if (nilaiAngka >= 70) nilaiHuruf = "B";
  else if (nilaiAngka >= 55) nilaiHuruf = "C";
  else if (nilaiAngka >= 40) nilaiHuruf = "D";
  else nilaiHuruf = "E";

  // Menampilkan hasil langsung di halaman
  const hasilDiv = document.getElementById("hasil");
  hasilDiv.innerHTML = `
    <h2>Hasil Penilaian</h2>
    <p><strong>Nama Lengkap:</strong> ${namaDepan} ${namaBelakang}</p>
    <p><strong>Nilai Angka:</strong> ${nilaiAngka}</p>
    <p><strong>Nilai Huruf:</strong> ${nilaiHuruf}</p>
  `;
}
