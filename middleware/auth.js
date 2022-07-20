export default async function ({ $auth,  redirect }) {
    let user = $auth.user;
  if (user) {
    redirect('/user')
  }
  else{
    redirect('/login')
  }

}