/**
 * @author Kelvin Kinyoro on 21/11/2024
 */

import {test, expect} from "@playwright/test";


test("home page a logo", async ({page}) => {
    await page.goto("http://localhost:3000/")
    const logo = page.getByAltText('Vercel Logo')

    await expect(logo).toBeVisible()
})