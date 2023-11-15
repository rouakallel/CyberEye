const mongoose = require('mongoose');

const hostSchema = new mongoose.Schema({
  regionCode: String,
  tags: [String],
  ip: Number,
  areaCode: Number,
  domains: [String],
  hostnames: [String],
  countryCode: String,
  org: String,
  data: [{
    product: String,
    hash: Number,
    os: String,
    timestamp: Date,
    isp: String,
    transport: String,
    _shodan: {
      region: String,
      ptr: Boolean,
      module: String,
      id: String,
      options: Object,
      crawler: String
    },
    rdp_encryption: {
      levels: [String],
      methods: [String],
      protocols: [String]
    },
    asn: String,
    location: {
      city: String,
      regionCode: String,
      areaCode: Number,
      longitude: Number,
      latitude: Number,
      country_code: String,
      country_name: String
    },
    ip: Number,
    domains: [String],
    org: String,
    data: String,
    port: Number,
    opts: {
      raw: String
    },
    ip_str: { type: String, unique: true }
  }],
  asn: String,
  city: String,
  latitude: Number,
  isp: String,
  longitude: Number,
  lastUpdate: Date,
  vulns: { type: [String], default: [] },
  countryName: String,
  ip_str: { type: String, unique: true },
  os: String,
  ports: [Number]
});




module.exports =  mongoose.model('hostModel', hostSchema);