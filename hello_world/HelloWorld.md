# [Hello World](https://www.rabbitmq.com/tutorials/tutorial-one-java.html)

## Dependencies

+ [Client Java library](http://central.maven.org/maven2/com/rabbitmq/amqp-client/4.0.2/amqp-client-4.0.2.jar)
+ [SLF4J API \(amqp client dependency\)](http://central.maven.org/maven2/org/slf4j/slf4j-api/1.7.21/slf4j-api-1.7.21.jar)
+ [SLF4J Simple \(amqp client dependency\)](http://central.maven.org/maven2/org/slf4j/slf4j-simple/1.7.22/slf4j-simple-1.7.22.jar)

## Build

```bash
javac -cp amqp-client-4.0.2.jar Send.java Recv.java
```

## Run

### Consumer

```
java -cp .:amqp-client-4.0.2.jar:slf4j-api-1.7.21.jar:slf4j-simple-1.7.22.jar Recv
```

### Publisher

```
java -cp .:amqp-client-4.0.2.jar:slf4j-api-1.7.21.jar:slf4j-simple-1.7.22.jar Send
```

