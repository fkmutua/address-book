// business logic
function Contact(first, last) {
    this.firstName = first;
    this.lastName = last;
    this.town = town;
    this.state = state;
    this.street = street;
}

Contact.prototype.fullName = function() {
    return this.firstName + " " + this.lastName;
}

// user interface logic
$(document).ready(function() {
    $("form#new-contact").submit(function(event) {
        event.preventDefault();

        var inputtedFirstName = $("input#new-first-name").val();
        var inputtedLastName = $("input#new-last-name").val();
        var inputtedTown = $("input#new-town").val();
        var inputtedState = $("input#new-state").val();
        var inputtedStreet = $("input#new-street").val();

        var newContact = new Contact(inputtedFirstName, inputtedLastName);

        $("ul#contacts").append("<li><span class='contact'>" + newContact.fullName() + "</span></li>");

        $("input#new-first-name").val("");
        $("input#new-last-name").val("");
        $("input#new-town").val("");
        $("input#new-state").val("");
        $("input#new-treet").val("");

        $(".contact").last().click(function() {
            $("#show-contact").show();
            $(".first-name").text(newContact.firstName);
            $(".last-name").text(newContact.lastName);
            $(".town").text(newContact.town);
            $(".state").text(newContact.state);
            $(".street").text(newContact.street);

        });
    });
});