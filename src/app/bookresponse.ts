interface IBookResponse {
    kind: string;
    totalItems: number;
    items?: (ItemsEntity)[] | null;
  }
interface ItemsEntity {
    kind: string;
    id: string;
    etag: string;
    selfLink: string;
    volumeInfo: VolumeInfo;
    saleInfo: SaleInfo;
    accessInfo: AccessInfo;
    searchInfo: SearchInfo;
  }
interface VolumeInfo {
    title: string;
    subtitle: string;
    authors?: (string)[] | null;
    publisher: string;
    publishedDate: string;
    description: string;
    industryIdentifiers?: (IndustryIdentifiersEntity)[] | null;
    readingModes: ReadingModes;
    pageCount: number;
    printType: string;
    categories?: (string)[] | null;
    maturityRating: string;
    allowAnonLogging: boolean;
    contentVersion: string;
    panelizationSummary: PanelizationSummary;
    imageLinks: ImageLinks;
    language: string;
    previewLink: string;
    infoLink: string;
    canonicalVolumeLink: string;
  }
interface IndustryIdentifiersEntity {
    type: string;
    identifier: string;
  }
interface ReadingModes {
    text: boolean;
    image: boolean;
  }
interface PanelizationSummary {
    containsEpubBubbles: boolean;
    containsImageBubbles: boolean;
  }
interface ImageLinks {
    smallThumbnail: string;
    thumbnail: string;
  }
interface SaleInfo {
    country: string;
    saleability: string;
    isEbook: boolean;
  }
interface AccessInfo {
    country: string;
    viewability: string;
    embeddable: boolean;
    publicDomain: boolean;
    textToSpeechPermission: string;
    epub: EpubOrPdf;
    pdf: EpubOrPdf;
    webReaderLink: string;
    accessViewStatus: string;
    quoteSharingAllowed: boolean;
  }
interface EpubOrPdf {
    isAvailable: boolean;
  }
interface SearchInfo {
    textSnippet: string;
  }
  