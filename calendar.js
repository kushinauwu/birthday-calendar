function birthday_active(clicked_id) {
    /*Get ID of clicked element and add -birthday to it, which is the ID format of the picture of the person whose birthdate is clicked*/
    const birthdayPerson = clicked_id + "-birthday";
    console.log("On date mouseover, it is " + birthdayPerson);
    document.getElementById(birthdayPerson).style.filter = "blur(0px)";

    /*unblur the birthday person's image on mouseover*/
    document.getElementById(clicked_id).className = "is-birthday";
}

function birthday_inactive(clicked_id) {
    /* Get ID of clicked element and add -birthday to it, which is the ID format of the picture of the person whose birthdate is clicked*/
    const birthdayPerson = clicked_id + "-birthday";

    /*blur the birthday person's image on mouseout*/
    document.getElementById(birthdayPerson).style.filter = "blur(5px)";
    document.getElementById(clicked_id).className = "birthday";
}

function birthday_photo_active(clicked_id) {
    /* make the hovered peron's picture and info clear*/
    document.getElementById(clicked_id).style.filter = "blur(0px)";

    /*remove the -birthday from the element id so thet only the name will remain*/
    const birthdate = clicked_id.split("-")[0];
    console.log("on picture hover, it is " + birthdate + "'s birthday.");
    /*change the class of the birthdate to is-birthday*/
    document.getElementById(birthdate).className = "is-birthday";
}

function birthday_photo_inactive(clicked_id) {
    /*blur the person's info and picture on mouseout*/
    document.getElementById(clicked_id).style.filter = "blur(5px)";

    const birthdate = clicked_id.split("-")[0];
    console.log("Mouseout. It was " + birthdate + "'s birthday.");
    /*change the class of the birthdate back to the default*/
    document.getElementById(birthdate).className = "birthday";
}
