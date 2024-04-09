use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn exclude_lines(input: String, excluded_word: String) -> String {
    input.lines()
         .filter(|&line| !line.contains(&excluded_word))
         .collect::<Vec<_>>()
         .join("\r\n") 
}

#[wasm_bindgen]
pub fn separate_lines(input: &str, indent_str: &str) -> String {
    let parts: Vec<&str> = input.split(indent_str).collect();

    if parts.len() > 1 {
        let mut result = String::from(parts[0]); 
        for part in parts.into_iter().skip(1) {
            result.push_str(&format!("{}{}{}", indent_str, "\r\n", part));
        }
        result
    } else {
        input.to_string()
    }
}
