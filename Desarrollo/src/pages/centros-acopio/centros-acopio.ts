import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation, Geoposition } from '@ionic-native/geolocation';

import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  GoogleMapOptions,
  CameraPosition,
  MarkerOptions,
  Marker
} from '@ionic-native/google-maps';

declare var google: any;

/**
 * Generated class for the CentrosAcopioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@IonicPage()
@Component({
  selector: 'page-centros-acopio',
  templateUrl: 'centros-acopio.html',
})
export class CentrosAcopioPage {
  @ViewChild('map') mapRef: ElementRef;
  map: any;
  listMarker=[
    {lat: 41.939670,long: -87.655167,info: "Info1"},
    {lat: 41.976816,long: -87.659916,info: "Info1"},
    {lat: 42.002707,long: -87.661236,info: "Info1"}
    
  ];
  markers: any[] = [
    {
      position:{
        latitude: -17.3666745,
        longitude: -66.2387878,
      },
      title:'Point 1'
    },
    {
      position:{
        latitude: -17.3706884,
        longitude: -66.2397749,
      },
      title:'Point 2'
    },
    {
      position:{
        latitude: -17.391398,
        longitude: -66.2407904,
      },
      title:'Point 3'
    },
    {
      position:{
        latitude: -17.3878887,
        longitude: -66.223664,
      },
      title:'Point 4'
    },
  ];
  constructor(public navCtrl: NavController, public navParams: NavParams,  private geolocation: Geolocation) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CentrosAcopioPage');

    this.showMap();
  }

  showMap(){
    const location=new google.maps.LatLng(51.507351,-0.127758);
    const options = {
      center: location,
      zoom: 20,
      mapTypeId: 'roadmap',
    }
    this.map=new google.maps.Map(this.mapRef.nativeElement,options);
    
  /* for(let i=0;i<this.markers.length;i++){
      let location_=new google.maps.LatLng(this.markers[i].latitude,this.markers[i].longitude);
      
    }*/

    this.map.one(GoogleMapsEvent.MAP_READY)
    .then(() => {
      // Now you can use all methods safely.
      this.getPosition();
    })
    .catch(error =>{
      console.log(error);
    });

   //this.addMarker(location,this.map);
  }
  addMarker(position, map){

    return new google.maps.Marker({
      position,
      map
    });
  }

  getPosition():any{
    this.geolocation.getCurrentPosition().then(response => {
      this.loadMap(response);
    })
    .catch(error =>{
      console.log(error);
    })
  }

  loadMap(position: Geoposition){
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    console.log(latitude, longitude);
    
    // create a new map by passing HTMLElement
    let mapEle: HTMLElement = document.getElementById('map');
  
    // create LatLng object
    let myLatLng = {lat: latitude, lng: longitude};
  
    // create map
    this.map = new google.maps.Map(mapEle, {
      center: myLatLng,
      zoom: 12
    });
  
    google.maps.event.addListenerOnce(this.map, 'idle', () => {
      let marker = new google.maps.Marker({
        position: myLatLng,
        map: this.map,
        title: 'Hello World!'
      });
      mapEle.classList.add('show-map');
    });
  }

}
