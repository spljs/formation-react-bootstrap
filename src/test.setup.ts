import {server} from "./mocks/server";
import '@testing-library/jest-dom';
import {fetch} from "cross-fetch";

global.fetch = fetch;

beforeAll(() => server.listen({onUnhandledRequest: 'error'}));
afterAll(() => server.close());
afterEach(() => server.resetHandlers());
