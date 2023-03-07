function generate() {
    const quotes = {
        "― John Galsworthy": '“Life calls the tune, we dance.”',
        "― Aaron Lauritsen": '“The struggles we endure today will be the ‘good old days’ we laugh about tomorrow.”',
        "― Alysha Speer": '“You never really know whats coming. A small wave, or maybe a big one. All you can really do is hope that when it comes, you can surf over it, instead of drown in its monstrosity.”'
    }

    const authors = Object.keys(quotes);

    const author = authors[Math.floor(Math.random() * authors.length)]

    const quote = quotes[author];

    document.querySelector("#quote").innerHTML = quote;

    document.querySelector("#author").innerHTML = author;
}