export class User implements IUser{
    id?: string;
    username: string;
    password: string;
    firstname: string;
    lastname: string;
    libraryName: string;
    about: string;
    rating: number;
    email: string;
    userID: number;

    constructor(username: string, password: string, firstname: string, lastname: string, libraryName: string, about: string, rating: number, email: string,userID: number)
    {
        this.username = username;
        this.password = password;
        this.firstname = firstname;
        this.lastname = lastname;
        this.libraryName = libraryName;
        this.about = about;
        this.rating = rating;
        this.email = email;
        this.userID = userID;
    }

    toString(){
        return "this is a user";
    }
}