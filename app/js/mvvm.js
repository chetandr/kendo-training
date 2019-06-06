$(document).ready(function() {
    const viewModel =  kendo.observable({
        firstname : "John",
        lastname : "Doe",
        genders: ["Male","Female"],
        gender: "Male",
        agreed: false,
        confirmed: false,
        register: function(e) {
            e.preventDefault();
            this.set("confirmed", true);
        },
        startOver: function(){
            this.set("confirmed", false);
            this.set("agreed", false);
            this.set("gender", "Male");
            this.set("lastname", "Doe");
            this.set("firstname", "John")
        }
    });

    kendo.bind($("form"), viewModel);
})

