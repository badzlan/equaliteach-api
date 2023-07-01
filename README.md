## API Documentation

### User Register
Endpoint : ```POST /api/register```

Request Body :
```json
{
  "email": "email@email.com",
  "username": "username",
  "password": "password"
}
```

Response Success :
```json
{
  "msg": "Berhasil Register"
}
```

Response Error :
```json
{
  "error": "Email Exist!"
}
```