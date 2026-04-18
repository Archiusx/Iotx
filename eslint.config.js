import firebaseRulesPlugin from '@firebase/eslint-plugin-security-rules';

export default [
  {
    files: ['firestore.rules'],
    languageOptions: {
      parserOptions: {
        project: null,
      },
    },
  },
  firebaseRulesPlugin.configs['flat/recommended']
];
