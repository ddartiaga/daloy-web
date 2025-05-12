# Contributing Guide

## Run Postgres container manually

```pwsh
# NOTE: The volume mount is a Windows directory, change to linux /var for linux development machine

docker run --name daloy-db `
    -p 5432:5432 `
    -e POSTGRES_USER=daloy `
    -e POSTGRES_PASSWORD=mysecretpassword `
    -e POSTGRES_DB=daloy `
    -v C:\projects\postgres:/var/lib/postgresql/data `
    -d postgres:16.8
```
