# Webpack ParseReact Demo

1. Create Parse Account
2. Create Parse Application
3. Create two collections `Story` and `Page`
4. `Story` has a String field `content`
5. `Page` has a String field `content` and a Pointer reference `story` to the collection `Story`
6. Relace `APPLICATION_ID` and `JAVASCRIPT_KEY` with your own one.

```
Parse.Parse.initialize('APPLICATION_ID', 'JAVASCRIPT_KEY');
```

# Testing

- Use `karma` and `mocha` in a rspec style
- Run `npm test` to start
- Thanks to `karma`, the test will watch file changes and re-run automatically

## References

- [ParseReact](https://github.com/ParsePlatform/ParseReact/)
- [Webpack React](https://github.com/survivejs/webpack_react)

