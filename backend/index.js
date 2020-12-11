const express = require('express');
const app = express(),
      bodyParser = require("body-parser"),
      port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.listen(port, () => console.log(`Listening on port ${port}`));

app.get('/books', (req, res) => {
  res.json(
    { status:'success',
      data: [
        {
          id:1,
          name:'28 SUMMERS',
          author:'Elin Hilderbrand | Little, Brown',
          description:'A relationship that started in 1993 between Mallory Blessing and Jake McCloud comes to light while she is on her deathbed and his wife runs for president.',
          cover:'https://s1.nyt.com/du/books/images/9780316420044.jpg',
          reviews:[{
            ratings:4,
            comment:'test'
          }]
        },
        {
          name: 'WHERE THE CRAWDADS SING',
          author: 'Delia Owens | Putnam',
          description:'In a quiet town on the North Carolina coast in 1969, a young woman who survived alone in the marsh becomes a murder suspect.',
          cover: 'https://s1.nyt.com/du/books/images/9780735219090.jpg'
        },
        {
          name: 'CAMINO WINDS',
          author: 'John Grisham | Doubleday',
          description: 'The line between fact and fiction becomes blurred when an author of thrillers is found dead after a hurricane hits Camino Island.',
          cover: 'https://s1.nyt.com/du/books/images/9780385545938.jpg'
        },
        {
          name: 'THE VANISHING HALF',
          author: 'Brit Bennett | Riverhead',
          description: 'The lives of twin sisters who run away from a Southern black community at age 16 diverge as one returns and the other takes on a different racial identity but their fates intertwine.',
          cover: 'https://s1.nyt.com/du/books/images/9780525536291.jpg'
        },
        {
          name: 'THE SUMMER HOUSE',
          author: 'James Patterson and Brendan DuBois | Little, Brown',
          description: 'Jeremiah Cook, a veteran and former N.Y.P.D. cop, investigates a mass murder near a lake in Georgia.',
          cover: 'https://s1.nyt.com/du/books/images/9780316539555.jpg'
        },
        {
          name: 'IF IT BLEEDS',
          author: 'Stephen King | Scribner',
          description: 'Four novellas: “Mr. Harrigan’s Phone,” “The Life of Chuck,” “Rat” and “If It Bleeds.',
          cover: 'https://s1.nyt.com/du/books/images/9781982137977.jpg'
        },
        {
          name: 'DEACON KING KONG',
          author: 'James McBride | Riverhead',
          description: 'In 1969, secrets in a South Brooklyn neighborhood are uncovered when a church deacon known as Sportcoat shoots a drug dealer in public.',
          cover: 'https://s1.nyt.com/du/books/images/9780735216723.jpg'
        },
        {
          name: 'FAIR WARNING',
          author: ' Michael Connelly | Little, Brown',
          description: 'The third book in the Jack McEvoy series. A reporter tracks a killer who uses genetic data to pick his victims.',
          cover: 'https://s1.nyt.com/du/books/images/9780316539425.jpg'
        },
        {
          name: 'THE GUEST LIST',
          author: 'Lucy Foley | Morrow',
          description: 'A wedding between a TV star and a magazine publisher on an island off the coast of Ireland turns deadly.',
          cover: 'https://s1.nyt.com/du/books/images/9780062868930.jpg'
        },
        {
          name: 'DEVOLUTION',
          author: 'Max Brook | Del Rey',
          description: 'In the aftermath of Mount Rainier erupting, Kate Holland’s newly discovered journals tell the tale of the creature known as Bigfoot.',
          cover: 'https://s1.nyt.com/du/books/images/9781984826787.jpg'
        }
      ]
    }
  );
});
