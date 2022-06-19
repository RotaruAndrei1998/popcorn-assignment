import { normalizerBook } from "../utils/normalizers";
import { Book } from "../interfaces";

const mockData: Array<any> = [
  {
    kind: "books#volume",
    id: "9fQ2AQAAIAAJ",
    etag: "WOqUYUAImhI",
    selfLink: "https://www.googleapis.com/books/v1/volumes/9fQ2AQAAIAAJ",
    volumeInfo: {
      title: "Harry Lieberman",
      subtitle: "A Journey of Remembrance",
      authors: ["Stacy C. Hollander"],
      publisher: "Studio Books",
      publishedDate: "1991",
      description:
        "Shows folk paintings by Harry Lieberman, and includes the artist's comments on the background and symbolism of each work",
      industryIdentifiers: [
        {
          type: "OTHER",
          identifier: "UCSD:31822006888184",
        },
      ],
      readingModes: {
        text: false,
        image: false,
      },
      pageCount: 116,
      printType: "BOOK",
      categories: ["Artists"],
      maturityRating: "NOT_MATURE",
      allowAnonLogging: false,
      contentVersion: "0.3.2.0.preview.0",
      panelizationSummary: {
        containsEpubBubbles: false,
        containsImageBubbles: false,
      },
      imageLinks: {
        smallThumbnail:
          "http://books.google.com/books/content?id=9fQ2AQAAIAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
        thumbnail:
          "http://books.google.com/books/content?id=9fQ2AQAAIAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
      },
      language: "en",
      previewLink:
        "http://books.google.ro/books?id=9fQ2AQAAIAAJ&q=Harry&dq=Harry&hl=&cd=1&source=gbs_api",
      infoLink:
        "http://books.google.ro/books?id=9fQ2AQAAIAAJ&dq=Harry&hl=&source=gbs_api",
      canonicalVolumeLink:
        "https://books.google.com/books/about/Harry_Lieberman.html?hl=&id=9fQ2AQAAIAAJ",
    },
    saleInfo: {
      country: "RO",
      saleability: "NOT_FOR_SALE",
      isEbook: false,
    },
    accessInfo: {
      country: "RO",
      viewability: "NO_PAGES",
      embeddable: false,
      publicDomain: false,
      textToSpeechPermission: "ALLOWED",
      epub: {
        isAvailable: false,
      },
      pdf: {
        isAvailable: false,
      },
      webReaderLink:
        "http://play.google.com/books/reader?id=9fQ2AQAAIAAJ&hl=&printsec=frontcover&source=gbs_api",
      accessViewStatus: "NONE",
      quoteSharingAllowed: false,
    },
    searchInfo: {
      textSnippet:
        "Christian Education Review , Vol . 5 , Number 1 ( Spring 1968 ) , pp . 100 - 105 . 42 . <b>Harry</b> M . Rabinowicz , op . cit . , p . xi . 24 . <b>Harry</b> M . Rabinowicz , Hasidism the Movement and Its Masters ( Northvale , New Jersey , and London&nbsp;...",
    },
  },
  {
    kind: "books#volume",
    id: "V0NCAAAAIAAJ",
    etag: "NtQSxdfLrGk",
    selfLink: "https://www.googleapis.com/books/v1/volumes/V0NCAAAAIAAJ",
    volumeInfo: {
      title: "Harry Pickering",
      authors: ["Robert E. McClure"],
      publishedDate: "1938",
      industryIdentifiers: [
        {
          type: "OTHER",
          identifier: "UCAL:$B56993",
        },
      ],
      readingModes: {
        text: false,
        image: false,
      },
      pageCount: 372,
      printType: "BOOK",
      maturityRating: "NOT_MATURE",
      allowAnonLogging: false,
      contentVersion: "2.2.3.0.preview.0",
      panelizationSummary: {
        containsEpubBubbles: false,
        containsImageBubbles: false,
      },
      imageLinks: {
        smallThumbnail:
          "http://books.google.com/books/content?id=V0NCAAAAIAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
        thumbnail:
          "http://books.google.com/books/content?id=V0NCAAAAIAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
      },
      language: "en",
      previewLink:
        "http://books.google.ro/books?id=V0NCAAAAIAAJ&q=Harry&dq=Harry&hl=&cd=2&source=gbs_api",
      infoLink:
        "http://books.google.ro/books?id=V0NCAAAAIAAJ&dq=Harry&hl=&source=gbs_api",
      canonicalVolumeLink:
        "https://books.google.com/books/about/Harry_Pickering.html?hl=&id=V0NCAAAAIAAJ",
    },
    saleInfo: {
      country: "RO",
      saleability: "NOT_FOR_SALE",
      isEbook: false,
    },
    accessInfo: {
      country: "RO",
      viewability: "NO_PAGES",
      embeddable: false,
      publicDomain: false,
      textToSpeechPermission: "ALLOWED",
      epub: {
        isAvailable: false,
      },
      pdf: {
        isAvailable: false,
      },
      webReaderLink:
        "http://play.google.com/books/reader?id=V0NCAAAAIAAJ&hl=&printsec=frontcover&source=gbs_api",
      accessViewStatus: "NONE",
      quoteSharingAllowed: false,
    },
    searchInfo: {
      textSnippet:
        "“Unless I talked to them about my own experience,” said <b>Harry</b>. “The letter suggested that, didn&#39;t it? The only trouble is,” he added doubtfully, “I don&#39;t quite see, Cecil, what I could tell them about my own experience that would do&nbsp;...",
    },
  },
  {
    kind: "books#volume",
    id: "SiJQAQAAIAAJ",
    etag: "qL1oBJ1+V+Q",
    selfLink: "https://www.googleapis.com/books/v1/volumes/SiJQAQAAIAAJ",
    volumeInfo: {
      title: "Harry Bertoia",
      subtitle:
        "An Exhibition of His Sculpture and Graphics, 14 December 1975 to 8 February 1976, Allentown Art Museum ...",
      authors: ["Harry Bertoia", "Allentown Art Museum"],
      publishedDate: "1975",
      industryIdentifiers: [
        {
          type: "OTHER",
          identifier: "UCSD:31822034581454",
        },
      ],
      readingModes: {
        text: false,
        image: false,
      },
      pageCount: 58,
      printType: "BOOK",
      maturityRating: "NOT_MATURE",
      allowAnonLogging: false,
      contentVersion: "0.1.2.0.preview.0",
      panelizationSummary: {
        containsEpubBubbles: false,
        containsImageBubbles: false,
      },
      imageLinks: {
        smallThumbnail:
          "http://books.google.com/books/content?id=SiJQAQAAIAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
        thumbnail:
          "http://books.google.com/books/content?id=SiJQAQAAIAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
      },
      language: "en",
      previewLink:
        "http://books.google.ro/books?id=SiJQAQAAIAAJ&q=Harry&dq=Harry&hl=&cd=3&source=gbs_api",
      infoLink:
        "http://books.google.ro/books?id=SiJQAQAAIAAJ&dq=Harry&hl=&source=gbs_api",
      canonicalVolumeLink:
        "https://books.google.com/books/about/Harry_Bertoia.html?hl=&id=SiJQAQAAIAAJ",
    },
    saleInfo: {
      country: "RO",
      saleability: "NOT_FOR_SALE",
      isEbook: false,
    },
    accessInfo: {
      country: "RO",
      viewability: "NO_PAGES",
      embeddable: false,
      publicDomain: false,
      textToSpeechPermission: "ALLOWED",
      epub: {
        isAvailable: false,
      },
      pdf: {
        isAvailable: false,
      },
      webReaderLink:
        "http://play.google.com/books/reader?id=SiJQAQAAIAAJ&hl=&printsec=frontcover&source=gbs_api",
      accessViewStatus: "NONE",
      quoteSharingAllowed: false,
    },
    searchInfo: {
      textSnippet:
        "<b>Harry</b> Bertoia, Allentown Art Museum. Mr. Jeffrey H. Moser Dr. and Mrs. Frederick J. Munson Mr. and Mrs. George Y. Nehrbas Mr. and Mrs. Peter W. Nestor Mr. and Mrs. Charles T. Noonan Dr. and Mrs. Walter J. Okunski Dr. and Mrs. William L.",
    },
  },
  {
    kind: "books#volume",
    id: "kyghAQAAMAAJ",
    etag: "qywjfZYJgLs",
    selfLink: "https://www.googleapis.com/books/v1/volumes/kyghAQAAMAAJ",
    volumeInfo: {
      title: "Harry S. Truman",
      authors: ["Ideals Publications Incorporated"],
      publisher: "Ideals Publications",
      publishedDate: "1997",
      description:
        "Here is a pictorial view of the personal and political life of one of our greatest Presidents. The book includes photos, along with excerpts from his letters and speeches. The text is not only an in-depth look at the man, but also a view of America from the turn of the century to the nuclear age, which Truman ushered in with the atomic bomb.",
      industryIdentifiers: [
        {
          type: "OTHER",
          identifier: "WISC:89066265281",
        },
      ],
      readingModes: {
        text: false,
        image: false,
      },
      pageCount: 80,
      printType: "BOOK",
      categories: ["Biography & Autobiography"],
      maturityRating: "NOT_MATURE",
      allowAnonLogging: false,
      contentVersion: "0.2.3.0.preview.0",
      panelizationSummary: {
        containsEpubBubbles: false,
        containsImageBubbles: false,
      },
      imageLinks: {
        smallThumbnail:
          "http://books.google.com/books/content?id=kyghAQAAMAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
        thumbnail:
          "http://books.google.com/books/content?id=kyghAQAAMAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
      },
      language: "en",
      previewLink:
        "http://books.google.ro/books?id=kyghAQAAMAAJ&q=Harry&dq=Harry&hl=&cd=4&source=gbs_api",
      infoLink:
        "http://books.google.ro/books?id=kyghAQAAMAAJ&dq=Harry&hl=&source=gbs_api",
      canonicalVolumeLink:
        "https://books.google.com/books/about/Harry_S_Truman.html?hl=&id=kyghAQAAMAAJ",
    },
    saleInfo: {
      country: "RO",
      saleability: "NOT_FOR_SALE",
      isEbook: false,
    },
    accessInfo: {
      country: "RO",
      viewability: "NO_PAGES",
      embeddable: false,
      publicDomain: false,
      textToSpeechPermission: "ALLOWED",
      epub: {
        isAvailable: false,
      },
      pdf: {
        isAvailable: false,
      },
      webReaderLink:
        "http://play.google.com/books/reader?id=kyghAQAAMAAJ&hl=&printsec=frontcover&source=gbs_api",
      accessViewStatus: "NONE",
      quoteSharingAllowed: false,
    },
    searchInfo: {
      textSnippet:
        "R I C A N A PHOTOBIOGRAPH B89066265281A &quot;A great politician/&#39; <b>Harry</b> S. Truman wrote in 1 954, &quot;is known by the service he renders.&quot; Yet service alone cannot make a leader truly great; it was character that set Truman apart.",
    },
  },
  {
    kind: "books#volume",
    id: "eXuyAAAAIAAJ",
    etag: "hXBNRcDh724",
    selfLink: "https://www.googleapis.com/books/v1/volumes/eXuyAAAAIAAJ",
    volumeInfo: {
      title: "Light-Horse Harry",
      subtitle:
        "A Biography of Washington's Great Cavalryman, General Henry Lee",
      authors: ["Noel Bertram Gerson"],
      publishedDate: "1966",
      description:
        "The life story of George Washington's great cavalryman and the father of Robert E. Lee.",
      industryIdentifiers: [
        {
          type: "OTHER",
          identifier: "UCAL:B4349450",
        },
      ],
      readingModes: {
        text: false,
        image: false,
      },
      pageCount: 257,
      printType: "BOOK",
      categories: ["Generals"],
      maturityRating: "NOT_MATURE",
      allowAnonLogging: false,
      contentVersion: "0.2.1.0.preview.0",
      panelizationSummary: {
        containsEpubBubbles: false,
        containsImageBubbles: false,
      },
      imageLinks: {
        smallThumbnail:
          "http://books.google.com/books/content?id=eXuyAAAAIAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
        thumbnail:
          "http://books.google.com/books/content?id=eXuyAAAAIAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
      },
      language: "en",
      previewLink:
        "http://books.google.ro/books?id=eXuyAAAAIAAJ&q=Harry&dq=Harry&hl=&cd=5&source=gbs_api",
      infoLink:
        "http://books.google.ro/books?id=eXuyAAAAIAAJ&dq=Harry&hl=&source=gbs_api",
      canonicalVolumeLink:
        "https://books.google.com/books/about/Light_Horse_Harry.html?hl=&id=eXuyAAAAIAAJ",
    },
    saleInfo: {
      country: "RO",
      saleability: "NOT_FOR_SALE",
      isEbook: false,
    },
    accessInfo: {
      country: "RO",
      viewability: "NO_PAGES",
      embeddable: false,
      publicDomain: false,
      textToSpeechPermission: "ALLOWED",
      epub: {
        isAvailable: false,
      },
      pdf: {
        isAvailable: false,
      },
      webReaderLink:
        "http://play.google.com/books/reader?id=eXuyAAAAIAAJ&hl=&printsec=frontcover&source=gbs_api",
      accessViewStatus: "NONE",
      quoteSharingAllowed: false,
    },
    searchInfo: {
      textSnippet:
        "... Lee forced to refuse late offer of command because of health, 238 Washington, George: as friend of <b>Harry</b> Lee&#39;s father, 4, 30; as moderate toward freedom of colonies, 14, 16; Congress elects as commander-in-chief of new Regular Army,&nbsp;...",
    },
  },
];
const mockResult: Array<Book> = [
  {
    id: "9fQ2AQAAIAAJ",
    authors: ["Stacy C. Hollander"],
    publisher: "Studio Books",
    title: "Harry Lieberman",
  },
  {
    id: "V0NCAAAAIAAJ",
    authors: ["Robert E. McClure"],
    title: "Harry Pickering",
    publisher: undefined,
  },
  {
    id: "SiJQAQAAIAAJ",
    authors: ["Harry Bertoia", "Allentown Art Museum"],
    title: "Harry Bertoia",
    publisher: undefined,
  },
  {
    id: "kyghAQAAMAAJ",
    authors: ["Ideals Publications Incorporated"],
    publisher: "Ideals Publications",
    title: "Harry S. Truman",
  },
  {
    id: "eXuyAAAAIAAJ",
    authors: ["Noel Bertram Gerson"],
    title: "Light-Horse Harry",
    publisher: undefined,
  },
];

test("renders a message", () => {
  expect(mockData.map(normalizerBook)).toStrictEqual(mockResult);
  expect(normalizerBook(null)).toStrictEqual({});
  expect(normalizerBook("test")).toStrictEqual({});
});
