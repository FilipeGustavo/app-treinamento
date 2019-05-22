import { Injector } from '@angular/core';
import { BaseModel } from '@shared/domain/base.model';
import { Observable, of } from 'rxjs';
import { HttpHeaders, HttpClient} from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';

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
    return this.http.post<T>("site", resource, httpOptions).pipe(
      tap( _ => console.log("Erro ao tentar fazer inclusão.")),
      catchError(this.handleError<T>('save'))
    );
  }

  update(resource: T): Observable<T>{
    return this.http.put<T>("site?id=" + resource.id, resource, httpOptions).pipe(
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
  
  private handleError<T> (operation = 'operation', result?: T){
    return (error: any): Observable<T> =>{
      console.log(error);

      return of(result as T);
    }
  }
}
