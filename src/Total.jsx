export function Total({amount,tip}){{
   
    
    
    return (
      <>
        <p
          style={{
            color: "#fff",
            fontSize: "16px",
            paddingTop: "5px",
            paddingLeft: "10px",
            paddingBottom: "5px",
            borderRadius: "20px",
            letterSpacing: "1.2px",
            boxShadow: "0px 0px 10px #0b0808",
            wordSpacing: "2px",
            fontWeight: "600",
            fontFamily: "monospace",
          }}
        >
          💲Your total amount is ₹{amount + tip}{" "}
          <span
            style={{
              backgroundColor: "#fff",
              borderRadius: "20px",
              color: "#444",
              padding: "10px",
              boxShadow: "0px 0px 10px  #0b0808",
            }}
          >
            (Bill ₹{amount}+Tip ₹{tip})
          </span>
        </p>
      </>
    );
}}