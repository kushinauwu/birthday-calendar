function birthday_click(clicked_id) {
    /*
    Get iD of clicked element and add -birthday to it, which is the ID format of the pcitture of the person whose birthdate is clicked
    */
    const birthdayPerson = clicked_id + "-birthday";
    console.log(birthdayPerson);

    /*
    unblur the birthday person's image
    */
    document.getElementById(birthdayPerson).style.filter = "blur(0px)";
}
