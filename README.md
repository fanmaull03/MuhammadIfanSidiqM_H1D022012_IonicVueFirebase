<h1>Ionic 8 (With VUE & Firebase) </h1>

<P>Nama  : <b>Muhammad Ifan Sidiq Maulana</b><br>
NIM   : <b> H1D022012 </b> <br>
Shift KRS/Baru  : <b>A/E</b> </p> <br>

<img src="https://github.com/user-attachments/assets/863539ae-a55e-4235-b821-79c9d03eeca0" width="300"> <br> <br>
<b> Tampilan Awal - Login Page </b> <br>

<p>Halaman ini terdiri dari :</p>
<ul>
  <li>Judul: "Praktikum Pemrograman Mobile".</li>
  <li> Tombol login menggunakan Google dengan label "SIGN IN WITH GOOGLE" dan ikon Google.</li>
</ul>

<p>Ketika pengguna menekan tombol login, proses autentikasi dimulai dengan memanggil fungsi loginWithGoogle dari auth.ts.</p>

<b> Penjelasan Alur Autentikasi Login dengan Google </b> <br>

<ol>
  <li><b>Klik Tombol Login</b></li>
  Saat tombol login ditekan, fungsi loginWithGoogle dijalankan: <br>
  <b>const login = async () => { <br>
    await authStore.loginWithGoogle();<br>
};</b><br> <br>

  <li><b>Inisialisasi GoogleAuth</b></li>
  Aplikasi menginisialisasi GoogleAuth untuk login menggunakan akun Google: <br>
  <b>await GoogleAuth.initialize({ <br>
    clientId: 'YOUR_CLIENT_ID', <br>
    scopes: ['profile', 'email'], <br>
    grantOfflineAccess: true,<br>
});</b><br> <br>

<li><b>Proses Login dengan Google</b></li>
Pengguna diarahkan untuk memilih akun Google mereka. Setelah login, aplikasi mendapatkan idToken: <br>
<b>const googleUser = await GoogleAuth.signIn(); <br>
const idToken = googleUser.authentication.idToken; <br> <br>
</b>

<li><b>Autentikasi Firebase</b></li>
Token ini kemudian dikirimkan ke Firebase untuk verifikasi, menggunakan metode signInWithCredential: <br>
<b>const credential = GoogleAuthProvider.credential(idToken); <br>
const result = await signInWithCredential(auth, credential); <br> <br>
</b>

<li><b>Data Pengguna</b></li>
Setelah login berhasil, Firebase mengembalikan informasi pengguna, seperti nama (displayName), email, dan foto profil (photoURL). Informasi ini disimpan di variabel user: <br>
<b>user.value = result.user;
</b> <br> <br>

<li><b>Arahkan ke Halaman Home</b></li>
Setelah login, pengguna diarahkan ke halaman utama (/home) menggunakan router: <br>
<b>router.push("/home");
</b>
</ol>
<br>
<br>

<img src="https://github.com/user-attachments/assets/c20bd93e-8516-4e79-8409-d8ff00788615" width="300"> <br> <br>

<b> Home Page </b> <br> <br>
<ol>
  <li><b>Header</b></li>
  Bagian atas halaman menampilkan header dengan teks "Home"<br> <br>

  <li><b>Konten Utama</b></li>
  Konten utama halaman kosong, sesuai dengan "div" kosong di dalam elemen "ion-content" <br> <br>

  <li><b>Tabs Menu</b></li>
  Terdapat Tabs Menu di bagian bawah halaman dengan dua tab:
  <ul> <li>Home (ikon rumah, dalam keadaan aktif/berwarna biru).</li>
      <li> Profile (ikon orang, dalam keadaan non-aktif/abu-abu).</li>
  </ul> <br>
  Komponen TabsMenu bertanggung jawab untuk menampilkan navigasi antar halaman. Ketika tab Home aktif, ikon rumah akan berwarna biru, seperti yang terlihat pada screenshot. Hal ini diatur menggunakan Ionic "ion-tab-bar".<br>
</ol>
<br> <br>

<img src="https://github.com/user-attachments/assets/a3616b0e-2066-4188-87a7-82b45dc0111d" width="300"> <br> <br>

<b> Profile Page </b>
<br>
<ol>
  <li><b>Header</b></li>
  Terdapat teks judul "Profile" di bagian atas halaman. <br>
  Tombol Logout di pojok kanan atas, memungkinkan pengguna keluar dari akun mereka. <br> <br>

  <li><b>Avatar Profile</b>b></li>
    Foto profil pengguna ditampilkan dalam bentuk avatar berbentuk lingkaran. Jika foto gagal dimuat, default image (https://ionicframework.com/docs/img/demos/avatar.svg) akan digunakan.
    <br> <br>
    <li><b>Data Profil</b></li>
      Nama: Ditampilkan sesuai dengan displayName pengguna. Dalam hal ini: Ifan Maul. <br>
      Email: Ditampilkan sesuai dengan email pengguna, yaitu ifanmaul03@gmail.com. <br> <br>
      
  <li><b>Tabs Menu</b></li>
    Terdapat menu navigasi di bagian bawah halaman dengan dua tab: <br>
    Home (ikon rumah). <br>
    Profile (ikon orang, dalam keadaan aktif/berwarna biru). <br>
</ol>
<br> <br>




