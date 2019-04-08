export class Book implements IBookitem {
    id?: string;
    authors: string;
    cover: string;
    description: string;
    isbn10: number;
    publishDate: string;
    title: string;
    publisher: string;
    binding: string;
    amazonLink: string;
    users: string;

    constructor(authors: string, cover: string, description: string, isbn10: number, publishDate: string, title: string, publisher: string, binding: string, amazonLink: string, users: string)
    {
        this.authors = authors;
        this.cover = cover;
        this.description = description;
        this.isbn10 = isbn10;
        this.publishDate = publishDate;
        this.title = title;
        this.publisher = publisher;
        this.binding = binding;
        this.amazonLink = amazonLink;
        this.users = users;
    }

    toString(){
        return "this is a book";
    }
}