
let currentPhoto = 0;
let imagesData = ['images/bika.jpg', 'images/grönlandi.jpg', 'images/nagyfeher.jpg', 'images/pöröly.jpg', 'images/szurke.jpg', 'images/tigris.jpg'];

let currentTitle = 0;
let TitleData = ['Bikacápa', 'Grönlandicápa', 'Nagyfehér cápa', 'Pöröly cápa', 'Szürke cápa', 'Tigris cápa'];

$('#photo').attr('src', imagesData[currentPhoto]);
$('#photo-title').text(TitleData[currentTitle]);

$('#jobbnyil').click(() => {
  if(currentPhoto < 5)  {
  currentPhoto++;
}
  $('#photo').attr('src', imagesData[currentPhoto]);
  $('#photo-title').text(TitleData[currentTitle]);
});

$('#balnyil').click(() => {
    if(currentPhoto > 0)  {
    currentPhoto--;
}
$('#photo').attr('src', imagesData[currentPhoto]);
$('#photo-title').text(TitleData[currentTitle]);
});
//

$('#bika').click(() => {
  $('#photo').attr('src', imagesData[0]);
  $('#photo-title').text(TitleData[0]);
});

$('#grönlandi').click(() => {
  $('#photo').attr('src', imagesData[1]);
  $('#photo-title').text(TitleData[1]);
});

$('#nagyfeher').click(() => {
  $('#photo').attr('src', imagesData[2]);
  $('#photo-title').text(TitleData[2]);
});

$('#pöröly').click(() => {
  $('#photo').attr('src', imagesData[3]);
  $('#photo-title').text(TitleData[3]);
});

$('#szurke').click(() => {
  $('#photo').attr('src', imagesData[4]);
  $('#photo-title').text(TitleData[4]);
});

$('#tigris').click(() => {
  $('#photo').attr('src', imagesData[5]);
  $('#photo-title').text(TitleData[5]);
});