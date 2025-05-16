# Development Guides

This guide contains all notes there is during development.

## Setup

It helps to create one email for each client needed for setting up AWS account, databases, OAuth and others.

## Authentication and Authorization

Authentication and Autorization Guide

It helps to create one email for each customer.

### Resend (Magic Link)

Resend (https://resend.com)

Guide: https://authjs.dev/getting-started/providers/resend

- Resend needs API Key - create an account in resend
- Resend needs real domain for sending, but for testing purposes, a test domain is available `no-reply@resend.dev` however you can only use the registered email

### Google SignIn (OAuth)

Guide: https://authjs.dev/getting-started/authentication/oauth

Google Console: https://console.cloud.google.com/

## Database

### Prisma

- The command to sepecify dotenv file for prisma operation, use `npx dotenv -e .env.local`. This requres dotenv CLI to be installed as project dev dependency `npm install -D dotenv-cli`

Helpful Commands

```pwsh

 # reset the database
npx dotenv -e .env.local -- npx prisma db push

# do database migration
npx dotenv -e .env.development -- npx prisma migrate dev

```
