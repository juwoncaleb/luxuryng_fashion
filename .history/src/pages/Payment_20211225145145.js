function Payment() {
    return (
        <div>
            
            <div class="form">
                    <div class="title">Welcome</div>
                    <div class="subtitle">Let's create your account!</div>
                    <div class="input-container ic1">
                        <input id="firstname" class="input" type="text" placeholder="Name" />
                        <div class="cut"></div>
                        <label for="firstname" class="placeholder">First name</label>
                    </div>
                    <div class="input-container ic2">
                        <input id="lastname" class="input" type="text" placeholder="email address" />
                        <div class="cut"></div>
                        <label for="lastname" class="placeholder">Last name</label>
                    </div>
                    <div class="input-container ic2">
                        <input id="email" class="input" type="text" placeholder="phone number" />
                        <div class="cut cut-short"></div>

                        <label for="email" class="placeholder">Email</ label>
                    </div>
                    <div class="input-container ic2">
                        <input id="lastname" class="input" type="text" placeholder="CART ITEMS" />
                        <div class="cut"></div>
                        <label for="lastname" class="placeholder">Last name</label>
                    </div>
                    
                    <button type="text" class="submit">submit</button>
                </div>
        </div>
    )
}

export default Payment
