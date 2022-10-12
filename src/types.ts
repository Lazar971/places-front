
export interface Place {
  id: string,
  name: string,
  address: string,
  open: boolean,
  workingHours: {
    [key: string]: WorkingHoursSlot[]
  }
}

export interface WorkingHoursSlot {
  start: string,
  end: string
}