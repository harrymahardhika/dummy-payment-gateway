const express = require('express')
const app = express()

app.use(express.json())

app.post('/pay', (req, res) => {
  const { amount } = req.body

  const paymentStatus = Math.random() < 0.9

  if (!paymentStatus) {
    res.status(400).json({ message: 'Payment failed' })
    return
  }

  res.status(200).json({
    message: 'Payment successful',
    data: {
      transactionId: generateTransactionId(),
      amountPaid: parseInt(amount),
      paymentStatus: 'success',
      timestamp: new Date().toISOString()
    }
  })
})

const generateTransactionId = () => {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  let transactionId = ''

  for (let i = 0; i < 20; i++) {
    transactionId += characters[Math.floor(Math.random() * characters.length)]
  }

  return transactionId
}

app.listen(3000, () => {
  console.log('Server started on port 3000')
})
