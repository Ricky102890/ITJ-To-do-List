//!! Same Task overwritten and task element still created

function submitForm() {
    const signupSubmit = document.getElementById('signupSubmitBtn');
    const loadingWrapper = document.getElementById('loadingWrapper');
    signupSubmit.addEventListener('click', () => {
        loadingWrapper.style.display = 'block'
        setTimeout(() => {
            location.href = '/account-success.html';
            loadingWrapper.style.display = 'none';
            let accountHolder = {
            firstName: '',
            lastName: '',
            email: '',
            }
    const fName = document.getElementById('acctFName');
    const lName = document.getElementById('acctLName');
    const email = document.getElementById('acctEmail');
    const accountWelcomeMsg = document.getElementById('accountWelcomeMsg');

    accountHolder.firstName = fName.value;
    accountHolder.firstName = lName.value;
    accountHolder.firstName = email.value;
    accountWelcomeMsg.innerHTML = `You are all set!, ${accountHolder.firstName} ${accountHolder.lastName} you have successfully created an account!`;
        },6000)
    });
    
}
submitForm();
function expandSignupForm() {
    const signupBtn = document.getElementById('signupBtnExpand');
    const signupForm = document.getElementById('signupForm');

    document.addEventListener('click', (e) => {
        if (e.target == signupBtn) {
            signupForm.style.display = 'block';
        }
        else if (e.target !== signupForm && !signupForm.contains(e.target)) {
            signupForm.style.display = 'none';
        }
    });
}
expandSignupForm();
function addItem() {

    let agendaInputText = document.getElementById('agendaInput');
    let outputText = document.querySelector('.output-text');
    const outputParent = document.querySelector('.output');
    
    if (agendaInputText.value.length > 2) {
        let outputChild = document.createElement('li');
        outputChild.classList.add('output-item');
        outputChild.innerHTML = `
        <input class="output-text" readonly>
        <ul class="output-actions">
        <li><button class="output-action-btn" id="#">EDIT <span><img src="#" alt="Action Btn ?"></span></button></li>
        <li><button class="output-action-btn" id="#">CLONE <span><img src="#" alt="Action Btn ?"></span></button></li>
        <li><button class="output-action-btn" id="#">DEL <span><img src="#" alt="Action Btn ?"></span></button></li>
        <li><button class="output-action-btn" id="#">UP <span><img src="#" alt="Action Btn ?"></span></button></li>
        <li><button class="output-action-btn" id="#">DOWN <span><img src="#" alt="Action Btn ?"></span></button></li>
        </ul>`
        ;
        outputParent.appendChild(outputChild);
        outputText.value = agendaInputText.value;
        agendaInputText.value = '';
    }
    else {
        setInterval( () => {
            const inputSection = document.querySelector('.input-section');
            if (agendaInputText.value) {
                inputSection.classList.remove("warning");
            }
            else {
                inputSection.classList.add("warning");
                }
            },2000);
            
    }
}

