import { expect, test } from "@playwright/test";

test("renders the fruit gallery and choose one", async ({ page }) => {
	await page.goto("/");
	const expectedLinkCount = 6;

	await expect(page.getByRole("link")).toHaveCount(expectedLinkCount);

	await page.getByRole("link", { name: "Apple" }).click();

	await expect(page.getByRole("heading", { name: "Apple" })).toBeVisible();
	await expect(page.getByText("Vitamin K")).toBeVisible();
});
