import { useApi } from './use-api';

/**
 * Hook to fetch a collection and find a specific item by ID.
 * Abstracts the "fetch all & find locally" pattern used due to API limitations.
 * 
 * @param {string} endpoint - The API endpoint to fetch the collection from (e.g., 'characters', 'tablets')
 * @param {string|number} id - The ID of the item to find
 * @returns {Object} - { item, loading, error }
 */
export function useItem(endpoint, id) {
  const { data, loading, error } = useApi(endpoint);
  
  // Find the specific item from the list
  // String conversion ensures fuzzy matching (e.g. "1" vs 1)
  const item = data ? data.find((i) => String(i.id) === String(id)) : null;

  return { item, loading, error };
}
