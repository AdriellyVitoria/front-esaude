import { HttpErrorResponse, HttpEvent, HttpEventType, HttpHandlerFn, HttpRequest } from "@angular/common/http";
import { inject } from "@angular/core";
import { catchError, Observable, tap, throwError } from "rxjs";
import { TokenService } from "../services/token.service";
import { Router } from "@angular/router";
import { MatSnackBar } from "@angular/material/snack-bar";

export function tokenInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> {
  const tokenService = inject(TokenService);
  const router = inject(Router);
  const token = tokenService.getToken();
  const snackBar = inject(MatSnackBar);

  if (!req.url.includes('/login/') && !(req.url.includes('/api/cliente/') && req.method === 'POST')) {
    if (token) {
      req = req.clone({
        headers: req.headers.append('Authorization', `Bearer ${token.access}`)
      });
    }
  }

  return next(req).pipe(
    tap(event => {
      if (event.type === HttpEventType.Response) {
      }
    }),
    catchError((error: HttpErrorResponse) => {
      if (error.status === 401 || error.status === 403) {
        tokenService.excluirToken();
        snackBar.open('Por favor faça login para prosseguir', undefined, { duration: 5000 })
        router.navigateByUrl('/login');
      }
      return throwError(() => error);
    })
  );
}