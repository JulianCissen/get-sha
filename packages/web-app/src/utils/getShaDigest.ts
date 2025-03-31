//import createHash from 'create-hash';

//export const getShaDigest = (alg: 'sha256' | 'sha512', data: string) => createHash(alg).update(data).digest('base64');

export const getShaDigest = async (
    alg: 'sha256' | 'sha512',
    data: string,
): Promise<string> => {
    // Convert the input string to an ArrayBuffer
    const encoder = new TextEncoder();
    const dataBuffer = encoder.encode(data);

    // Use the Web Crypto API to create the hash
    const hashBuffer = await window.crypto.subtle.digest(
        {
            name: alg === 'sha256' ? 'SHA-256' : 'SHA-512',
        },
        dataBuffer,
    );

    // Convert the hash to base64
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashBase64 = btoa(String.fromCharCode(...hashArray));

    return hashBase64;
};
