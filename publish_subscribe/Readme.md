# Logger

## Build

```bash
javac -cp $CP EmitLog.java ReceiveLogs.java
```

## Run

```bash
# Save to file
java -cp $CP ReceiveLogs > logs_from_rabbit.log

# Show on screen
java -cp $CP ReceiveLogs

# Emit Logs
java -cp $CP EmitLog
```
