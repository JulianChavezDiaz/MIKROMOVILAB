<template>
    <div class="p-4">
      <div class="flex justify-between items-center mb-4">
        <h1 class="text-2xl font-bold">Edit Profile</h1>
      </div>
      <div class="flex flex-col md:flex-row">
        <aside class="w-full md:w-1/4 mb-4 md:mb-0">
          <nav>
            <ul>
              <li class="mb-2"><a href="#" class="block p-2 bg-gray-100 rounded">Edit Profile</a></li>
              <li class="mb-2"><a href="#" class="block p-2">Notifications</a></li>
              <li class="mb-2"><a href="#" class="block p-2">Choose Plan</a></li>
              <li class="mb-2"><a href="#" class="block p-2">Password & Security</a></li>
            </ul>
          </nav>
        </aside>
        <main class="w-full md:w-3/4 bg-white p-4 rounded shadow-md">
          <form @submit.prevent="saveProfile">
            <div class="flex items-center justify-center mb-4">
              <img src="https://via.placeholder.com/100" alt="Profile Picture" class="rounded-full h-24 w-24 object-cover">
              <button type="button" class="bg-blue-500 text-white p-2 rounded-full ml-4">✏️</button>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label for="firstName" class="block">First Name</label>
                <input v-model="user.firstName" id="firstName" type="text" class="border rounded w-full py-2 px-3">
              </div>
              <div>
                <label for="lastName" class="block">Last Name</label>
                <input v-model="user.lastName" id="lastName" type="text" class="border rounded w-full py-2 px-3">
              </div>
              <div>
                <label for="email" class="block">Email</label>
                <input v-model="user.email" id="email" type="email" class="border rounded w-full py-2 px-3">
              </div>
              <div>
                <label for="contactNumber" class="block">Contacts Number</label>
                <input v-model="user.contactNumber" id="contactNumber" type="text" class="border rounded w-full py-2 px-3">
              </div>
              <div>
                <label for="address" class="block">Address</label>
                <input v-model="user.address" id="address" type="text" class="border rounded w-full py-2 px-3">
              </div>
              <div>
                <label for="city" class="block">City</label>
                <input v-model="user.city" id="city" type="text" class="border rounded w-full py-2 px-3">
              </div>
              <div>
                <label for="state" class="block">State</label>
                <input v-model="user.state" id="state" type="text" class="border rounded w-full py-2 px-3">
              </div>
              <div>
                <label for="zipCode" class="block">Zip code</label>
                <input v-model="user.zipCode" id="zipCode" type="text" class="border rounded w-full py-2 px-3">
              </div>
              <div>
                <label for="country" class="block">Country</label>
                <input v-model="user.country" id="country" type="text" class="border rounded w-full py-2 px-3">
              </div>
              <div>
                <label for="password" class="block">Password</label>
                <input v-model="user.password" id="password" type="password" class="border rounded w-full py-2 px-3">
              </div>
            </div>
            <div class="flex justify-end mt-4">
              <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded">Save</button>
            </div>
          </form>
        </main>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        user: {
          firstName: 'Thomas D.',
          lastName: 'Hardison',
          email: 'thomashardison@dayrep.com',
          contactNumber: '661-724-7734',
          address: '1368 Hayhurst Lane',
          city: 'Mcallen',
          state: 'New York',
          zipCode: '11357',
          country: 'United States',
          password: '********'
        }
      }
    },
    methods: {
      saveProfile() {
        console.log('Profile saved', this.user);
      }
    }
  }
  </script>
  
  <style scoped>
  aside nav ul li a {
    color: #4A5568;
    text-decoration: none;
  }
  aside nav ul li a:hover {
    background-color: #E2E8F0;
  }
  </style>
  