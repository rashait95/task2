
///<reference lib ="es2015"/>

class Contact1 {
    name: string;
    email: string;
    phone: string;
    group?:string;

    
    constructor(name:string, email:string, phone:string,group?:string) {
        this.name = name;
        this.email = email;
        this.phone = phone;
        
    }
}



class AddressBook{
    
    contacts :Contact1 [] =[];
   

    addContact(contact :Contact1) :void {
        const emailRegex:RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phoneRegex :RegExp=
        /^[\+]?([0-9][\s]?|[0-9]?)([(][0-9]{3}[)][\s]?|[0-9]{3}[-\s\.]?)[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
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
        console.log('added')
        console.log(this.contacts)

        
        
}



findContactByName(name:string) :Contact1 |undefined  {
    return this.contacts.find((contact) => contact.name === name);
  }


  filterByGroup(group:string) :Contact1 [] |undefined {
  return  this.contacts.filter((contact) => contact.group === group);
   
      
  }
  sortByName() : Contact1[] {
    console.log('sorted');
    return this.contacts.sort((a :Contact1, b:Contact1) => a.name.localeCompare(b.name));
    
  }

  searchContacts(searchTerm :string) :Contact1 []{
    console.log('searching started');
    const normalizedSearchTerm :string  = searchTerm.toLowerCase();
    return this.contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedSearchTerm)
    );
  }

  printContacts() :void {
    for (const contact of this.contacts) {
      console.log(`Name: ${contact.name}`);
      console.log(`Email: ${contact.email}`);
      console.log(`Phone: ${contact.phone}`);
      console.log("-----");
    }
  }


}


const addressBook = new AddressBook();
const contact1 = new Contact1("John Doe", "johndoe@example.com", "123-456-7890","g1");
const contact2 = new Contact1("Alice Smith", "alice.smith@invalid", "456-789-0123","g2"); // Invalid email
const contact3 = new Contact1("", "valid@email.com", "789-012-3456","g2"); // Empty name
const contact4 = new Contact1("Jahne Doe", "johndoe@example.com", "+1 333-555");//Invalid phone
const contact5 = new Contact1("Kim uuudu", "kimdoe@example.com", "123-456-7890","g1");
const contact6 = new Contact1("Kate Doe", "katedoe@example.com", "123-456-7890","g1");

addressBook.addContact(contact1);
addressBook.addContact(contact5);
addressBook.addContact(contact6);


try {
    addressBook.addContact(contact2); // This will throw an error (invalid email)
    addressBook.addContact(contact3); // This will throw an error (empty name)
    addressBook.addContact(contact4); // This will throw an error (invalid phone)
} catch (error) {
    if (
        typeof error === "object" && error
        && "message" in error  &&
        typeof error.message ==="string"
    ){
        console.error("Error adding contact:", error.message);
    }
  
}

console.log(addressBook.findContactByName("kate Doe")) //returns undefined
console.log(addressBook.findContactByName("Kate Doe"))

console.log(addressBook.sortByName());

console.log(addressBook.searchContacts("Doe"));

console.log("Contacts:");
addressBook.printContacts();

// Example usage of new search functionality
const searchResults = addressBook.searchContacts("john");
console.log("Search results (name containing 'john'):");
searchResults.forEach((contact) => console.log(`  - ${contact.name}`));





