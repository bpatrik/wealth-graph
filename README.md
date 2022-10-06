# wealth-graph

**NOTE**: this project is work in progress. It does not accept any bug reports or feature requests.


**wealth-graph** is a desktop application for visualizing your net-wealth and spending/incomes.
You can feed your bank, credit-card, investment history to the app and it will visualize it for you.
In short: app should replace you excel sheet, that you use for tracking your money.

**NOTE**: this app is best-effort. It does not want to be perfect on economical terms

Screenshot from the app:
![wealth-graph](docs/app.png)


## Running

1. Clone the project
2. `npm install` (you need node 14 or higher)
3. `npm start`

## TODOs

* nicer UI
* creat configuration
* data parser (for loading bank histories)
  * creating simple so people can implement their own parsers
* support multiple currencies
* download actual currency prices to visualize net-wealth more precisely
* add automatic cross account transfer detection (i.e: if you send money between your accounts, that is not an expanse or an income)
* create release workflow

### Used technologies:
 * electron (for desktop app)
 * Angular
 * Bootstrap
 * Highcharts

App bootstrap: https://github.com/maximegris/angular-electron
