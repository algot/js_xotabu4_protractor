import { browser, ExpectedConditions as EC, $, $$ } from "protractor";
import { HomePage } from "../page_objects/home.page";
import { futimes } from "fs";

describe("Verifying project generation ", function () {
  beforeEach(async () => {
    await new HomePage().open();
  });

  it("Checking that created project can start and communicate with browser", async function () {
    await expect($$("div").first()).toAppear(
      "At least one div should appear on the page"
    );
  });
});
