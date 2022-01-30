function TestPayment() {
    const publicKey = "pk_your_public_key_here"
    const amount = 1000000 // Remember, set in kobo!
    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    return (
        <div>
            <butto>pay</butto>
        </div>
    )
}

export default TestPayment
