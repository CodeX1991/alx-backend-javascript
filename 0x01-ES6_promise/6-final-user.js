// Import the necessary functions
import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

// Define and export the handleProfileSignup function
export default async function handleProfileSignup(firstName, lastName, fileName) {
  // Call the two functions and store the promises
  const signUpPromise = signUpUser(firstName, lastName);
  const uploadPhotoPromise = uploadPhoto(fileName);

  // Wait for all promises to settle
  const results = await Promise.allSettled([signUpPromise, uploadPhotoPromise]);

  // Map the results to the desired structure
  return results.map((result) => ({
    status: result.status,
    value: result.status === 'fulfilled' ? result.value : result.reason,
  }));
}
