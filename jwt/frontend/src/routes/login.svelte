<script>
async function handleLogin(event) {
	console.log("Pressed Login")
	console.log(event)
	console.log(event.target)
	console.log(event.target.username)
	console.log(event.target.password)
}
</script>

<form on:submit|preventDefault="{handleLogin}">
  <div>
    <label for="username">Username</label>
    <input required type="string" id="username" >
  </div>
  <div>
    <label for="password">Password</label>
    <input required type="password" id="password" >
  </div>
  
  <button type="submit">Login</button>
</form>

