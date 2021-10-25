module.exports = {
  presets: ['next/babel', '@babel/preset-react'],
  plugins: [
    [
      'styled-components',
      {
        ssr: true,
        displayName: true,
        preprocess: false
      }
    ]
  ]
}
