// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use crate::{
  window::{set_window_shadow}
};

mod window;

fn main() {
  tauri::Builder::default()
    .setup(|app| {
      set_window_shadow(app);
      Ok(())
    })
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}
