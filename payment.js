export const processPayment = (amount, cardNumber) => {
  if (!validCardNumbers.includes(cardNumber)) {
    return { success: false, error: 'Invalid card number' }
  }

  return {
    success: true,
    data: {
      transcationId: generateTransactionId(),
      amount,
      date: new Date()
    }
  }
}

const generateTransactionId = () => {
  // generate 16 digit transaction id joined from 4 random 4 digit numbers
  const transactionId = Array.from({ length: 4 }, () =>
    Math.floor(Math.random() * 10000)
      .toString()
      .padStart(4, '0')
  ).join('')

  return transactionId
}

const validCardNumbers = [
  '4111111111111111',
  '4012888888881881',
  '4917610000000000',
  '5105105105105100',
  '6011111111111117',
  '3530111333300000',
  '3566002020360505',
  '2223000048400011',
  '2223520043560014',
  '5555555555554444',
  '5105105105105100',
  '3782822463100052',
  '3714496353984314'
]
