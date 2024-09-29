# Petstore API Automation

This project is an automated testing suite for the Petstore API, leveraging Swagger documentation. The tests are implemented using TypeScript and Jest, providing a robust framework to ensure the reliability and functionality of the Petstore endpoints.

## Technologies

- **Node.js**: JavaScript runtime for executing tests.
- **TypeScript**: Superset of JavaScript that compiles to plain JavaScript.
- **Jest**: Testing framework for running the tests.
- **Axios**: HTTP client for making API requests.
- **dotenv**: Module for loading environment variables from a `.env` file.

## Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher)
- npm (Node package manager, included with Node.js)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/emilygirvine/petstore-api-automation.git
   cd petstore-api-automation
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add the following environment variable:

   ```bash
   API_BASE_URL=https://petstore.swagger.io/v2
   ```

## Usage

To run the tests, use the following command:

```bash
npm test
```

## Running Tests

The tests are organized in the **tests** directory. You can specify which test file to run by adding the file name:

```bash
npm test __tests__/pet.test.ts
```

To run all tests with coverage:

```bash
npm test -- --coverage
```

## CI/CD

This project is integrated with GitHub Actions for CI/CD. Upon pushing to the `feature/<your-name-BATest>` branch or creating a pull request, the pipeline will:

- Install dependencies
- Run the test suite

### Checking CI/CD Status

You can monitor the status of your CI/CD pipeline on the GitHub Actions tab of this repository.

## Contact

Emily Irvine  
emilygirvine@gmail.com
