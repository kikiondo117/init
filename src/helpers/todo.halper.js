const baseUrl = process.env.REACT_APP_BASE_URL;

async function addTaskHelper(name) {
  const res = await fetch(baseUrl,
    {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name: name, isComplete: false }),
    })
  const task = await res.json()
  return task
}

async function getAllTasks() {
  const res = await fetch(baseUrl)
  const allTasks = await res.json()

  return allTasks
}


export default {
  addTaskHelper,
  getAllTasks
}
