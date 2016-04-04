var options = {
  valueNames: [ 'nama', 'tanggal', 'tautan' ],
  item: '<li><h3 class="nama"></h3><p class="tanggal"></p><p class="tautan"><a href=""tautan"">"tautan"</a></p></li>'
};

var values = [{
    nama: 'Jonny Strömberg',
	tanggal: 
    tautan: 1986
  },
  {
    nama: 'Jonas Arnklint',
    tautan: 1985
  },
  {
    nama: 'LIPI',
	tanggal: 3 April 2016
    tautan: http://www.jurnal.lipi.go.id/
}];

var userList = new List('users', options, values);

userList.add({
  nama: "Gustaf Lindqvist",
  tautan: 1983
});