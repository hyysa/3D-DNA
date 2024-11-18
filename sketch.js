let angle = 0;

function setup() {
  createCanvas(600, 600, WEBGL);
}

function draw() {
  background(20);

  // Menambahkan pencahayaan
  directionalLight(255, 255, 255, 0, 1, -1);
  ambientLight(100);

  rotateY(frameCount * 0.01); // Memutar seluruh struktur DNA agar terlihat 3D

  let helixHeight = 300; // Tinggi heliks
  let steps = 20;       // Jumlah lilitan
  let radius = 50;      // Radius heliks
  let spacing = helixHeight / steps; // Jarak antar segmen

  for (let i = 0; i < steps; i++) {
    let y = -helixHeight / 2 + i * spacing; // Posisi vertikal
    let angleStep = i * TWO_PI / steps;

    // Posisi heliks 1
    let x1 = radius * cos(angleStep);
    let z1 = radius * sin(angleStep);

    // Posisi heliks 2
    let x2 = radius * cos(angleStep + PI);
    let z2 = radius * sin(angleStep + PI);

    // Heliks kiri (biru - bola)
    push();
    translate(x1, y, z1);
    fill(0, 0, 255); // Warna biru
    noStroke();
    sphere(10, 10, 10); // bola sebagai elemen heliks
    pop();

    // Heliks kanan (merah - bola)
    push();
    translate(x2, y, z2);
    fill(255, 0, 0); // Warna merah
    noStroke();
    sphere(10, 10, 10);
    pop();

    // Penghubung antar heliks (pasangan basa - kotak horizontal)
    push();
    translate((x1 + x2) / 2, y, (z1 + z2) / 2); // Posisi di tengah antara dua heliks
    let length = dist(x1, z1, x2, z2); // Panjang penghubung
    rotateY(angleStep + HALF_PI); // Orientasi kotak horizontal
    fill(200); // Warna abu-abu
    noStroke();
    box(length, 5, 5); // Kotak horizontal sebagai penghubung
    pop();
  }

  // Memperbarui sudut untuk animasi
  angle += 0.01;
}
