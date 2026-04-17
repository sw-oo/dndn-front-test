/** \uc608\uc2dc \uc791\uc5c5\uc790 \uc0c1\uc138 \ud504\ub85c\ud544 (\uc628\ubcf4\ub529 / \ucd9c\uc785\uadfc\ud0dc \uc5f0\ub3d9) */

export const workerProfilesById = {
  1: {
    id: 1,
    name: '\uae40\ub3d9\uc11d',
    company: '\ud0dc\uc591\uac74\uc124',
    role: '\uc815\ub3d9\ubaa9\uc218',
    deployStatus: '\ud22c\uc785 \uac00\ub2a5',
    deployStatusVariant: 'ok',
    phone: '010-1234-5678',
    emergency: '010-1111-1111',
    bloodType: 'A+',
    registeredAt: '2025.01.10',
    site: '\uac15\ub0a8\uad6c \uc7ac\uac74\ucd95 A\uacf5\uad6c',
    monthTotalMan: 18.5,
    documents: [
      {
        title: '\uae30\ucd08\uc548\uc804\ubcf4\uac74\uad50\uc721 \uc774\uc218\uc99d',
        status: '\uc774\uc218\uc644\ub8cc',
        statusVariant: 'done',
      },
      {
        title: '\uc2e0\ubd84\uc99d \uc0ac\ubcf8 \ubc0f \ud1b5\uc7a5 \uc0ac\ubcf8',
        status: '\uc644\ub8cc',
        statusVariant: 'done',
      },
    ],
    attendanceRows: [
      {
        date: '2025-10-14',
        clockIn: '06:50',
        clockOut: '17:10',
        manDays: 1.0,
        site: '\uac15\ub0a8 A\uacf5\uad6c',
      },
      {
        date: '2025-10-13',
        clockIn: '06:48',
        clockOut: '17:05',
        manDays: 1.0,
        site: '\uac15\ub0a8 A\uacf5\uad6c',
      },
      {
        date: '2025-10-12',
        clockIn: '06:52',
        clockOut: '17:00',
        manDays: 1.0,
        site: '\uac15\ub0a8 A\uacf5\uad6c',
      },
    ],
    zoneHistory: [
      {
        date: '2025-10-01',
        zone: 'A\uad6c\uc5ed (\uc9c0\ud558\uc8fc\ucc28\uc7a5)',
        note: '\ud615\ud2c0 \ubc18',
      },
      { date: '2025-09-15', zone: 'B\uad6c\uc5ed (\uc5c5\ubb34\ub3d9)', note: '\ub3c4\uc6d0' },
    ],
    sanctions: [
      {
        date: '2025-08-20',
        type: '\uc8fc\uc758',
        description: '\uc548\uc804\ubaa8 \ubbf8\ucc29\uc6a9 1\ud68c',
      },
    ],
  },
  2: {
    id: 2,
    name: '\uc774\ubaa9\uc218',
    company: '\uc778\ub825\uc0ac\ubb34\uc18c',
    role: '\uc77c\uc6a9',
    deployStatus: '\ud22c\uc785 \uac80\ud1a0',
    deployStatusVariant: 'warn',
    phone: '010-8888-7777',
    emergency: '010-7777-6666',
    bloodType: 'O+',
    registeredAt: '2025.03.02',
    site: '\uac15\ub0a8\uad6c \uc7ac\uac74\ucd95 A\uacf5\uad6c',
    monthTotalMan: 14.0,
    documents: [
      {
        title: '\uae30\ucd08\uc548\uc804\ubcf4\uac74\uad50\uc721 \uc774\uc218\uc99d',
        status: '\uc774\uc218\uc644\ub8cc',
        statusVariant: 'done',
      },
      {
        title: '\uac1c\uc778\uc815\ubcf4\ub3d9\uc758 \uc11c\uc57d',
        status: '\uc81c\ucd9c \ub300\uae30',
        statusVariant: 'pending',
      },
    ],
    attendanceRows: [
      {
        date: '2025-10-14',
        clockIn: '07:05',
        clockOut: '-',
        manDays: 0,
        site: '\uac15\ub0a8 A\uacf5\uad6c',
      },
      {
        date: '2025-10-13',
        clockIn: '07:00',
        clockOut: '17:15',
        manDays: 1.0,
        site: '\uac15\ub0a8 A\uacf5\uad6c',
      },
    ],
    zoneHistory: [{ date: '2025-10-01', zone: 'C\uad6c\uc5ed', note: '\uc784\uc2dc' }],
    sanctions: [],
  },
  3: {
    id: 3,
    name: '\ubc15\ubc18\uc7a5',
    company: '\ubcf8\uc0ac',
    role: '\ud604\uc7a5 \uad00\ub9ac',
    deployStatus: '\ud22c\uc785 \uc81c\ud55c',
    deployStatusVariant: 'block',
    phone: '010-5555-4444',
    emergency: '010-4444-3333',
    bloodType: 'B+',
    registeredAt: '2024.11.20',
    site: '\ud310\uad50 \ub370\uc774\ud130\uc13c\ud130',
    monthTotalMan: 10.5,
    documents: [
      {
        title: '\uae30\ucd08\uc548\uc804\ubcf4\uac74\uad50\uc721 \uc774\uc218\uc99d',
        status: '\uc774\uc218\uc644\ub8cc',
        statusVariant: 'done',
      },
    ],
    attendanceRows: [
      {
        date: '2025-10-14',
        clockIn: '06:45',
        clockOut: '16:00',
        manDays: 0.5,
        site: '\ud310\uad50 DC',
      },
      { date: '2025-10-13', clockIn: '-', clockOut: '-', manDays: 0, site: '-' },
    ],
    zoneHistory: [{ date: '2025-09-01', zone: '\uc5c5\ubb34\ub3d9', note: '\uc804\uc0ac' }],
    sanctions: [
      { date: '2025-09-10', type: '\uc81c\uc7ac', description: '\ubb34\ub2e8\uc18d\uc9c1 3\uc77c' },
    ],
  },
  4: {
    id: 4,
    name: '\ucd5c\uc6a9\ud638',
    company: '\ud0dc\uc591\uac74\uc124',
    role: '\ube44\uacc4\uacf5',
    deployStatus: '\ud22c\uc785 \uc81c\ud55c',
    deployStatusVariant: 'block',
    phone: '010-1111-2222',
    emergency: '010-2222-3333',
    bloodType: 'AB+',
    registeredAt: '2025.02.01',
    site: '\uac15\ub0a8\uad6c \uc7ac\uac74\ucd95 A\uacf5\uad6c',
    monthTotalMan: 12.0,
    documents: [
      {
        title: '\uae30\ucd08\uc548\uc804\ubcf4\uac74\uad50\uc721 \uc774\uc218\uc99d',
        status: '\uc774\uc218\uc644\ub8cc',
        statusVariant: 'done',
      },
      {
        title: '\uc2e0\ubd84\uc99d \uc0ac\ubcf8',
        status: '\uc644\ub8cc',
        statusVariant: 'done',
      },
    ],
    attendanceRows: [
      {
        date: '2025-10-14',
        clockIn: '06:55',
        clockOut: '17:00',
        manDays: 1.0,
        site: '\uac15\ub0a8 A\uacf5\uad6c',
      },
    ],
    zoneHistory: [{ date: '2025-10-05', zone: '\uc678\ubd80 \ube44\uacc4', note: '\uc77c\uc77c' }],
    sanctions: [{ date: '2025-10-01', type: '\uc8fc\uc758', description: '\ud22c\uc785 \uc81c\ud55c \uc0c1\ud0dc' }],
  },
}

export function getWorkerProfile(id) {
  const n = Number(id)
  return workerProfilesById[n] || null
}
