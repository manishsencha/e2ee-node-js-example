# e2ee-node-js-example

A simple Node.js example demonstrating end-to-end encryption (E2EE) using RSA key pairs with TypeScript.

## Overview

This repository provides a straightforward implementation showing how two parties (Alice and Bob) can securely exchange messages using asymmetric encryption (RSA) in Node.js. It showcases:
- Generating RSA key pairs for both sender and receiver.
- Encrypting a message using the receiver's public key.
- Decrypting the received message using the receiver's private key.

## Features

- Key pair generation using Node.js `crypto` module
- Demonstrates sharing public keys for secure communication
- Encryption and decryption of messages using RSA
- Output of both encrypted (base64) and decrypted (plain text) messages

## Usage

1. Clone the repository:

   ```sh
   git clone https://github.com/manishsencha/e2ee-node-js-example.git
   cd e2ee-node-js-example
   ```

2. Install dependencies:

   ```sh
   npm install
   ```

3. Run the example:

   ```sh
   npx ts-node index.ts
   ```

   You will see the encrypted message and the decrypted output in your console.

## Example Output

```
Encrypted message:  <base64 string>
Decrypted message:  Hello, How are you?
```

## How it works

- Both Alice and Bob generate their own RSA key pairs.
- Alice encrypts a message using Bob's public key.
- Bob decrypts the message using his private key.

## Requirements

- Node.js (v18+ recommended)
- TypeScript

## License

This project does not specify a license.

## Author

- [manishsencha](https://github.com/manishsencha)
