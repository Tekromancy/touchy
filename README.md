# touchy

touchy watches for keyboard activity and turns off the touchpad

## Game Mode

touchy will not mess with touchpad if game mode is on.

### turn on

```
touch /tmp/.game_mode_on
```

### turn off
```
rm /tmp/.game_mode_on
```

## Configuration

For now these variables can be overridden by environment variables:

```
: "${TOUCHPAD:=asuf1209:00-2808:0219-touchpad}"
: ${DELAY:=1}
: ${GAME_MODE_SEMAFORE_FILE:=/tmp/.game_mode_on}
: ${VERBOSITY:=1}
```
