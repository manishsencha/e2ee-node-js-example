import { describe, it, expect } from 'vitest';
import { generate_key_pair, encrypt, decrypt } from './index.js';

describe('E2EE script', () => {
    it('should generate a valid key pair', () => {
        const { publicKey, privateKey } = generate_key_pair();
        expect(publicKey).toContain('BEGIN PUBLIC KEY');
        expect(privateKey).toContain('BEGIN PRIVATE KEY');
    });

    it('should encrypt and decrypt a message correctly', () => {
        const { publicKey, privateKey } = generate_key_pair();
        const message = 'Test message';
        const encrypted = encrypt(publicKey, message);
        const decrypted = decrypt(privateKey, encrypted);
        expect(decrypted).toBe(message);
    });

    it('should fail to decrypt with a different private key', () => {
        const keys1 = generate_key_pair();
        const keys2 = generate_key_pair();
        const message = 'Secret';
        const encrypted = encrypt(keys1.publicKey, message);
        
        expect(() => decrypt(keys2.privateKey, encrypted)).toThrow();
    });
});
