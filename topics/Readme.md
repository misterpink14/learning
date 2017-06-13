# Logger Topic

## Run

```bash
# receive all logs
java -cp $CP ReceiveLogsTopic "#"

# receive all logs from "kern"
java -cp $CP ReceiveLogsTopic "kern.*"

# critical logs
java -cp $CP ReceiveLogsTopic "*.critical"

# multiple bindings
java -cp $CP ReceiveLogsTopic "kern.*" "*.critical"

# emit log with routing key
java -cp $CP EmitLogTopic "kern.critical" "A critical kernel error"
```
