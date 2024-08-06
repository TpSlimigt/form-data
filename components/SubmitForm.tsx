'use client'

import Button from './Button'
import React, { useState } from 'react'

interface FormData {
  name: string
  company: string
  email: string
  date: string
  participants: string
  categories: string[]
  specialRequest: string
}

export default function SubmitForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    company: '',
    email: '',
    date: '',
    participants: '',
    categories: [],
    specialRequest: '',
  })

  const onSubmit = () => {}

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value.toString() })
    console.log(e.target.value)
  }

  // Handles participants variable
  const minParticipants = 1
  const maxParticipants = 20

  // Clamps the value between min & max variables above
  const handleParticipantsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.valueAsNumber <= minParticipants)
      e.target.valueAsNumber = minParticipants
    else if (e.target.valueAsNumber >= maxParticipants)
      e.target.valueAsNumber = maxParticipants
    formData.participants = e.target.value
  }

  // Stores the highlight state of all the buttons
  const categoriesCount = 8
  const [highlightedCategories, setHighlightedCategories] = useState(
    Array(categoriesCount).fill('white'),
  )

  const onSelected = (i: number, category: string) => {
    // Sets the highlighted color of the button
    const newHighlightedCategories = highlightedCategories.slice()
    if (newHighlightedCategories[i] === 'white')
      newHighlightedCategories[i] = 'blue'
    else newHighlightedCategories[i] = 'white'
    setHighlightedCategories(newHighlightedCategories)

    // Updates the selected categories
    let updatedCategories: string[]
    if (formData.categories.includes(category)) {
      // If category is already selected, remove it
      updatedCategories = formData.categories.filter(
        (item) => item !== category,
      )
    } else {
      // If not, add it
      updatedCategories = [...formData.categories, category]
    }

    // Sort the list
    updatedCategories.sort()

    // Store the data
    setFormData((prevFormData) => ({
      ...prevFormData,
      categories: updatedCategories,
    }))
  }

  return (
    <div className="flex w-full flex-col p-6 pb-8 md:p-12 md:pb-20">
      <div className="max-w-screen-xl self-center">
        <div className="flex flex-col gap-1">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleFormChange}
            required
          ></input>
          <input
            type="text"
            name="company"
            placeholder="Company"
            value={formData.company}
            onChange={handleFormChange}
            required
          ></input>
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleFormChange}
            required
          ></input>
          <input
            type="date"
            name="date"
            placeholder="Time and Date"
            value={formData.date}
            onChange={handleFormChange}
            required
          ></input>
          <input
            type="number"
            name="participants"
            min={minParticipants}
            max={maxParticipants}
            placeholder="Participants"
            onChange={handleParticipantsChange}
            required
          ></input>
          <p className="pt-2">
            Select 1-3 categories that are relevant to your business
          </p>
          <div className="relative grid grid-cols-4">
            <Button
              label="Construction"
              color={highlightedCategories[0]}
              onClick={() => onSelected(0, 'Construction')}
            ></Button>
            <Button
              label="Consumer"
              color={highlightedCategories[1]}
              onClick={() => onSelected(1, 'Consumer')}
            ></Button>
            <Button
              label="Education"
              color={highlightedCategories[2]}
              onClick={() => onSelected(2, 'Education')}
            ></Button>
            <Button
              label="Engineering"
              color={highlightedCategories[3]}
              onClick={() => onSelected(3, 'Engineering')}
            ></Button>
            <Button
              label="Financial"
              color={highlightedCategories[4]}
              onClick={() => onSelected(4, 'Financial')}
            ></Button>
            <Button
              label="Marketing"
              color={highlightedCategories[5]}
              onClick={() => onSelected(5, 'Marketing')}
            ></Button>
            <Button
              label="Technology"
              color={highlightedCategories[6]}
              onClick={() => onSelected(6, 'Technology')}
            ></Button>
            <Button
              label="Tourism"
              color={highlightedCategories[7]}
              onClick={() => onSelected(7, 'Tourism')}
            ></Button>
          </div>
          <input
            type="text"
            name="specialRequest"
            placeholder="Special request"
            value={formData.specialRequest}
            onChange={handleFormChange}
          ></input>
          <div>
            <Button label="Send" color="white" onClick={onSubmit}></Button>
          </div>
          <div className="max-w-sm">
            <p>Selected options: {formData.categories.join(', ')}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
