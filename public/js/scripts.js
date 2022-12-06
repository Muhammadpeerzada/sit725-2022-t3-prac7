//Cards
// const cardList = [
//     {
//         title: "Hammer",
//         image: "images/hammer.png",
//         link: "About Hammer",
//         desciption: "Demo desciption about Hammer"
//     },
//     {
//         title: "Screwdriver",
//         image: "images/screwdriver.png",
//         link: "About Screwdriver",
//         desciption: "Demo desciption about Screwdriver"
//     }
// ]

const getCards = () => {
    $.get('/api/cards',(response) => {
        if(response.statusCode==200){
            addCards(response.data);
        }
    })
}

const addCards = (items) => {
    items.forEach(item => {
        let itemToAppend = '<div class="col s4 center-align">'+
    '<div class="card medium"><div class="card-image waves-effect waves-block waves-light"><img class="activator" src="'+item.image+'">'+
    '</div><div class="card-content">'+
    '<span class="card-title activator grey-text text-darken-4">'+item.title+'<i class="material-icons right">more_vert</i></span><p><a href="#">'+item.link+'</a></p></div>'+
    '<div class="card-reveal">'+
        '<span class="card-title grey-text text-darken-4">'+item.title+'<i class="material-icons right">close</i></span>'+
        '<p class="card-text">'+item.desciption+'</p>'+
      '</div></div></div>';
      $("#card-section").append(itemToAppend)
    });
}


//Modal Form
const submitForm = () => {
    let formData = {};
    formData.title = $('#title').val();
    formData.image = $('#image').val();
    formData.link = $('#link').val();
    formData.description = $('#description').val();

    console.log("Form Data Submitted: ", formData);
    submitCardToDB(formData);
    console.log("Form Data Submitted!");
}

//Ajax Function for sending card information to MongoDB...
const submitCardToDB = (card) => {
    $.ajax({
        url: '/api/cards',
        data: card,
        type: 'POST',
        success: (result) => {
            alert("Added a new Tool!");
            location.reload();
        }
    })
    console.log("Submitting new Card...");
}

// const clickMe = () => {
//     alert("Thanks for clicking me. Hope you have a nice day!")
// }


$(document).ready(function(){
    $('.materialboxed').materialbox();
    $('#formSubmit').click(()=>{
        submitForm();
    })
    $('.modal').modal();
    getCards();
  });
