const admin = require("firebase-admin");
var serviceAccount = {
  type: "service_account",
  project_id: "socialapp-c6ffe",
  private_key_id: "d07705838f8a816dada0cfb2274b620f01819810",
  private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCp7IUjp6iYro1C\nRaG0PznrwWrpP8ATIk926jCNG+JObP9bMvKUIQp3NlAYwNBRe5schvMVzkCyvKVT\n1akZIzZwNj06VC4uLnR98qH6UEPqapRUUoJPc48SX2oy/kD3yCVV1MU2C8sp7UL5\nawTHN9nNU4/GfPjtgmQ/ctIWvRVWpjgcfE6AsWmzrRZ6ZL8fUnGmQ9yftYp1uMCk\nYP1kMBp9M7nhrpC3AC6iyAA6d1SDlw9C/dYzQi4Af+l/Ha60mRt2osnYw9PkjLN0\nMHG/D2UixoZrHmtDNS4KKfP9ORlV+/s7j7OW8nvJuAAISDZn2al2GtlWw4+rUTv1\nLjoJ34TxAgMBAAECggEAJwnUQq9DkCRWBro5ntABzhSHK+Q+DAdPa1n9YoXb9bmb\n5wdq7LY0kdPUDgPKOFYl+iVU1pcmjQnDD+If8csBuED1yx9I5so8cC0cooXrPIFU\n55R3JKq/XXC3VNTN9z8vuKrjzfliqRS91NCN7fj6XG5Ms0TF6ccRofQOqTOyoc+4\nyg5SbAFBmUNVV4nibUDYaYREAgMOsBetMCoJdtBVRqufFGGphUrWG4QtS5Amkq8c\nreUcuO6paZpM6nh0cKKIovr0+dQuJidNOYauArSzuTK4qAfw7AywC8aSC0vT5mhr\nC2FoV4xC4RbsgPES11YYGVZi4HSbWB4gGvFvAMg5uQKBgQDqbX2YftHvgA9dGRDJ\nkMY4dP1rzOai2zmAGgRRUM/pfIqd/kZ2aX4rvRzC9S/8gQ8bKXotmUEWldNrraVO\nylgsEJY8jueVfA/VHiGRCZfV8bdi0gnYdf9aSPvrr24hyfoaC00nFKLnqAsx9ERj\niP7+aGOzhWWp5Rf7e4XJpbFajQKBgQC5j3y57erXgv53n+2Cr0x19CXP8J8HyXO+\nvJV7+CQYF/s+jn3O6fW9yuBeA3q9izqgvoLkOHQkcdhkVc/06oApzWo2K7QZ2Mp6\nor3Xt2bWpZiXOoBp00/1ZRmh4eEeOU9GwdH6raPpsyTxpmOjHsSkcwATq5QoBW5w\n1oi9EcpM9QKBgAUu4I0DmM6rzSsox7c9LTTIWWYNxLerEy1i5d+KYt5ts37kxVgO\n4wxChSVGWIZDsDrQgvQJJGhEbcU+tJ32WVa4EypJmpMyiAMVRHa5eJLxYjWcIT2Y\n9klfvborScsTdSUoRM9tZGCs1XqIRQ7SU5j6Y+HvPB0yhII56+5WbIJtAoGAazjD\nPHiCo6cYvSzXRBVhHCNImiAS9J/uVr+HrQuUZ6urzNjvT1mXWuTYwtpF2TKTXQDY\nh2Erk0eJX2jKcl3yUrVUcxrLxcekMDrLcdOTA+LKClCOlRe6czTJG+Z2e01oRp2G\nZNBjD44pgczAdCg6PkAJQlR5lqqUx3TfrEiUWeUCgYBmTNSLydwb/kDddUdgjYTq\nvfhh3zNxz/nLk+SKdOjLfAHd+M0nh3GTt1mXXGLgwjIwk3rd1NuwZzvEA2dG4qIR\nt41btsAFnrvj/ujpzSVTYscTF1LcfY+uYlU1HyzGwF6c7Cz4ZsTXo7J/iSSosrHd\nrZOetMntErrvd5+VKE9Dag==\n-----END PRIVATE KEY-----\n",
  client_email: "firebase-adminsdk-lmfm7@socialapp-c6ffe.iam.gserviceaccount.com",
  client_id: "115274704362599951321",
  auth_uri: "https://accounts.google.com/o/oauth2/auth",
  token_uri: "https://oauth2.googleapis.com/token",
  auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
  client_x509_cert_url: "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-lmfm7%40socialapp-c6ffe.iam.gserviceaccount.com"
}

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
    storageBucket:"gs://studup-dc5db.appspot.com"
});

const db = admin.firestore();

module.exports = { admin, db };
