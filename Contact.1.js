///<reference lib ="es2015"/>
var Contact1 = /** @class */ (function () {
    function Contact1(name, email, phone, group) {
        this.name = name;
        this.email = email;
        this.phone = phone;
    }
    return Contact1;
}());
var AddressBook = /** @class */ (function () {
    function AddressBook() {
        this.contacts = [];
    }
    AddressBook.prototype.addContact = function (contact) {
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        var phoneRegex = /^[\+]?([0-9][\s]?|[0-9]?)([(][0-9]{3}[)][\s]?|[0-9]{3}[-\s\.]?)[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
        if (!emailRegex.test(contact.email)) {
            throw new Error("Invalid email format");
        }
        // Name validation (example - check for empty name)
        if (!contact.name || contact.name.trim() === "") {
            throw new Error("Name cannot be empty");
        }
        if (!phoneRegex.test(contact.phone)) {
            throw new Error("Invalid phone format");
        }
        // You can add further validations for phone number format, etc.
        this.contacts.push(contact);
        console.log('added');
        console.log(this.contacts);
    };
    AddressBook.prototype.findContactByName = function (name) {
        return this.contacts.find(function (contact) { return contact.name === name; });
    };
    AddressBook.prototype.filterByGroup = function (group) {
        return this.contacts.filter(function (contact) { return contact.group === group; });
    };
    AddressBook.prototype.sortByName = function () {
        console.log('sorted');
        return this.contacts.sort(function (a, b) { return a.name.localeCompare(b.name); });
    };
    AddressBook.prototype.searchContacts = function (searchTerm) {
        console.log('searching started');
        var normalizedSearchTerm = searchTerm.toLowerCase();
        return this.contacts.filter(function (contact) {
            return contact.name.toLowerCase().includes(normalizedSearchTerm);
        });
    };
    AddressBook.prototype.printContacts = function () {
        for (var _i = 0, _a = this.contacts; _i < _a.length; _i++) {
            var contact = _a[_i];
            console.log("Name: ".concat(contact.name));
            console.log("Email: ".concat(contact.email));
            console.log("Phone: ".concat(contact.phone));
            console.log("-----");
        }
    };
    return AddressBook;
}());
var addressBook = new AddressBook();
var contact1 = new Contact1("John Doe", "johndoe@example.com", "123-456-7890", "g1");
var contact2 = new Contact1("Alice Smith", "alice.smith@invalid", "456-789-0123", "g2"); // Invalid email
var contact3 = new Contact1("", "valid@email.com", "789-012-3456", "g2"); // Empty name
var contact4 = new Contact1("Jahne Doe", "johndoe@example.com", "+1 333-555"); //Invalid phone
var contact5 = new Contact1("Kim uuudu", "kimdoe@example.com", "123-456-7890", "g1");
var contact6 = new Contact1("Kate Doe", "katedoe@example.com", "123-456-7890", "g1");
addressBook.addContact(contact1);
addressBook.addContact(contact5);
addressBook.addContact(contact6);
try {
    addressBook.addContact(contact2); // This will throw an error (invalid email)
    addressBook.addContact(contact3); // This will throw an error (empty name)
    addressBook.addContact(contact4); // This will throw an error (invalid phone)
}
catch (error) {
    if (typeof error === "object" && error
        && "message" in error &&
        typeof error.message === "string") {
        console.error("Error adding contact:", error.message);
    }
}
console.log(addressBook.findContactByName("kate Doe")); //returns undefined
console.log(addressBook.findContactByName("Kate Doe"));
console.log(addressBook.sortByName());
console.log(addressBook.searchContacts("Doe"));
