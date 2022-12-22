use actix_web::{get, post, web, App, HttpResponse, HttpServer, Responder, HttpResponseBuilder};
use std::sync::{Mutex, MutexGuard};

const PORT: u32 = 8080;

struct AppState {
  amount_of_people_visting: Mutex<i32>
}


async fn react_router(app_data: web::Data<AppState>) -> impl Responder{
  let mut counter: MutexGuard<i32> = app_data.amount_of_people_visting.lock().unwrap();
  *counter += 1;

  HttpResponse::Ok().body(format!("
  <html>
    <body>
      <h1>Cool kid</h1>
      <h2>You are the {:?} person to visit this site</h2>
    </body>
  </html>
  ", counter))
}

#[actix_web::main]
async fn main() -> std::io::Result<()> {
  let state = web::Data::new(AppState {
    amount_of_people_visting: Mutex::new(0)
  });

  println!("Server is Starting On {:?}", PORT);

  return HttpServer::new(move || {
    App::new()
      .app_data(state.clone())
      .route("/", web::get().to(react_router))
      .route("/{any_route}", web::get().to(react_router))
  })
  .bind(format!("127.0.0.1:{:?}", PORT))
  .expect("Failed to bind")
  .run()
  .await;

}
