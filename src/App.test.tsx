import {render, screen} from "@testing-library/react";
import App from "./App";
import {expect} from "vitest";

describe('App test', () => {

    it('should mount', async () => {

        render(<App/>);

        await screen.findAllByText("lowdb is awesome");
        expect(screen.findAllByText("lowdb is awesome")).toBeDefined();

    });

});