import React, {useEffect, useState} from 'react';
import { Container, Item, Image } from 'semantic-ui-react';
import Reviews from './Reviews';

const Books = () => {

  const [booksList, setBooksList] = useState([]);

  useEffect(() => {
    try {
      // function to get books list
      getBooks();
    }catch(error){
      //console error if api call fails
      console.log(error);
    }
  },[]);

  const getBooks = async() => {
    try {
      const response = await fetch('/books');
      const result = await response.json();

      if(result.status === 'success') {
        console.log(result);
        setBooksList(booksList => [...booksList, ...result.data])
      } else {
        setBooksList([])
      }

    } catch(error){

    }
  }
  return (
    <>
      <Container>
        <Item.Group divided>
        {booksList.map((book,index) => {
          return (
          <Item key={`book_${index}`}>
            <Item.Image src={book.cover} />
            <Item.Content>
              <Item.Header as='a'>{book.name}</Item.Header>
              <Item.Meta>
                <span>{book.author}</span>
                <span>Category</span>
              </Item.Meta>
              <Item.Description>
                {book.description}
              </Item.Description>
              <Item.Extra>
                <Reviews />
                <Image avatar circular src='/images/wireframe/square-image.png' />
                Add Review
              </Item.Extra>
              <Item.Extra>
                Comments
              </Item.Extra>
            </Item.Content>
          </Item>
        )
        })
      }
        </Item.Group>
      </Container>
    </>
  )

}


export default Books;
