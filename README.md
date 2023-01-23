# SQL Schema Visualizer

A prototype of relational database schema visualization using [ReactFlow](https://reactflow.dev/).

## How it works?

Every table is a ReactFlow [Custom Node](https://reactflow.dev/docs/guides/custom-nodes/) with custom [Markers](https://reactflow.dev/docs/examples/edges/markers/) (those SVG icons with dot and fork).

[Here's a ReactFlow sandbox example of Custom Nodes](https://github.com/wbkd/react-flow-example-apps/tree/main/reactflow-create-react-app).

## How to arrange tables for your schema

By default, every table will be places in the center of the screen (`x: 0, y: 0` posision). All custom positions are stored in the [`src/config/tablePositions.ts`](https://github.com/sqlhabit/sql_schema_visualizer/blob/main/src/config/tablePositions.ts) file.

There's no need to update them manually. Instead:

1. Drag table nodes around in the browser to find a perfect arrangement.
2. **CTRL** + **P**. It copies node positions JSON to your clipboard.
3. Paste (**CMD** + **V**) JSON with positions to the [`src/config/tablePositions.ts`](https://github.com/sqlhabit/sql_schema_visualizer/blob/main/src/config/tablePositions.ts) file.
4. PROFIT :beers:

## Contributing

You're more than welcome to contribute. In fact, I'm really looking forward to it! :rocket:

Just make sure to check out the [contribution guidelines](https://github.com/sqlhabit/sql_schema_visualizer/blob/main/CONTRIBUTING.md). :pray:

## Development

You'll need to install dependencies and start a dev server:

```sh
npm install

npm start
```

You'll find the running visualizer at [http://localhost:3000](http://localhost:3000).

## Testing

Tests are written with the [React Testing Library](https://testing-library.com/docs/react-testing-library/example-intro). Run all of them via


```sh
npm test
```

## Releasing

### Building your Schema Visualizer

Once you've added your tables, build the project and upload the files from the [`/build`](https://github.com/sqlhabit/sql_schema_visualizer/tree/main/build) to your hosting of choice:


```sh
npm build
```

### Deploying

I highly recommend https://surge.sh/. It'll take you ~2 minutes to deploy your schema online:

1. `npm install --global surge`.
2. `cd build`
3. `surge`
4. PROFIT :beers:

## Maintainers

Schema Visualizer is a project of Anatoli of [SQL Habit](https://www.sqlhabit.com/). Hi from Berlin! :wave: :beers:

Anatoli Makarevich • [Twitter](https://twitter.com/makaroni4) • [Github](https://github.com/makaroni4)


## License

SQL Schema Visualizer is [MIT licensed](https://github.com/sqlhabit/sql_schema_visualizer/blob/main/LICENSE).
