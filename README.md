# clusterjs

a nodejs demo for what would happen if unhandled promise rejection happened. and how to fix it

# demos

* unhandled promise rejection happened in a cluster's worker process: this process will hang in there

* unhandled promise rejection happened in a express api call: this api will not getting a response from the server, but the server still can receive new reqeust.