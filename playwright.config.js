// @ts-check
import { defineConfig } from '@playwright/test';


export default defineConfig({
  testDir: './tests',
  timeout: 180*1000,
  retries: 0,

  //for assertions
  expect: {
    timeout:5000,
  },

  //provides html reports after running the test
  reporter:'html',

  use: {
    browserName:'chromium',
    headless:false,
    //screenshot:'on',
    trace : 'on'
    //trace:'retain-on-failure', //off,on
  },


  // projects :[
  //   {
  //     name:'safari',
  //     use: {
  //   browserName:'webkit',
  //   headless:false,
  //   //screenshot:'on',
  //   //trace:'retain-on-failure', //off,on
  // }
  //   },
  //   {
  //     name:'chrome',
  //     use: {
  //   browserName:'chromium',
  //   headless:false,
  //   //screenshot:'on',
  //   //trace:'retain-on-failure', //off,on
  // }
  //   }
  // ]
});

