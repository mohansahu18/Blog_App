# Blog_App

## project setup

- clone the project on your local
- execute `npm install` on the same path as of your root directory of the downloaded project
- create a `.env` file in the root directory and add the following environment variable
  - `PORT=3000`
  - `DATABASE_URL=mongodb://127.0.0.1:27017/BlogAppDatabase`

## DB Design

- Posts
- Like and Unlike
- comments

## database

### posts -> id,title,body,likes,comments

### Like and Unlike ->id, post, user

### comments ->id, post,user,body
