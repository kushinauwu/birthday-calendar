function birthday_active(clicked_id) {
    /*
    Get iD of clicked element and add -birthday to it, which is the ID format of the pcitture of the person whose birthdate is clicked
    */
    const birthdayPerson = clicked_id + "-birthday";
    console.log(birthdayPerson);

    /*
    unblur the birthday person's image on mouseover
    */

    document.getElementById(birthdayPerson).style.filter = "blur(0px)";
    console.log("unblurred");

}

function birthday_inactive(clicked_id) {
    /*
    Get iD of clicked element and add -birthday to it, which is the ID format of the pcitture of the person whose birthdate is clicked
    */
    const birthdayPerson = clicked_id + "-birthday";
    console.log(birthdayPerson);

    /*
    blur the birthday person's image on mouseout
    */

    document.getElementById(birthdayPerson).style.filter = "blur(5px)";
    console.log("blurred");
}
