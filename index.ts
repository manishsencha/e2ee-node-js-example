import crypto from 'node:crypto';


function generate_key_pair() {
    const { publicKey, privateKey } = crypto.generateKeyPairSync('rsa', {
        modulusLength: 2048,
        publicKeyEncoding: {
            type: 'spki',
            format: 'pem'
        },
        privateKeyEncoding: {
            type: 'pkcs8',
            format: 'pem',
        }
    });
    return { publicKey, privateKey };
}

const alice_keys = generate_key_pair();
const bob_keys = generate_key_pair();

// They will share their public keys with each other

const message = "Hello, How are you?";

// Alice will use Bob's public key to encrypt the message
const encrypted_message = crypto.publicEncrypt(
    bob_keys.publicKey,
    Buffer.from(message)
);

console.log("Encrypted message: ", encrypted_message.toString("base64"));

// Bob will use his private key to decrypt the message
const decrypted_message = crypto.privateDecrypt(
    bob_keys.privateKey,
    encrypted_message
);

console.log("Decrypted message: ", decrypted_message.toString());
