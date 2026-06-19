import {test,expect} from '@playwright/test';

test('Get API Request', async({request})=>{

    const response = await request.get('https://jsonplaceholder.typicode.com/users');
    expect(response.status()).toBe(200);
    const text = await response.text();
    expect(text).toContain('Leanne Graham');
    console.log(await response.json());
})

test('POST API Request', async({request})=>{

    const response = await request.post('https://jsonplaceholder.typicode.com/posts',{
        data:{
            "title": "hello hello Test",
            "completed": true
             }
    }
    )
    await expect(response.status()).toBe(201);
})

test('PUT API Request',async({request})=>{
    const response = await request.put('https://jsonplaceholder.typicode.com/posts/1',{
        data: {
            "title": "hello hello Test",
            "completed":false
        }
    }
    
    )
    await expect(response.status()).toBe(200);
})

test('DELETE', async({request})=>{
    const response = await request.delete('https://jsonplaceholder.typicode.com/posts/1');
    await expect(response.status()).toBe(200);
})