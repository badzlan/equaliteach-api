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

Headers : 
- Authorization : Bearer token

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

### Get All Diskusi
Endpoint : ```GET /api/diskusi```

Headers : 
- Authorization : Bearer token

Response Success :
```json
{
  "diskusi": [
    {
      "_id": "649d9b9e37a5474a1307c9c8",
      "username": "admin",
      "date": "2023-06-29T14:56:30.408Z",
      "discuss": "discuss",
      "category": "Membongkar Stereotip dan Membuka Peluang Baru"
    },
    {
      "_id": "649f62602dc6ed7ffb016563",
      "username": "username",
      "date": "2023-06-30T23:16:48.761Z",
      "discuss": "discuss",
      "category": "Menuju Kesetaraan Gender yang Inklusif"
    }
  ]
}
```

### Search Diskusi
Endpoint : ```GET /api/diskusi```

Headers : 
- Authorization : Bearer token

Query Params :
- category : Search by category of discuss, default all

Response Success :
```json
{
  "diskusi": [
    {
      "_id": "649f62602dc6ed7ffb016563",
      "username": "username",
      "date": "2023-06-30T23:16:48.761Z",
      "discuss": "discuss",
      "category": "Menuju Kesetaraan Gender yang Inklusif"
    }
  ]
}
```

Response Error
```json
{
  "error": "Discuss not found"
}
```