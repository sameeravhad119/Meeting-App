npx create-react-app my-app 

Redux store setup
npm i react-redux @reduxjs/toolkit

React router 
npm i react-router-dom

npm install @apollo/client graphql

to download graphql schema , install graphql and apollo package globally
then npx apollo service:download --endpoint=http://smart-meeting.herokuapp.com/graphql ./src/graphql/graphql-schema.json

If there is change in query, then generating updated structure for typescript suggestion
npx apollo codegen:generate --localSchemaFile=./src/graphql/graphql-schema.json --target=typescript --tagName=gql --watch