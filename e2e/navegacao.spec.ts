
import { test, expect } from '@playwright/test'

test('abre a página inicial do AgroStore', async ({ page }) => {
  await page.goto('/')

  await expect(page.locator('body')).toBeVisible()
  await expect(page.locator('body')).not.toBeEmpty()
})

test('permite acessar a página de produtos', async ({ page }) => {
  await page.goto('/produtos')

  await expect(page.locator('body')).toBeVisible()
  await expect(page.locator('body')).not.toBeEmpty()
})
