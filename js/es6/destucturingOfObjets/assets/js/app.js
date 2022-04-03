let cl = console.log;

// let person = {
//     first: "Ravikiran",
//     last: "Niturkar",
//     country: "India",
//     city: "Puna",
//     twitter: "@iamRk"
// }

// let first = person.first
// let last = person.last
// let country = person.country
// let city = person.city
// let twitter = person.twitter;

// cl(person.first);

// let { first, twitter, last } = person;

// cl(first, last, twitter);


let person2 = {
    first: "Ravikiran",
    last: "Niturkar",
    country: "India",
    city: "Puna",
    link: {
        social: {
            twitter: "http://twitter.com/@iamRk",
            facebook: "http://facebook.com/iamrk",
            linkedin: "http://linkedin.com/iamrk",
            youtube: "http://youtube.com/iamrk",
        },
        web: {
            blog: "http://jsiscoolstuff.com"
        }
    }
};
// let twitter = person2.link.social.twitter;
// let facebook = person2.link.social.facebook;
// let linkedin = person2.link.social.linkedin;
// let youtube = person2.link.social.youtube;

let { twitter: tw, facebook: fb, linkedin: ln, youtube: yt } = person2.link.social;
cl(tw, fb, ln, yt)

// let { twitter, facebook } = person2.link.social;

// cl(twitter, facebook);


let settings = { width: 300, color: "black" };

// let { width , height = 200, color , fontSize = 22 } = settings;

// cl(width, height, color, fontSize)

let { width , color , height = 100, fontSize = 22 } = settings;

cl(width, color, height, fontSize);