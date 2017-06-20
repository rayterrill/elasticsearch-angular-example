# Angular + Elasticsearch Example

This is an example project using elasticsearch.js with angular, built from the examples at https://github.com/spalger/elasticsearch-angular-example

## Prerequisites

In order to run this example, you will need to have the following installed
  1. [elasticsearch](http://www.elasticsearch.org/guide/en/elasticsearch/guide/current/_installing_elasticsearch.html)
  2. [node.js (with npm)](https://docs.npmjs.com/getting-started/installing-node)

You will also need to configure elasticsearch to accept requests from the browser using [CORS](http://en.wikipedia.org/wiki/Cross-origin_resource_sharing). To enable CORS, add the following to elasticsearch's config file. Usually, this file is located near the elasticsearch executable at `config/elasticsearch.yml`.
Note: If you're running index.html straight from the filesystem as opposed to through a browser, you might be better off setting "http.cors.allow-origin" to "*", which is terrible for security but will work for development purposes.

```yml
http.cors.enabled: true
http.cors.allow-origin: /https?:\/\/localhost(:[0-9]+)?/
```

## To run the example:
1. Clone this repo locally

  ```sh
  git clone https://github.com/rayterrill/elasticsearch-angular-example.git
  ```

2. Move into the project

  ```sh
  cd elasticsearch-angular-example
  ```

3. Install the node modules

  ```sh
  npm install
  ```

4. Open the index.html file in your browser.

5. Check out the source for [index.html](https://github.com/rayterrill/elasticsearch-angular-example/blob/master/index.html) to see how it works.
