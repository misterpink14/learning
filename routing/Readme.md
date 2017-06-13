# Logger Routing

## Run

```bash
# save warning and error only
java -cp $CP ReceiveLogsDirect warning error > logs_from_rabbit.log

# see only on screen
java -cp $CP ReceiveLogsDirect info warning error

# emit an error message
java -cp $CP EmitLogDirect error "Run. Run. Or it will explode."
```
