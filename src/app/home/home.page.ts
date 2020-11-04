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
  selectedValues:[];
  
 
  generos: any[];

  constructor(private httpClient: HttpClient) {
    //Aqui this.movies funciona como un observable 
    

    this.movies= this.httpClient.get('https://raw.githubusercontent.com/isabel1991/dataBaseMovies/main/movieJson.json');
    
    this.movies.subscribe((result) =>{ 
      this.arrayMovies = result;
      console.log(this.arrayMovies); // el resultado es undefined
      console.log(this.movies);
      this.arrayMovies.forEach((element)=> 
        //Guarda todos los generos (incluido los repetidos)
        //Buscar funcion para que no repita los generos  
        this.generos=element.genero 
        
        //console.log(element.genero)--> imprime tooodos los generos
          
          );
          console.log("generos: "+ this.generos);
          
      });
  
    


  }

 

}
