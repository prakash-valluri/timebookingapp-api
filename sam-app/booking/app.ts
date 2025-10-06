import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';

import DynamoDB, {
    PutItemInput,
    PutItemOutput,
    PutItemInputAttributeMap,
    GetItemInput,
    GetItemOutput,
    QueryInput,
    UpdateItemInput,
} from 'aws-sdk/clients/dynamodb';
const dynamoDB = new DynamoDB({});

import { PromiseResult } from 'aws-sdk/lib/request';


/**
1. POST : to save a booking
2. GET : /user/id : to get a user's booking
       : /users : to get all the users booking
 */
export const booking = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    try {
        const method = event.httpMethod;
        if (!['POST', 'GET'].includes(event.httpMethod)) {
            return {
                statusCode: 405,
                body: JSON.stringify({
                    message: `${method} : Method not supported`,
                }),
            };
        }

        switch (event.httpMethod) {
            case 'POST':
                return await HandlePostRequest();
            case 'GET':
                return await HandleGetRequest();
            default:
                return {
                    statusCode: 200,
                    body: JSON.stringify({
                        message: 'Neither Get nor Post - Very rare',
                    }),
                };
                break;
        }
    } catch (err) {
        console.log(err);
        return {
            statusCode: 500,
            body: JSON.stringify({
                message: 'LAMBDA Error - Portfolio Save',
            }),
        };
    }
};


async function HandlePostRequest() {
    return {
        statusCode: 200,
        headers: {
            'Access-Control-Allow-Headers': '*',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'OPTIONS,POST,GET',
        },
        body: JSON.stringify({
            message: 'POST: Poist request executed successfully',
        }),
    };
}

async function HandleGetRequest() {
    return {
        statusCode: 200,
        headers: {
            'Access-Control-Allow-Headers': '*',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'OPTIONS,POST,GET',
        },
        body: JSON.stringify({
            message: 'Get request executed successfully',
        }),
    };
}