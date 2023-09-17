import { test, expect } from '@playwright/test'

test('测试 label 内置', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('http://localhost:7130/pc/date-picker/label-inside')
})
