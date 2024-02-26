const express = require('express');
const translate = require('translate-google');

const app = express();
const PORT =  3000;

app.use(express.json());

app.post('/translate', async (req, res) => {
  try {
    const { text } = req.body;

    if (!text) {
      return res.status(400).json({ error: 'Text to translate is required.' });
    }

    const translatedText = await translate(text, { to: 'fr' });

    res.json({ translation: translatedText });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
