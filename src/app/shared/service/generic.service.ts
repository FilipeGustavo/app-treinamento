import { Injector } from '@angular/core';
import { BaseModel } from '@shared/model/base.model';
import { Observable, of } from 'rxjs';
import { HttpHeaders, HttpClient} from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { analyzeAndValidateNgModules } from '@angular/compiler';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

export abstract class GenericService<T extends BaseModel> {

  private http: HttpClient;
  private url: string;

  constructor(injector: Injector, url: string) { 
    this.http = injector.get(HttpClient);
    this.url = url;
   }

  save(resource: T): Observable<T>{
    console.log("generic");
    console.log(resource);
    return this.http.post<T>(this.url, resource, httpOptions).pipe(
      tap( _ => console.log("Erro ao tentar fazer inclusão.")),
      catchError(this.handleError<T>('save'))
    );
  }

  update(resource: T): Observable<T>{
    return this.http.put<T>(this.url + resource.id, resource, httpOptions).pipe(
      tap( _ => console.log("Erro ao tentar fazer alterações.")),
      catchError(this.handleError<any>('update'))
    )
  }

  findAll(): Observable<Array<T>>{
    return this.http.get<Array<T>>(this.url).pipe(
      tap( _ => console.log("Erro ao buscar lista de Cliente.")),
      catchError(this.handleError<Array<T>>("findAll"))
    )
  }

  find(id: number): Observable<T>{
    return this.http.get<T>(this.url + "?id=" + id).pipe(
      tap(_ => console.log("Erro ao realizar busca por id.")),
      catchError(this.handleError<any>('find'))
    )
  }

  delete(id: number): Observable<T>{
    return this.http.delete<T>(this.url + "?id=" + id).pipe(
      tap(_ => console.log("Erro ao realizar exclusão.")),
      catchError(this.handleError<any>('delete'))
    )
  }
  
  private handleError<T> (operation = 'operation', result?: T){
    return (error: any): Observable<T> =>{
      console.log(error);

      return of(result as T);
    }
  }
}
