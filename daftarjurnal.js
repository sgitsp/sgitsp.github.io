var options = {
  valueNames: [ 'nama', 'tautan' ],
  item: '<li><h3 class="nama"></h3><p class="tautan"></p></li>'
};

var values = [{
    nama: 'Jonny Strömberg',
    tautan: 1986
  },
  {
    nama: 'Jonas Arnklint',
    tautan: 1985
  },
  {
    nama: 'LIPI',
    tautan: http://www.jurnal.lipi.go.id/
}];

var userList = new List('users', options, values);

userList.add({
  nama: "Gustaf Lindqvist",
  tautan: 1983
});