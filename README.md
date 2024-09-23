# Prueba Coink

## Inconvenientes

Disfrute mucho los retos de la prueba y pude completarla de manera satisfactoria. Sin embargo, no pude realizar las peticiones a la API de Coink debido que los endpoints enviados no funcionaban correctamente. 
De todos modos realice el procedimiento donde utilice excepciones para utilizar datos quemados. Se puede ver este procedimiento en el archivo `src/app/services/http.service.ts`

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
 
El archivo del APK puede encontrarse en la carpeta `release`. Se realizo la firma del APK mediante Android Studio. La llave y su respectivo alias y contraseña se encuentran en la carpeta `keystore`
