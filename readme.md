# This is the backend for booking time.
We are using **SAM** to create a tempalte and deploy the resultant *CloudFormation* Stack to AWS.
> We are planning for integrating payment gateway also.
> We will be having Admin and user login in future. 
> When admin logs in at the Front end all the bookings will be shown in a paginated way.
> When a particular user logs in, Then all his bookings only will be shown.

## Development and deployment steps
1. Install AWS CLI and SAM CLI.
2. Create an AccessKey and Secret Access Key and use *aws configure* to create a profile in CLI. We use this profile to interact with AWS. Now any commands like *aws s3 ls* must work.
3. Now its time to get working on SAM.