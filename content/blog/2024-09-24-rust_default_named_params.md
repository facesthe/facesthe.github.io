+++
title = "Default and named parameters for Rust"

[taxonomies]
tags = ["rust", "macros"]

[extra]
toc = true

# description = "My journey in creating a macro library"
+++

Hello world bismillah

## Some subheading

asdkamds alskdmasd alsdkmas

```rust
#[proc_macro_attribute]
pub fn defamed(attrs: pm::TokenStream, input: pm::TokenStream) -> pm::TokenStream {
    // let package_name =
    //     std::env::var("CARGO_PKG_NAME").expect("every crate must have a package name");

    let fn_path = match attrs.is_empty() {
        true => None,
        false => {
            // asd
            let ex: syn::Expr = syn::parse_macro_input!(attrs);

            if let syn::Expr::Path(syn::ExprPath { path, .. }) = &ex {
                // if let syn::Expr::Path(p) = expr.as_ref() {
                Some(path.clone())

                // } else {
            } else {
                return syn::Error::new(ex.span(), "Expected path expression")
                    .to_compile_error()
                    .into();
            }
        }
    };

    let res = match syn::parse::<syn::ItemFn>(input.clone()) {
        Ok(input) => block_logic::item_fn(input, fn_path),
        Err(e) => e.to_compile_error().into(),
    };

    res.into()
}
```
