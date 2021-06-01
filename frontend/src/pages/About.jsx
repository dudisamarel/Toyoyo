import { Button } from '@material-ui/core';
import { Phone, Room } from '@material-ui/icons';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import { Component } from 'react';
import { keys } from '../keys'
class _About extends Component {
    state = {
        marker: {
            title: '',
            position: {
                lat: 31.974990,
                lng: 34.794340
            }
        },
        zoom: 10
        , showingInfoWindow: false
    }
    onCenterButton = (ev) => {
        let position, name;
        switch (ev.currentTarget.value) {
            case 'telaviv':
                name = 'תל אביב'
                position = {
                    lat: 32.085033,
                    lng: 34.781229
                }
                break;
            case 'rishon':
                name = 'ראשון לציון'
                position = {
                    lat: 31.974990,
                    lng: 34.794340
                }
                break;
            case 'haifa':
                name = 'חיפה'
                position = {
                    lat: 32.792637,
                    lng: 34.986493
                }
                break;
            default:
                break;
        }
        const marker = {
            title: name,
            position
        }
        console.log(marker);
        this.setState({ marker: { ...marker }, zoom: 14 })
    }
    onMarkerClick = (props, marker, e) => {
        this.setState({ marker, showingInfoWindow: !this.state.showingInfoWindow })
    }
    render() {
        return (
            < >
                <div className="about-layout">
                    <h1>About</h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus voluptas quos numquam officia obcaecati sequi reprehenderit? Ex, expedita voluptatibus, omnis at modi, fugiat sequi officiis aut error distinctio quo minima?</p>
                    <hr />
                    <div className="btn-map flex justify-center">
                        <Button
                            value="telaviv"
                            onClick={this.onCenterButton}
                            variant="contained" color="secondary"
                            endIcon={<Room />}>Tel-Aviv</Button>
                        <Button
                            value="rishon"
                            onClick={this.onCenterButton}
                            variant="contained" color="secondary"
                            endIcon={<Room />}>Rishon Le Zion</Button>
                        <Button
                            value="haifa"
                            onClick={this.onCenterButton}
                            variant="contained" color="secondary"
                            endIcon={<Room />}>Haifa</Button>
                    </div>
                    <div className="map-container">
                        <Map className="map"
                            google={this.props.google} zoom={this.state.zoom}
                            initialCenter={{
                                lat: 31.974990,
                                lng: 34.7943406
                            }}
                            center={this.state.marker.position}>
                            <Marker onClick={this.onMarkerClick}
                                position={{
                                    lat: 31.974990,
                                    lng: 34.794340
                                }}
                                title={'ראשון לציון'}
                            />
                            <Marker onClick={this.onMarkerClick}
                                position={{
                                    lat: 32.085033,
                                    lng: 34.781229
                                }}
                                title={'תל אביב'}

                            />
                            <Marker onClick={this.onMarkerClick}
                                position={{
                                    lat: 32.792637,
                                    lng: 34.986493
                                }}
                                title={'חיפה'}

                            />
                            <InfoWindow marker={this.state.marker}
                                visible={this.state.showingInfoWindow}>
                                <div className="flex align-center column">
                                    <p>{this.state.marker.title} </p>
                                    <label >
                                        054-27518-447
                                        <Phone />
                                    </label>

                                </div>
                            </InfoWindow>
                        </Map>
                    </div>
                </div>
            </>
        );
    }
}

export const About = GoogleApiWrapper({
    apiKey: (keys.GoogleAPI)
})(_About)