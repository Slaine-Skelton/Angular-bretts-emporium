import { Component, OnInit } from '@angular/core';
import { Book } from '../book.model';
import { GooglebooksApiService} from 'src/app/services/googlebooks-api.service';

@Component({
  selector: 'app-mylibrary',
  templateUrl: './mylibrary.component.html',
  styleUrls: ['./mylibrary.component.css'],
  providers: [GooglebooksApiService]
})
export class MylibraryComponent implements OnInit {

  bookData: IBookResponse;
  errorMessage: string;
  hidden: string;
  bookList: Book[];

  title: string;
  image: string;

  constructor(private _googleBooksService: GooglebooksApiService) { 

    this.emptyInputValues();

    this.hidden = "hidden";

    this.bookList = [
      new Book(
        "9781526361158",
        "http://books.google.com/books/content?id=dPP2swEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
        "You Are Awesome",
        "Matthew Syed",
        "2018-04-19",
        "SUNDAY TIMES NUMBER ONE BESTSELLER \"A very funny and inspiring read! Brilliantly practical with a wide variety of examples that make it relevant for both boys and girls (and adults)!\" - Amazon Customer \"A truly inspiring book for the younger generation!\" - Amazon Customer \"Brilliant book - perfect for that child/person who needs a little bit of confidence\" - Amazon Customer \"Everyone should read this ... Very motivational and inspiring.\" - Amazon Customer \"Genuinely funny and engaging. There are messages in this book for both adults and children. It's a must read.\" - Amazon Customer This positive and empowering guide, by bestselling mindset author Matthew Syed, will help boys and girls build resilience, fulfil their potential and become successful, happy, awesome adults. I'm no good at sport ... I can't do maths ... I really struggle with exams ... Sound familiar? If you believe you can't do something, the chances are you won't try. But what if you really could get better at maths, or sport or exams? In fact, what if you could excel at anything you put your mind to? You Are Awesome can help you do just that, inspiring and empowering young readers to find the confidence to realise their potential. The first children's book from Times journalist, two-time Olympian and best-selling mindset author Matthew Syed, it uses examples of successful people from Mozart to Serena Williams to demonstrate that success really is earned rather than given, and that talent can be acquired. With hard work and determination, practice and self-belief, and, most importantly, a Growth Mindset, there's no reason why anyone can't achieve anything. Practical, insightful and positive, this is the book to help children build resilience, embrace their mistakes and grow into successful, happy adults."
      ),

      new Book(
        "0008234183",
        "http://books.google.com/books/content?id=ghnNwAEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
        "The Woman in the Window",
        "A. J. Finn",
        "2018-11-29",
        "THE NUMBER ONE NEW YORK TIMES BESTSELLER OVER 2 MILLION COPIES SOLD!'Astounding. Thrilling. Amazing' Gillian Flynn'One of those rare books that really is unputdownable' Stephen King'Twisted to the power of max' Val McDermid'A dark, twisty confection' Ruth Ware What did she see? It's been ten months since Anna Fox last left her home. Ten months during which she has haunted the rooms of her old New York house, lost in her memories, too terrified to step outside. Anna's lifeline to the real world is her window, where she sits, watching her neighbours. When the Russells move in, Anna is instantly drawn to them. A picture-perfect family, they are an echo of the life that was once hers. But one evening, a scream rips across the silence, and Anna witnesses something horrifying. Now she must uncover the truth about what really happened. But if she does, will anyone believe her? And can she even trust herself?"
      ),

      new Book(
        "0008342571",
        "http://books.google.com/books/content?id=Zj3vwQEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
        "Fing",
        "David Walliams",
        "2019-02-21",
        "The new children's book from No. 1 bestselling author David Walliams - a deliciously daft Tall Story of a child who had everything, but still wanted more. Illustrated by artistic genius, Tony Ross. Meet the Meeks! Myrtle Meek has everything she could possibly want. But everything isn't enough. She wants more, more, MORE! When Myrtle declares she wants a FING, there's only one problem... What is a FING? Mr and Mrs Meek will do anything to keep their darling daughter happy, even visit the spooky library vaults to delve into the dusty pages of the mysterious Monsterpedia. Their desperate quest leads to the depths of the jungliest jungle where the rarest creatures can be found. But will they ever find a FING? An explosively funny, totally surreal Tall Story about two perfectly nice parents and their unbelievably monstrous daughter from the phenomenal bestselling author David Walliams."
      ),

      new Book(
        "1786483734",
        "http://books.google.com/books/content?id=ttZDswEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
        "The Last Thing She Told Me",
        "Linda Green",
        "2019-11-05",
        "Even the deepest buried secrets can find their way to the surface... Moments before she dies, Nicola's grandmother, Betty whispers to here that there are babies buried in the garden. Nicola's mother claims she was talking nonsense. However, when Nicola's daughter find a bone while playing in Betty's garden, it's clear that something sinister has taken place. But will unearthing painful family secrets end up tearing Nicola's family apart? The new emotionally-charged suspense novel from Linda Green, the bestselling author of While My Eyes Were Closed and After I am Gone."
      )
      ];

  }

  itemWasSelected(item: Book): void {
    console.log('Item clicked: ', item);
  }

  ngOnInit() {
  }

  getBookDetails(isbn: string): boolean {
    this._googleBooksService.getBookData(isbn).subscribe(
      
      bookData => {


      this.bookData = bookData;
      console.log('getBookDetails: ' + this.bookData.items[0].volumeInfo.title);
      this.setInputData();
    },
    error => this.errorMessage = <any>error);
    return false;
  }

  addModal(){
    this.hidden ="show";
  }

  removeModal(){
    this.hidden ="hidden";
  }

  emptyInputValues(){
    this.title = "";
    this.image = "";
  }

  setInputData(){
    this.title = this.bookData.items[0].volumeInfo.title;
    this.image = this.bookData.items[0].volumeInfo.imageLinks.thumbnail;
    
  }
}
