import axios from 'axios';
import { useState } from 'react';
import { Button, Container, Header, Input } from 'semantic-ui-react';
import './App.css';
import PlaceView from './components/PlaceView';
import { searchPlaces } from './service';
import { Place } from './types';

interface Props {
  onSearch: (search: string) => Promise<Place>
}


function App(props: Props) {
  const [place, setPlace] = useState<Place | undefined>(undefined);
  const [placeSearch, setPlaceSearch] = useState('')
  const [error, setError] = useState<string | undefined>(undefined);
  return (
    <Container className='padding-top'>
      <Header textAlign='center'>
        <h2>Places</h2>
      </Header>
      <div className='row padding-top'>
        <Input value={placeSearch} onChange={e => {
          setPlaceSearch(e.currentTarget.value);
        }} className='flex1' placeholder='Enter place id' />
        <Button
          onClick={async () => {
            try {
              const res = await props.onSearch(placeSearch)
              setPlace(res);
              setError(undefined);
            } catch (err: any) {
              console.log(err);
              setPlace(undefined);
              setError(err.message)
            }
          }}
          primary>Search</Button>
      </div>
      <div className='padding-top'>
        {
          error && (
            <Header textAlign='center' color='red'>{error}</Header>
          )
        }
        {
          place && (
            <PlaceView place={place} />
          )
        }
      </div>
    </Container >
  );
}

export default function () {

  return (
    <App
      onSearch={searchPlaces}
    />
  )
}
