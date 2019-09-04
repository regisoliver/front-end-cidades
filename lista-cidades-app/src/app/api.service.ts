import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Cidades } from 'src/model/cidades';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const apiUrl = 'http://localhost:8080/api';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  //lista todas as cidades
  getCidades (): Observable<Cidades[]> {
    const url = `${apiUrl}/listarCidades`;
    return this.http.get<Cidades[]>(url)
      .pipe(
        tap(cidades => console.log('leu cidades')),
        catchError(this.handleError('getCidades', []))
      );
  }

  //Busca a cidade
  getCidade(cidades): Observable<Cidades> {
    const url = `${apiUrl}/salvarCidade/${cidades}`;
    return this.http.get<Cidades>(url).pipe(
      tap(_ => console.log(`leu a cidade id=${cidades._id}`)),
      catchError(this.handleError<Cidades>(`getCidade id=${cidades._id}`))
    );
  }

  //adiciona a cidade
  addCidade (cidades): Observable<Cidades> {
    const url = `${apiUrl}/pegaCidade/${cidades}`;
    return this.http.post<Cidades>(url, cidades, httpOptions).pipe(
      tap((cidades: Cidades) => console.log(`adicionou a cidade com w/ id=${cidades._id}`)),
      catchError(this.handleError<Cidades>('addCidade'))
    );
  }

  //Busca apenas todas as cidades capitais
  pegaCapitais(cidades): Observable<Cidades> {
    const url = `${apiUrl}/pegaCapitais`;
    return this.http.get<Cidades>(url).pipe(
      tap(_ => console.log(`leu a capital id=${cidades._id}`)),
      catchError(this.handleError<Cidades>(`pegaCapitais id=${cidades._id}`))
    );
  }

  //atualiza a cidade
  updateCidade(cidades): Observable<any> {
    const url = `${apiUrl}/atualizaCidade/${cidades}`;
    return this.http.put(url, cidades, httpOptions).pipe(
      tap(_ => console.log(`atualiza a cidade com id=${cidades._id}`)),
      catchError(this.handleError<any>('updateCidade'))
    );
  }

  //deleta a cidade
  deleteCidade (cidades): Observable<Cidades> {
    const url = `${apiUrl}/deletaCidade/${cidades}`;
    return this.http.delete<Cidades>(url, httpOptions).pipe(
      tap(_ => console.log(`remove a cidade com id=${cidades._id}`)),
      catchError(this.handleError<Cidades>('deleteCidade'))
    );
  }

  //Carrega Arquivo CSV e persiste no banco
  carregaCSV (): Observable<Cidades[]> {
    const url = `${apiUrl}/carregaCSV`;
    return this.http.get<Cidades[]>(url)
      .pipe(
        tap(cidades => console.log('leu cidades')),
        catchError(this.handleError('carregaCSV', []))
      );
  }

  //Busca a qtd de cidadaes por Estado
  qtdCidadeEstado(cidades): Observable<Cidades> {
    const url = `${apiUrl}/qtdCidadeEstado`;
    return this.http.get<Cidades>(url).pipe(
      tap(_ => console.log(`leu a cidade id=${cidades._id}`)),
      catchError(this.handleError<Cidades>(`qtdCidadeEstado id=${cidades._id}`))
    );
  }

  //Retorna cidade informando ibge
  pegaCidadeIbge(cidades): Observable<Cidades> {
    const url = `${apiUrl}/pegaCidadeIbge/${cidades}`;
    return this.http.get<Cidades>(url).pipe(
      tap(_ => console.log(`leu a cidade id=${cidades._id}`)),
      catchError(this.handleError<Cidades>(`pegaCidadeIbge id=${cidades._id}`))
    );
  }

  //Busca maior e menos qtd de cidades por Estado
  qtdMaiorMenorEstado(cidades): Observable<Cidades> {
    const url = `${apiUrl}/qtdMaiorMenorEstado`;
    return this.http.get<Cidades>(url).pipe(
      tap(_ => console.log(`leu a cidade id=${cidades._id}`)),
      catchError(this.handleError<Cidades>(`qtdMaiorMenorEstado id=${cidades._id}`))
    );
  }

  //Retorna as cidades escolhendo o Estado
  pegaCidadesPorEstado(cidades): Observable<Cidades> {
    const url = `${apiUrl}/pegaCidadesPorEstado/${cidades}`;
    return this.http.get<Cidades>(url).pipe(
      tap(_ => console.log(`leu a cidade id=${cidades._id}`)),
      catchError(this.handleError<Cidades>(`pegaCidadesPorEstado id=${cidades._id}`))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error);

      return of(result as T);
    };
  }
}

