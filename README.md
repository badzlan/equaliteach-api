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

### User Login
Endpoint : ```POST /api/login```

Request Body :
```json
{
  "email": "email@email.com",
  "password": "password"
}
```

Response Success :
```json
{
  "email": "email@email.com",
  "username": "username",
  "msg": "Berhasil Login",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDlmNWFhNzY4ZmRlOWFkZDUyZmQ5NjciLCJpYXQiOjE2ODgxNjkxMTB9.lwr8MeKzmOIHHASger-ItyAd8PH0F0iwUDZ6p7umLpQ"
}
```

Response Error :
```json
{
  "error": "Incorrect Email"
}
```
```json
{
  "error": "Incorrect Password"
}
```

### Post Diskusi
Endpoint : ```POST /api/diskusi```

Request Body :
```json
{
  "username": "username",
  "discuss": "discuss",
  "category": "Menuju Kesetaraan Gender yang Inklusif"
}
```

Response Success :
```json
{
  "msg": "Berhasil menambahkan diskusi"
}
```

Response Error :
```json
{
  "error": "Incorrect Username"
}
```