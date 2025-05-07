# Typescript-Learning
Typescript testing for demo. 


## How to run typescript directly in codespace 

Step 1. npm install -g typescript
Step 2. npm install --save-dev ts-node
Step 3: Create or Update tsconfig.json
    Ensure your tsconfig.json file is correctly configured. Here's a basic example:
    ```
    {
        "compilerOptions": {
            "target": "ES6",
            "module": "commonjs",
            "esModuleInterop": true,
            "strict": true
        }
    }
    ```
Step 4: Run Your TypeScript File
    npx ts-node your_file.ts

    