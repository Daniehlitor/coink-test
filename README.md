# Prueba Coink

## Inconvenientes

Disfruté mucho los retos de la prueba y pude completarla de manera satisfactoria. Sin embargo, no pude realizar las peticiones a la API de Coink debido que los endpoints enviados no funcionaban correctamente. 
De todos modos, realicé el procedimiento donde utilizó excepciones para enviar datos quemados. Se puede ver este procedimiento en el archivo `src/app/services/http.service.ts`

> Los endpoint proporcionados por correo fueron los siguientes:
> - https://api.bancoink.biz/qa/signup/documentTypes?apiKey=030106
> - https://api.bancoink.biz/qa/signup/genders?apiKey=030106

Al realizar las peticiones se obtuvo un estado de `401 Unauthorized` con la siguiente respuesta:

``` json
{
    "code": "UNAUTHORIZED",
    "message": "Authorization has been denied for this request"
}
```

## Aclaraciones
 
El archivo del APK puede encontrarse en la carpeta `release` bajo el nombre `coink-release.apk`. Se realizo la firma del APK mediante Android Studio. La llave, su respectivo alias y contraseña se encuentran en la carpeta `keystore`. <br>

Se utilizaron `guards` para redireccionar a la pantalla adecuada según el estado de la sesión y se implementó `reactive forms` para hacer las validaciones del formulario de registro.

## Construcción

Para realizar la construcción se debe configurar el entorno de desarrollo para Ionic Framework. Se puede ver un instructivo detallado en la [página oficial de Ionic](https://ionicframework.com/docs/intro/cli).

> Luego se realiza la instalación de librerías de node mediante el terminar de comandos con:
> ``` bash
>  npm install
> ```
> Para terminar se utiliza Ionic para ejecutar el programa en el navegador con el siguiente comando:
> ``` bash
>  ionic serve
> ```
