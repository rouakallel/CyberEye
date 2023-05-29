const mongoose = require('mongoose');

const hostSchema = new mongoose.Schema({
  region_code: String,
  area_code: Number,
  domains: [String],
  hostnames: [String],
  country_code: String,
  org: String,
  asn: String,
  city: String,
  country_name: String,
  ip_str: String,
  os: String,
  ports: [Number]
}, { collection: 'hostdatas' });


module.exports =  mongoose.model('hostModel', hostSchema);