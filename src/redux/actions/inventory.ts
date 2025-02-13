import { createAsyncThunk } from "@reduxjs/toolkit"

export const fetchInventoryData = createAsyncThunk(
    'inventory/fetchInventoryData',
    async () => {
      const response = await fetch('https://dev-0tf0hinghgjl39z.api.raw-labs.com/inventory')
      return response.json()
    },
  )