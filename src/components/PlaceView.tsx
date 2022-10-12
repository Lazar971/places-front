import { Grid, Header } from 'semantic-ui-react';
import { Place } from '../types';

interface Props {
  place: Place
}

export default function PlaceView(props: Props) {
  return (
    <Grid padded celled>
      <Grid.Row >
        <Grid.Column width={8}>
          <Header>
            <h3>{props.place.name}</h3>
          </Header>
          <Header.Subheader>
            {props.place.address}
          </Header.Subheader>

        </Grid.Column>
        <Grid.Column width={8}>
          <Header>
            <h3>Working hours</h3>
            <Header.Subheader >
              <div className={props.place.open ? 'green' : 'red'}>
                {props.place.open ? 'Open' : 'Closed'}
              </div>
            </Header.Subheader>
            <Header.Subheader>
              {
                props.place.open ? (
                  <div>
                    Closes at {props.place.closingTime}
                  </div>
                ) : (
                  <div>
                    Opens at {props.place.openingTime || '/'}
                  </div>
                )
              }
            </Header.Subheader>
          </Header>
          {
            Object.keys(props.place.workingHours).map(key => {
              return (
                <div key={key} className='row padding-top'>
                  <div className='working-day'>{key}</div>
                  <div>
                    {!props.place.workingHours[key] ?
                      'Closed' :
                      props.place.workingHours[key].map(slot => {
                        return (
                          <div key={slot.start + slot.end}>
                            {slot.start} - {slot.end}
                          </div>
                        )
                      })

                    }
                  </div>
                </div>
              )
            })
          }
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}
