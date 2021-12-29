import { Component } from '@angular/core';
export interface Cards {
  title: string;
  subtitle: string;
  btn: string;
  image: string;
}

export interface Technology {
  techimg: string;
}

export interface Expriences {
  text: string;
  subtext: string;
}

export interface Reviewstext {
  cardtext: string;
  subcardtxt: string;
}

export interface Clintimg {
  clntimg: string;
}

export interface Blog {
  blogimage: string;
  blogtitle: string;
  blogsubtitle: string;
  blogfooter: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public cards: Cards[] = [
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrvAOMSL_i5m6gcmQp8WB-G--EqmnArdo8Wg&usqp=CAU",
      title: "Mobile Development",
      subtitle: "At Tagline Infotech, We have a dedicated Android and iOS mobile app development team. Our team has excellent strength in each area of react-native, swift, objective-c, KOTLIN, Java SDK, flutter, and cross-platform.",
      btn: "Mobile"
    },
    {
      image: "data:image/jpeg;base64,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",
      title: "UI/UX Design",
      subtitle: "Here at Tagline, we make the user experience a smooth trip. Our design principles are always to put the user first, create straightforward, easy-to-navigate interfaces, and provide a smooth end-to-end experience.",
      btn: "UI/UX"
    },
    {
      image: "data:image/jpeg;base64,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",
      title: "Web Application Development",
      subtitle: "Tagline Infotech is a web application development company with offices in India and the United States. Our experienced developer team creates custom web applications based on the client's ideas.",
      btn: "Web"
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu86T0soajtfQgxC6UQRIeSEm8oj5gnytUpw&usqp=CAU",
      title: "Digital Marketing",
      subtitle: "It's a step ahead in providing IT solutions throughout the world. Our industry's finest and most seasoned digital marketers have created a diverse range of digital marketing solutions to meet various business needs and financial restrictions.",
      btn: "Digital"
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNozgX_zZ50tWyLvY0RzBdkwXIajH3oO1gIA&usqp=CAU",
      title: "Website Design",
      subtitle: "We are committed to offering outstanding web design services that will assist you in establishing a competitive online presence. By building unique website design solutions, we advance both the clients' and the company's paths.",
      btn: "Website"
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6ukKu2-5mr3zXTrcm_kuqpEuEWwrYqPkWEg&usqp=CAU",
      title: "Logo Design",
      subtitle: "Our Logo Design Services will provide your company with a brand image that will stand out in the eyes of your consumers and clients and make visual communication more understandable.",
      btn: "Logo "
    }
  ];
  public technologys: Technology[] = [{
    techimg: "https://taglineinfotech.com/wp-content/uploads/2021/08/python-logo-img3.png"
  },
  {
    techimg: "https://taglineinfotech.com/wp-content/uploads/2021/08/python-logo-img.png"
  },
  {
    techimg: "https://taglineinfotech.com/wp-content/uploads/2021/01/rails.png"
  },
  {
    techimg: "https://taglineinfotech.com/wp-content/uploads/2021/10/rails-logo-img11.png"
  },
  {
    techimg: "https://taglineinfotech.com/wp-content/uploads/2021/08/js-logo-img.png"
  },
  {
    techimg: "https://taglineinfotech.com/wp-content/uploads/2021/08/js-logo-img2.png"
  },
  {
    techimg: "https://taglineinfotech.com/wp-content/uploads/2021/08/js-logo-img3.png"
  },
  {
    techimg: "https://taglineinfotech.com/wp-content/uploads/2021/08/js-logo-img4.png"
  },
  {
    techimg: "https://taglineinfotech.com/wp-content/uploads/2021/08/js-logo-img5.png"
  },
  {
    techimg: "https://taglineinfotech.com/wp-content/uploads/2021/08/mobile-logo-img2.png"
  },
  {
    techimg: "https://taglineinfotech.com/wp-content/uploads/2021/08/mobile-logo-img22.png"
  },
  {
    techimg: "https://taglineinfotech.com/wp-content/uploads/2021/08/mobile-logo-img32.png"
  },
  {
    techimg: "https://taglineinfotech.com/wp-content/uploads/2021/08/mobile-logo-img4.png"
  },
  {
    techimg: "https://taglineinfotech.com/wp-content/uploads/2021/08/mobile-logo-img5.png"
  },
  {
    techimg: "https://taglineinfotech.com/wp-content/uploads/2021/08/data-logo-img.png"
  },
  {
    techimg: "https://taglineinfotech.com/wp-content/uploads/2021/08/data-logo-img3.png"
  },
  {
    techimg: "https://taglineinfotech.com/wp-content/uploads/2021/08/design-logo-img2.png"
  },
  {
    techimg: "https://taglineinfotech.com/wp-content/uploads/2021/08/design-logo-img22.png"
  },
  {
    techimg: "https://taglineinfotech.com/wp-content/uploads/2021/08/design-logo-img4.png"
  },];

  public expriences: Expriences[] = [{
    text: "75+",
    subtext: "IT Professionals"
  },
  {
    text: "300+",
    subtext: "Projects Completed"
  },
  {
    text: "100K+",
    subtext: "Freelance Hours"
  },
  {
    text: "5+",
    subtext: "Years Of Experience"
  },];


  public reviewstext: Reviewstext[] = [{
    cardtext: "They understand complex technical requirements, and they have a team that quickly gets up to speed.",
    subcardtxt: "Founder, Cimpro.io"
  },
  {
    cardtext: "What I appreciate the most out of our relationship with TaglineInfotech is their commitment.",
    subcardtxt: "Co-Founder & CTO, Sports & Activities Management Platform"
  },
  {
    cardtext: "They are fulfilling my requirements over the long term and that was what we were looking for.",
    subcardtxt: "President, Bomhof Integrated"
  },
  {
    cardtext: "We loved that they went above and beyond to improve the tasks that we didn't even notice had issues.",
    subcardtxt: "Frontend Developer, Web Dev & Design Company"
  },
  {
    cardtext: "The team takes up new challenges and finishes the project on time.",
    subcardtxt: "Software Architect, Specialty Finance Company"
  },
  {
    cardtext: "We are getting close to launch now and it's been a tremendous help to have their developers on my team.",
    subcardtxt: "Owner, e- Commerce Support Company"
  }];

  public clintimgs: Clintimg[] = [{
    clntimg: "https://taglineinfotech.com/wp-content/uploads/2021/11/client-logo-17.png"
  },
  {
    clntimg: "https://taglineinfotech.com/wp-content/uploads/2021/01/client-logo-1.png"
  },
  {
    clntimg: "https://taglineinfotech.com/wp-content/uploads/2021/01/client-logo-2.png"
  },
  {
    clntimg: "https://taglineinfotech.com/wp-content/uploads/2021/01/client-logo-3.png"
  },
  {
    clntimg: "https://taglineinfotech.com/wp-content/uploads/2021/01/client-logo-4.png"
  },
  {
    clntimg: "https://taglineinfotech.com/wp-content/uploads/2021/01/client-logo-5.png"
  },
  {
    clntimg: "https://taglineinfotech.com/wp-content/uploads/2021/01/client-logo-6.png"
  },
  {
    clntimg: "https://taglineinfotech.com/wp-content/uploads/2021/01/client-logo-7.png"
  },
  {
    clntimg: "https://taglineinfotech.com/wp-content/uploads/2021/01/client-logo-8.png"
  },
  {
    clntimg: "https://taglineinfotech.com/wp-content/uploads/2021/01/client-logo-9.png"
  },
  {
    clntimg: "https://taglineinfotech.com/wp-content/uploads/2021/01/client-logo-10.png"
  },
  {
    clntimg: "https://taglineinfotech.com/wp-content/uploads/2021/01/client-logo-11.png"
  },
  {
    clntimg: "https://taglineinfotech.com/wp-content/uploads/2021/01/client-logo-12.png"
  },
  {
    clntimg: "https://taglineinfotech.com/wp-content/uploads/2021/01/client-logo-13.png"
  },
  {
    clntimg: "https://taglineinfotech.com/wp-content/uploads/2021/01/client-logo-14.png"
  },
  {
    clntimg: "https://taglineinfotech.com/wp-content/uploads/2021/01/client-logo-15.png"
  },
  {
    clntimg: "https://taglineinfotech.com/wp-content/uploads/2021/01/client-logo-16.png"
  }];

  public blog: Blog[] = [
    {
      blogimage: "https://taglineinfotech.com/wp-content/uploads/2021/12/8-Best-iOS-Development-Tools-for-iOS-Developers.png",
      blogtitle: "8 Best iOS Development Tools for...",
      blogsubtitle: "When it concerns the smartphone market, iOS has been one of the two most influential superpowers to be dealt with. ...",
      blogfooter: "Tagline Infotech Dec 21, 2021"
    },
    {
      blogimage: "https://taglineinfotech.com/wp-content/uploads/2021/12/Why-Choose-Node.js-for-your-next-Web-Application-Development-Project.png",
      blogtitle: "Why Choose Node.js for your next...",
      blogsubtitle: "The rise in the number of internet sites can only suggest that the need for web application development will skyrocket ...",
      blogfooter: "Tagline Infotech Dec 17, 2021"
    },
    {
      blogimage: "https://taglineinfotech.com/wp-content/uploads/2021/12/Learn-How-to-Create-an-App-from-Scratch-in-9-Easy-Steps.png",
      blogtitle: "Learn How to Create an App...",
      blogsubtitle: "There seems to be an application for everything, from small startup applications to eCommerce applications, health apps..",
      blogfooter: "Tagline Infotech Dec 10, 2021"
    },
    {
      blogimage: "https://taglineinfotech.com/wp-content/uploads/2021/11/The-Most-imperious-SEO-Ranking-Factors-For-Your-Website.png",
      blogtitle: "The Most imperious SEO Ranking Factors...",
      blogsubtitle: "Are you hoping to get into the realm of SEO but having problems? With so many things to improve and ...",
      blogfooter: "Tagline Infotech Nov 29, 2021"
    }
  ];
}