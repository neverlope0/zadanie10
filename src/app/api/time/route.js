export async function GET() {
  const data = {
    timestamp: new Date().toISOString(),
    serverTime: new Date().toLocaleTimeString(),
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone
  }

  return Response.json(data)
}
