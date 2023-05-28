const mongoose = require('mongoose');

const HttpDataSchema = new mongoose.Schema({
  status: {
    type: Number,
    required: true
  },
  robots_hash: String,
  redirects: [String],
  securitytxt: String,
  title: String,
  sitemap_hash: String,
  robots: String,
  server: String,
  headers_hash: {
    type: Number,
    required: true
  },
  host: {
    type: String,
    required: true
  },
  html: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  components: {
    type: Map,
    of: mongoose.Schema.Types.Mixed
  },
  html_hash: {
    type: Number,
    required: true
  },
  sitemap: String,
  securitytxt_hash: String
});

const LocationSchema = new mongoose.Schema({
  city: {
    type: String,
    required: true
  },
  region_code: {
    type: String,
    required: true
  },
  area_code: String,
  longitude: {
    type: Number,
    required: true
  },
  latitude: {
    type: Number,
    required: true
  },
  country_code: {
    type: String,
    required: true
  },
  country_name: {
    type: String,
    required: true
  }
});

const ShodanDataSchema = new mongoose.Schema({
  hash: {
    type: Number,
    required: true
  },
  asn: {
    type: String,
    required: true
  },
  http: {
    type: HttpDataSchema,
    required: true
  },
  os: String,
  timestamp: {
    type: String,
    required: true
  },
  isp: {
    type: String,
    required: true
  },
  transport: {
    type: String,
    required: true
  },
  _shodan: {
    region: {
      type: String,
      required: true
    },
    ptr: {
      type: Boolean,
      required: true
    },
    module: {
      type: String,
      required: true
    },
    id: {
      type: String,
      required: true
    },
    options: {
      type: Map,
      of: mongoose.Schema.Types.Mixed
    },
    crawler: {
      type: String,
      required: true
    }
  },
  hostnames: [String],
  location: {
    type: LocationSchema,
    required: true
  },
  ip: {
    type: Number,
    required: true
  },
  domains: [String],
  org: {
    type: String,
    required: true
  },
  data: {
    type: String,
    required: true
  },
  port: {
    type: Number,
    required: true
  },
  opts: {
    type: Map,
    of: mongoose.Schema.Types.Mixed
  },
  ip_str: {
    type: String,
    required: true
  }
});

const DomainInfoSchema = new mongoose.Schema({
  region_code: {
    type: String,
    required: true
  },
  tags: [String],
  ip: {
    type: Number,
    required: true
  },
  area_code: String,
  domains: [String],
  hostnames: [String],
  country_code: {
    type: String,
    required: true
  },
  org: {
    type: String,
    required: true
  },
  data: [ShodanDataSchema],
  asn: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  latitude: {
    type: Number,
    required: true
  },
  isp: {
    type: String,
    required: true
  },
  longitude: {
    type: Number,
    required: true
  },
  last_update: {
    type: String,
    required: true
  },
  country_name: {
    type: String,
    required: true
  },
  ip_str: {
    type: String,
    required: true
  },
  os: String,
  ports: [Number]
});


module.exports =  mongoose.model('hostData', DomainInfoSchema);