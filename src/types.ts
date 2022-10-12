
export type Place = {
  id: string,
  name: string,
  address: string,
  workingHours: {
    [key: string]: WorkingHoursSlot[]
  }
} & (OpenPlace | ClosedPlace)

export type OpenPlace = {
  open: true,
  closingTime: string
}

export type ClosedPlace = {
  open: false,
  openingTime?: string
}

export interface WorkingHoursSlot {
  start: string,
  end: string
}