var xhr = new XMLHttpRequest();

xhr.open('GET', 'https://faistoncine-back.herokuapp.com');

xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

xhr.send('nom=' + nom + '&prenom=' + prenom + '&pseudo=' + pseudo + '&age=' + age + '&mail=' + mail + '&pwd=' + pwd + '&sexe=' + sexe);

