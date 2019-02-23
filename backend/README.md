This directory contains code for the "backend" of the site. It uses the serverless framework. To deploy, run the following commands (your .env file will need to have the correct values). Currently, they use Steven's personal API credentials

`serverless deploy --stage prod`

This will make the endpoints available on https://wnephqc0h5.execute-api.us-east-1.amazonaws.com/prod/, for example https://wnephqc0h5.execute-api.us-east-1.amazonaws.com/prod/events/upcoming

During development, you can deploy to the dev stage with:

`serverless deploy`

This will make the dev endpoints available on https://a4r5uubl3a.execute-api.us-east-1.amazonaws.com/dev/ for example https://a4r5uubl3a.execute-api.us-east-1.amazonaws.com/dev/events/upcoming
