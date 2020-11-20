
import { timer, from, of, fromEvent, fromfetch } from  'https://dev.jspm.io/rxjs@6/_esm2015';
import { ajax } from  'https://dev.jspm.io/rxjs@6/_esm2015/ajax';
import { switchMap, catchError, concatMap, map, retry, takeWhile, takeUntil } from 'https://dev.jspm.io/rxjs@6/_esm2015/operators';
 
console.log("init");
const data$ = fromFetch('http://localhost:8080/warnings').pipe(
 switchMap(response => {
   if (response.ok) {
     // OK return data
     return response.json();
   } else {
     // Server is returning a status requiring the client to try something else.
     return of({ error: true, message: `Error ${response.status}` });
   }
 }),
 catchError(err => {
   // Network or other error, handle appropriately
   console.error(err);
   return of({ error: true, message: err.message })
 })
);
 
data$.subscribe({
 next: result => console.log(result),
 complete: () => console.log('done')
});