import {FullConfig} from '@playwright/test';


import dotenv from 'dotenv';
import path from 'path';    
async function globalSetup(FullConfig) 
 {


if(process.env.test_env){

    dotenv.config({
        path: `.env.${process.env.test_env}`,
        override: true

    })


}

}

 export default globalSetup;
