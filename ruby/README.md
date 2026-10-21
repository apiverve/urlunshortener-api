# URL Unshortener API - Ruby Gem

URL Unshortener expands shortened links to reveal their final destination URL and destination domain. Send any short link to inspect the resolved address and redirect count; paid plans add the full redirect chain.

## Installation

Add this line to your application's Gemfile:

```ruby
gem 'apiverve_urlunshortener'
```

And then execute:

```bash
$ bundle install
```

Or install it yourself as:

```bash
$ gem install apiverve_urlunshortener
```

## Getting Started

Get your API key at [APIVerve](https://apiverve.com)

### Basic Usage

```ruby
require 'apiverve_urlunshortener'

# Initialize the client
client = APIVerve::Urlunshortener::Client.new(api_key: "YOUR_API_KEY")

# Make a request
response = client.execute({ url: "https://bit.ly/3k3j4" })

# Print the response
puts response
```


### Error Handling

```ruby
begin
  response = client.execute({ url: "https://bit.ly/3k3j4" })
  puts response["data"]
rescue APIVerve::Urlunshortener::ValidationError => e
  puts "Validation error: #{e.errors.join(', ')}"
rescue APIVerve::Urlunshortener::APIError => e
  puts "API error: #{e.message}"
  puts "Status code: #{e.status_code}"
end
```

### Debug Mode

```ruby
# Enable debug logging
client = APIVerve::Urlunshortener::Client.new(
  api_key: "YOUR_API_KEY",
  debug: true
)
```

## Example Response

```json
{
  "status": "ok",
  "error": null,
  "data": {
    "source": "https://bit.ly/3k3j4",
    "destination": "http://www.allclimbing.com/archive/2009/09/climbing-video-alex-puccio-on-trice-v12/",
    "unshortened": true,
    "redirectCount": 1,
    "destinationDomain": "www.allclimbing.com",
    "redirectChain": [
      "https://bit.ly/3k3j4",
      "http://www.allclimbing.com/archive/2009/09/climbing-video-alex-puccio-on-trice-v12/"
    ]
  }
}
```

## Documentation

For more information, visit the [API Documentation](https://docs.apiverve.com/ref/urlunshortener?utm_source=rubygems&utm_medium=referral&utm_content=readme).

## Support

- Website: [https://apiverve.com/marketplace/urlunshortener?utm_source=ruby&utm_medium=referral&utm_content=readme](https://apiverve.com/marketplace/urlunshortener?utm_source=ruby&utm_medium=referral&utm_content=readme)
- Email: hello@apiverve.com

## License

This gem is available under the [MIT License](LICENSE).
