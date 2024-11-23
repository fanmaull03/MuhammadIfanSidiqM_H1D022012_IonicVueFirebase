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

<b> Penjelasan Alur dari Login hingga Profil ditampilkan </b> <br> <br>
<ol>
  <li><b>Login dengan Google</b></li>
  Setelah berhasil login, data pengguna (seperti displayName, email, dan photoURL) disimpan oleh store (dalam hal ini authStore). Data ini dapat diakses di berbagai halaman, termasuk halaman profil. Contoh pada store: <br>
  <b>user.value = result.user; // Menyimpan data user dari Firebase
</b> <br> <br>
  <li><b>Menampilkan Data di Halaman Profil</b></li>
  Halaman profil membaca data pengguna dari authStore menggunakan computed property: <br>
  <b>const user = computed(() => authStore.user); <br>
const userPhoto = ref(user.value?.photoURL || 'https://ionicframework.com/docs/img/demos/avatar.svg');
</b> <br>
  Data ini kemudian dihubungkan ke elemen-elemen berikut di template: <br>
<ul> <li><b>Foto profil: :src="userPhoto"</b></li>
    <li><b>Nama: :value="user?.displayName"</b></li>
  <li><b>Email: :value="user?.email"</b></li>
</ul> <br> <br>
  
  <li><b>Menangani Gambar Error</b></li>
    Jika gambar profil gagal dimuat, fungsi handleImageError akan mengganti avatar dengan gambar default: <br>
    <b>function handleImageError() {
    userPhoto.value = 'https://ionicframework.com/docs/img/demos/avatar.svg';
}
</b> <br>

<li> <b> Navigasi Antar Tab</b></b></li>
Menu navigasi di bagian bawah halaman memungkinkan pengguna berpindah antara halaman Home dan Profile.
Hal ini diimplementasikan menggunakan komponen < TabsMenu />, seperti berikut:<br>
  <b>< TabsMenu />
</b> <br> <br>
  <li><b>Fungsi Logout</b></li>
    Jika tombol Logout ditekan, fungsi logout akan dipanggil untuk menghapus data pengguna dari store: <br>
    <b>const logout = () => { <br>
    authStore.logout();<br>
}; <br>
</b>
    Aplikasi kemudian akan mengarahkan pengguna kembali ke halaman login.
</ol> <br>
<br>

# Penjelasan CRUD pada aplikasi To-Do-List <br>

<ol>
  <li><b> Create </b></b></li>
  Operasi ini dilakukan melalui modal input: <br>
<img src="https://github.com/user-attachments/assets/60306e28-7ef2-4a07-94f7-ad2682b5fc59" width="200"> 
<img src="https://github.com/user-attachments/assets/13c276c0-f436-4097-9075-d3f09359d219" width="250">
<br>
  <br> <br>
<ul>
  <li><b>Function:</b> handleSubmit</li><br>
  <li><b>Proses:</b></li>
  <ul>
  <li>Jika editingId bernilai null, berarti sedang menambah todo baru.</li>
  <li>Data yang dikirimkan (title, description) akan diteruskan ke fungsi firestoreService.addTodo untuk ditambahkan ke database.</li>
  <li>Setelah berhasil, fungsi akan memuat ulang daftar todo dengan loadTodos().</li>
  </ul> <br>

  <li><b>Validasi:</b></li>
  Jika title kosong, akan muncul notifikasi bahwa input diperlukan (showToast dengan pesan "Title is required"). <br> <br>
  
  <li><b>Notifikasi Sukses:</b> Pesan "Todo added successfully".</li>
</ul>
<br> <br>

<li><b>Read (Membaca Daftar To-Do)</b></li>
Operasi ini memuat data dari database dan menampilkan daftar todo yang aktif dan selesai. <br> <br>

<img src="https://github.com/user-attachments/assets/2db68628-22b0-4a84-86b9-c0ece681a51e" width="250">
<img src="https://github.com/user-attachments/assets/9af79d9a-fcf7-4d1e-8677-102cdf219658" width="250">
<br> <br>

<ul><li>
  <b>Function:</b> loadTodos
</li> <br>
<li><b>Proses:</b></li>
<ul><li>Mengambil data menggunakan firestoreService.getTodos.</li>
<li>Memisahkan data ke dalam dua kelompok dengan bantuan computed properties:</li>
  activeTodos untuk todo yang belum selesai (status=false).<br>
  completedTodos untuk todo yang sudah selesai (status=true). <br>
<li>Data ini di-render di elemen < ion-list > menggunakan direktif v-for.
</li> <br>
</ul>
<br>
</ul>
<br> <br>

<li><b>Update (Memperbarui To-Do)</b></li> <br>
<img src="https://github.com/user-attachments/assets/db9e44e7-85df-4a1d-b2d6-85364804f7f3" width="250"> 
<img src="https://github.com/user-attachments/assets/cebc21ae-1681-418d-8cec-3cbfa3ff0fb2" width="250">
<img src="https://github.com/user-attachments/assets/eb2e1c94-3cee-4788-b36a-40a65f28a8c1" width="250"> <br> <br>

<ol type="a">
  <li><b>Mengedit To-Do</b></li> <br>
  <ul>
    <li><b>Function:</b> handleEdit</li> <br>
    <li><b>Proses</b></li>
    <ul> <li>Membuka modal input dengan data yang akan diubah.</li>
      <li>Menutup elemen ion - item - sliding yang sedang terbuka.</li>
      <li>Mengisi variabel todo dengan data yang ada untuk di-edit.</li>
      <li>Menandai ID todo yang diedit di editingId.</li>
      <li>Setelah diedit, perubahan disimpan melalui fungsi handleSubmit yang memanggil firestoreService.updateTodo.</li>
    </ul>
    <br>
    <li><b>Notifikasi Sukses:</b> Pesan "Todo updated successfully".</li>
  </ul> <br>
<li><b>Mengubah Status To-Do</b></li>
  <ul>
    <li><b>Function: handleStatus</b></li> <br>
    <li><b>Proses</b></li>
    <ul> 
      <li>Menutup elemen ion - item - sliding.</li>
      <li>Mengubah status menjadi kebalikan dari status saat ini:</li>
      Jika false, maka akan diubah menjadi true (completed). <br>
      Jika true, maka akan diubah menjadi false (active).<br>
      <li>Memanggil firestoreService.updateStatus untuk menyimpan perubahan.</li>
      <li>Memuat ulang daftar todo setelah berhasil.</li>
    </ul> <br>
    <li>Notifikasi Sukses: Pesan "Todo marked as completed/active".</li>
  </ul>
</ol>
<br>

<li><b>Delete (Menghapus To-Do)</b></li>
Operasi ini menghapus todo dari database. <BR> <BR>

<img src="https://github.com/user-attachments/assets/d0b4cf71-60a2-4e7d-a0c9-995803823fa5" width="250">
<img src="https://github.com/user-attachments/assets/cf82801d-f07c-467d-a5bd-642f02096aad" width="250">
<br> <br>

<ul><li>
  <b>Function:</b> handleDelete
</li> <br>
<li><b>Proses:</b></li>
  <ul><li>Menutup elemen ion - item - sliding.</li>
  <li>Memanggil fungsi firestoreService.deleteTodo dengan ID todo yang akan dihapus.</li>
  <li>Memuat ulang daftar todo setelah berhasil.</li>
</ul> <br>
  <li>Notifikasi Sukses: Pesan "Todo deleted successfully".</li>
</ul>

</ol>





