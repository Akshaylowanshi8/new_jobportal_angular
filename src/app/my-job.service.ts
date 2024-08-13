import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Datas } from './datas';

@Injectable({
  providedIn: 'root'
})
export class MyJobService {

  constructor(private httpClient: HttpClient) { }

  private url2 = "http://localhost:3000/jobListings/"
  private url = "http://localhost:3000/users"
  private url3 = "http://localhost:3000/userProfiles" 

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  } 
  GetAllUser( ):Observable<any>{
    return this.httpClient.get(this.url)
    .pipe(catchError(this.errorHandler))
     }

Registruser(user:Datas):Observable<any>{
      return this.httpClient.post(this.url,JSON.stringify(user) ,this.httpOptions)
      .pipe(catchError(this.errorHandler)).pipe(catchError(this.errorHandler))
       }

       postnewjob(user:Datas):Observable<any>{
        return this.httpClient.post(this.url2, JSON.stringify(user) ,this.httpOptions)
        .pipe(catchError(this.errorHandler))
         }
addUserProfile(user:Datas):Observable<any>{
        return this.httpClient.post(this.url3, JSON.stringify(user) ,this.httpOptions)
        .pipe(catchError(this.errorHandler))
         }
            
RegistrRec(user:Datas):Observable<any>{
  return this.httpClient.post(this.url , JSON.stringify(user) ,this.httpOptions)
  .pipe(catchError(this.errorHandler))
   }

   GetEditjobPost(postid:String |null):Observable<any>{
    return this.httpClient.get(`http://localhost:3000/jobListings/?id=${postid}`)
    .pipe(catchError(this.errorHandler))
  }

  postjobupdate(user:Datas , id:string ):Observable<any>{
    console.log(this.url2+id);
    return this.httpClient.put(this.url2 + id, JSON.stringify(user) ,this.httpOptions)
    .pipe(catchError(this.errorHandler))
     }

  userprofile(userid:String |null):Observable<any>{
  return this.httpClient.get(`http://localhost:3000/userProfiles/?userId=${userid}`)
  .pipe(catchError(this.errorHandler))
}
Deletepost(id:string):Observable<any>{
  // console.log(this.url2+id);
  return this.httpClient.delete(this.url2 + id ,this.httpOptions)
  .pipe(catchError(this.errorHandler)).pipe(catchError(this.errorHandler))
   }

userprofileAll():Observable<any>{
  return this.httpClient.get("http://localhost:3000/userProfiles")
  .pipe(catchError(this.errorHandler))
}
    GetjobListing():Observable<any>{
      return this.httpClient.get(this.url2)
      .pipe(catchError(this.errorHandler))
       }
     errorHandler(error:any) {
      let errorMessage = '';
      if(error.error instanceof ErrorEvent) {
        errorMessage = error.error.message;
      } else {
        errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
      }
      return throwError(errorMessage);
    }
}
