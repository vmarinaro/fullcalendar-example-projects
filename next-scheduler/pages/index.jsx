import React from 'react'
import FullCalendar from '@fullcalendar/react'
import interactionPlugin from '@fullcalendar/interaction'
import resourceTimelinePlugin from '@fullcalendar/resource-timeline'

export default () => (
  <FullCalendar
    plugins={[interactionPlugin, resourceTimelinePlugin]}
    initialView='resourceTimelineWeek'
    nowIndicator={true}
    editable={true}
    initialEvents={[
      { title: 'nice event', start: new Date(), resourceId: 'a' }
    ]}
    initialResources={[
      { id: 'a', title: 'Auditorium A' },
      { id: 'b', title: 'Auditorium B', eventColor: 'green' },
      { id: 'c', title: 'Auditorium C', eventColor: 'orange' }
    ]}
  />
)
