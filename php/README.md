# URL Unshortener API - PHP Package

URL Unshortener expands shortened links to reveal their final destination URL and destination domain. Send any short link to inspect the resolved address and redirect count; paid plans add the full redirect chain.

## Installation

Install via Composer:

```bash
composer require apiverve/urlunshortener
```

## Getting Started

Get your API key at [APIVerve](https://apiverve.com)

### Basic Usage

```php
<?php

require_once 'vendor/autoload.php';

use APIVerve\Urlunshortener\Client;

// Initialize the client
$client = new Client('YOUR_API_KEY');

// Make a request
$response = $client->execute(['url' => 'https://bit.ly/3k3j4']);

// Print the response
print_r($response);
```


### Error Handling

```php
use APIVerve\Urlunshortener\Client;
use APIVerve\Urlunshortener\Exceptions\APIException;
use APIVerve\Urlunshortener\Exceptions\ValidationException;

try {
    $response = $client->execute(['url' => 'https://bit.ly/3k3j4']);
    print_r($response['data']);
} catch (ValidationException $e) {
    echo "Validation error: " . implode(', ', $e->getErrors());
} catch (APIException $e) {
    echo "API error: " . $e->getMessage();
    echo "Status code: " . $e->getStatusCode();
}
```

### Debug Mode

```php
// Enable debug logging
$client = new Client(
    apiKey: 'YOUR_API_KEY',
    debug: true
);
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

## Requirements

- PHP 7.4 or higher
- Guzzle HTTP client

## Documentation

For more information, visit the [API Documentation](https://docs.apiverve.com/ref/urlunshortener?utm_source=packagist&utm_medium=referral&utm_content=readme).

## Support

- Website: [https://apiverve.com/marketplace/urlunshortener?utm_source=php&utm_medium=referral&utm_content=readme](https://apiverve.com/marketplace/urlunshortener?utm_source=php&utm_medium=referral&utm_content=readme)
- Email: hello@apiverve.com

## License

This package is available under the [MIT License](LICENSE).
