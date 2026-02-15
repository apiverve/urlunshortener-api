using System;
using System.Collections.Generic;
using System.Text;
using Newtonsoft.Json;

namespace APIVerve.API.URLUnshortener
{
    /// <summary>
    /// Query options for the URL Unshortener API
    /// </summary>
    public class URLUnshortenerQueryOptions
    {
        /// <summary>
        /// The shortened URL to unshorten
        /// </summary>
        [JsonProperty("url")]
        public string Url { get; set; }
    }
}
