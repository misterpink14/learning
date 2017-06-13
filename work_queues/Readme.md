# Work Queues

## Define Environment Variable

```bash
export CP=.:amqp-client-4.0.2.jar:slf4j-api-1.7.21.jar:slf4j-simple-1.7.22.jar
```

## Build

```bash
javac -cp $CP NewTask.java Worker.java
```

## Run Worker

```bash
java -cp $CP Worker
```

## Run Task

```bash
java -cp $CP NewTask
```

