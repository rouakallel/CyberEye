const emailSchema =  mongoose.Schema(
    {
    title: String,
    domain: String,
    breachDate: Date,
    addedDate: Date,
    modifiedDate: Date,
    description: String,
    dataClasses: [String],
    isVerified: Boolean,
    isFabricated: Boolean,
    isSensitive: Boolean,
    isRetired: Boolean,
    isSpamList: Boolean,
    logoType: String
  }
  )
  const Email = mongoose.model('email', emailSchema)
  module.exports = Email
  