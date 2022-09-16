// JUMBOTRON SECTION DATA

const jumboData = {
    title: 'Damon Vaughn',
    paragraph: 'Best-selling author and the most influential public intellectual in the Wwstern world right now.',
    author: '- The New York Times',
};

// SECTION "About"

const aboutData = {
    title: 'More About Damon Vaughn',
    paragraph: 'Damon Vaughn is a professor of psychology at the Univeristy of Toronto, a clinical psychologist and the author of the multi-million copy bestseller "The stiry of my life."',
    button: 'Meet The Author',
};

// SECTION "Critics"

const criticsData = {
    title: 'What The Critics Say',
    subTitle: 'testimonials from around the world',
    button: 'Read All Testimonials'
}

const criticsCardJumbo = {
    title: 'Best Author Of His Generation',
    subTitle: 'This book will change yout perspective on life',
    firstParagraph: 'Donec fringilla nunc eu turpis dignissim, at eusmod sapien tincidunt. maecenas eleifend congue cursus. in vitae enim quis sam pharetra. Curabitur arcu erat, accumsan id imperdiet et, portittor at sem.',
    secondParagraph: 'Donec fringilla nunc eu turpis dignissim, at eusmod sapien tincidunt. maecenas eleifend congue cursus. in vitae enim quis sam pharetra. Curabitur arcu erat, accumsan id imperdiet et, portittor at sem.',
    author: {
        logo: 'NYtimes.png',
        name: 'Justine Kilpatrick',
        publisher: 'The New York Times',
    }
}

const criticsCard = [
    {
        title: 'A True Masterpiece, Bravo!',
        paragraph: 'Nulla quis lorem ut libero malesuda faugiat. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Vivamus suscipit tortor eget felis porttitor volutpat. Nulla quis lorem ut libero malessuada feug at.',
        author: {
            logo: 'TheGuardian.png',
            name: 'Gerald Hendley,',
            publisher: 'The guardian',
        }
        
    },
    {
        title: 'A Unique View On The World',
        paragraph: 'Nulla quis lorem ut libero malesuda faugiat. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Vivamus suscipit tortor eget felis porttitor volutpat. Nulla quis lorem ut libero malessuada feug at.',
        author: {
            logo: 'TheGlobe.png',
            name: 'Gerald Mary Maxey,',
            publisher: 'The Globe And Mail',
        }
    },
];

// SECTION "Events"

const eventsData = {
    title: 'Upcoming Events',
    subTitle: 'meet the author in person',
    cards: [
        {
            img: 'event-05.jpg',
            title: 'Chicago Book Signing',
            paragraph: 'Marius blandit aliquet elit, eget tincidunt nibh pulvinar a. Mariud blandit aliquet elit. eget tincidunt nibh pulvinar a nulla.'
        },
        {
            img: 'event-04.jpg',
            title: 'Meet Greet With Amanda',
            paragraph: 'Marius blandit aliquet elit, eget tincidunt nibh pulvinar a. Mariud blandit aliquet elit. eget tincidunt nibh pulvinar a nulla.'
        },
        {
            img: 'event-07.jpg',
            title: 'Open Book: Dialogues',
            paragraph: 'Marius blandit aliquet elit, eget tincidunt nibh pulvinar a. Mariud blandit aliquet elit. eget tincidunt nibh pulvinar a nulla.'
        },
    ],
};

//  SECTION "Newsletter"

const newsletterData = {
    title: 'Subcribe To My Newsletter',
    subTitle: 'be notified about book signing tour dates',
    placeholder: '    insert your email...',
    button: 'Subscribe',
    paragraph: 'Donec fringilla nunc eu turpis dignissim, at euismod sapien tincidunt.'
};

// SECTION "Discover"

const discoverData = {
    title: 'Dig A Little Deeper Into Damon Vaughn',
    subTitle: 'find out more about the author himself',
    cards: [
        {  
            img: 'box-1.jpg',
            title: 'About Me',
            subTitle: 'Vestibulum ante ipsum primis'
        },
        {  
            img: 'box-4.jpg',
            title: 'My Latest Book',
            subTitle: 'Vestibulum ante ipsum primis',
        },
        {
            img: 'box-3.jpg',
            title: 'Book Signing',
            subTitle: 'Vestibulum ante ipsum primis',
        },
    ],
};

// SECTION "RecentArticles"

const articlesData = {
    title: 'Recent Articles',
    subTitle: 'read the latest entries',
    button: 'All Articles',
    jumboCard: {
        img: '20-Tips-scaled.jpg',
        title: '20 Creativity Tips',
        author: 'By admin | October 24th, 2019 | Categories Event, Tip & Tricks',
        paragraph: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velic neque, auctor sit amet aliquam vel, ullamcorper sit amet.',
    },
    cards: [
        {
            img: 'thumb-13.jpg',
            title: 'What\'s On Your Boklist?',
            date: 'October 24th, 2019 | 0 Comments',
        },
        {
            img: 'thumb-08.jpg',
            title: 'Istanbul Travel Guide',
            date: 'October 24th, 2019 | 0 Comments',
        },
    ],
};





export {jumboData, aboutData, newsletterData, criticsData, criticsCardJumbo, criticsCard, eventsData, discoverData, articlesData}