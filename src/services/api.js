export const fetchColumns = async () => {
    const response = await fetch('/api/columns');
    if(!response.ok){
        throw new Error('Error fetching columns');
    }   
    return response.json();
}

export const addTask = async (task) => {
    const response = await fetch('/api/tasks', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(task),
    });
    if (!response.ok) {
      throw new Error('Failed to add task');
    }
    return response.json();
};