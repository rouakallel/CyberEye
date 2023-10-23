const mongoose = require('mongoose')

const lastDnsRecordSchema = new mongoose.Schema({
  rname: { type: String },
  retry: { type: Number },
  value: { type: String },
  minimum: { type: Number },
  refresh: { type: Number },
  expire: { type: Number },
  ttl: { type: Number },
  serial: { type: Number },
  type: { type: String }
});

const popularityRankSchema = new mongoose.Schema({
  timestamp: { type: Number },
  rank: { type: Number }
});

const lastAnalysisResultSchema = new mongoose.Schema({
  category: { type: String },
  result: { type: String },
  method: { type: String },
  engine_name: { type: String }
});

const attributesSchema = new mongoose.Schema({
  last_dns_records: [lastDnsRecordSchema],
  tags: [String],
  popularity_ranks: {
    Statvoo: popularityRankSchema,
    Alexa: popularityRankSchema
  },
  last_analysis_date: { type: Number },
  last_dns_records_date: { type: Number },
  last_analysis_stats: {
    harmless: { type: Number },
    malicious: { type: Number },
    suspicious: { type: Number },
    undetected: { type: Number },
    timeout: { type: Number }
  },
  reputation: { type: Number },
  last_analysis_results: {
    Bkav: lastAnalysisResultSchema,
    'CMC Threat Intelligence': lastAnalysisResultSchema,
    'Kaspersky': lastAnalysisResultSchema
  },
  tld: { type: String },
  last_modification_date: { type: Number },
  categories: {},
  total_votes: {
    harmless: { type: Number },
    malicious: { type: Number }
  }
});

const dataSchema = new mongoose.Schema({
  data:{ 
  attributes: attributesSchema,
  type: { type: String },
  id: { type: String },
  links: {
    self: { type: String }
  }
}
});



module.exports =  mongoose.model('DomainData', dataSchema);







