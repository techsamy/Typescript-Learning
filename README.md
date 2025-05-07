# Typescript-Learning
Typescript testing for demo. 


## Running TypeScript in Node.js

Follow the steps below to set up and run TypeScript code in a Node.js environment.

---

### ✅ Step 1: Install TypeScript Globally
```
npm install -g typescript
```

### ✅ Step 2. 
```
npm install --save-dev ts-node
```

### ✅ Step 3: Create or Update tsconfig.json
   #### Ensure your tsconfig.json file is correctly configured. Here's a basic example:
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
### ✅ Step 4: Run Your TypeScript File
```
npx ts-node your_file.ts
```