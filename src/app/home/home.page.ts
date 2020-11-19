import { Component } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  movies: any; //observable!!!!
  arrayMovies: any[];
  generoSeleccionado: string;
  filtro: string='';
  
 
  generos=[];

  constructor(private httpClient: HttpClient) {
    //Aqui this.movies funciona como un observable 
    

    this.movies= this.httpClient.get('https://raw.githubusercontent.com/isabel1991/dataBaseMovies/main/movieJson.json');
    
    this.movies.subscribe((result) =>{ 
      this.arrayMovies = result;
      console.log(this.arrayMovies); // el resultado es undefined
      console.log(this.movies);
      this.arrayMovies.forEach((element)=>{
        //Guarda todos los generos (incluido los repetidos)
        //Buscar funcion para que no repita los generos  
        //this.generos=element.genero;
        for(let i=0; i<this.arrayMovies.length; i++){
          this.generos.push(element.genero);
        }

        //Hacer una criba para quitar los géneros repetidos 
        for(var i = this.generos.length -1; i >=0; i--){
          if(this.generos.indexOf(this.generos[i]) !== i) this.generos.splice(i,1);
        }
        
        console.log("generos: "+ this.generos);
        //console.log(element.genero)--> imprime tooodos los generos
          
       } );

      
    
        
          
      });
  
    


  }

 

}
