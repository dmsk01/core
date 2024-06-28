import { test, expect } from "@playwright/test";

test("create delete course list item", async ({ page }) => {
  await page.goto("/");
  await page.getByPlaceholder("Name...").click();
  await page.getByPlaceholder("Name...").fill("test");
  await page.getByPlaceholder("Descripton...").click();
  await page.getByPlaceholder("Descripton...").fill("test desc");
  await page.getByRole("button", { name: "Add course" }).click();
  await expect(page.getByText("testtest descDelete course")).toBeVisible();
  await page.getByRole("button", { name: "Delete course" }).click();
  await expect(page.getByText("testtest descDelete course")).not.toBeVisible();
});
