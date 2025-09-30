# This is the backend for booking time.
We are using **SAM** to create a template and deploy the resultant *CloudFormation* Stack to AWS.
> We are planning for integrating payment gateway also.
> We will be having Admin and user login in future.
> When a particular user logs in, Then only user bookings only will be shown.JWT Token verification will be done in the backend to prevent data leaks.
Note : DynamoDB Table design, This covers the primary access pattern of user logging in and retreiving data.
      PK : USER#<USER_ID>
      SK : <DATE_AND_TIME>

> Secondary access pattern, When admin logs in at the Front end, all the bookings are to be retreived for that day.
Note :To avoid cross partition queries in dynamoDB database its better to have a GSI added to the Main Table.
      GSI PK : DATE#<VALUE_OF_DATE>
      GSI SK : TIME#<VALUE_OF_TIME>
Data Access Pattern : Admin would login and we show all the booking for that day. Clicking on the Right Chevron would present the bookings for the next day and so on.

> Cancel booking.
> EMail notifications for booking confirmation.
> Reminders?

## Development and deployment steps.
1. Install AWS CLI and SAM CLI.
2. Create an AccessKey and Secret Access Key and use *aws configure* to create a profile in CLI. We use this profile to interact with AWS. Now any commands like *aws s3 ls* must work.
3. Install SAM and verify it with *sam --version*
4. Git (tip) : If you had done some wrong coding in local and revert that file just run **git restore readme.md**.
5. Run : Sam init to initialise a Hello world (TS) application.
6. Steps to build and deploy your app. 
[ When you run sam build : Some times we might run into permission errors. ]
[ When we run sam deploy : We will be asked a bunch of inputs. ]
```bash
sam build
sam deploy --guided
```
7. Some helpful commands are : 
aws configure list
