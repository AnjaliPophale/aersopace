

const navbar = document.getElementById("navbar");
let lastScrollTop = 0;

// ✅ Ensure correct class on initial load
window.addEventListener("DOMContentLoaded", () => {
  if (window.scrollY === 0) {
    navbar.classList.add("transparent");
    navbar.classList.remove("solid", "hidden");
  }
});

window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;

  if (scrollTop === 0) {
    navbar.classList.add("transparent");
    navbar.classList.remove("solid", "hidden");
  } else {
    if (scrollTop > lastScrollTop) {
      // Scrolling down
      navbar.classList.add("hidden");
    } else {
      // Scrolling up
      navbar.classList.remove("hidden");
      navbar.classList.remove("transparent");
      navbar.classList.add("solid");
    }
  }

  lastScrollTop = scrollTop;
});


var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  effect: "fade",
  loop: true,
  autoplay: {
    delay: 15000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});


function toggleMegaMenu(event) {
  if (window.innerWidth < 992) {
    event.preventDefault();
    const megaMenu = event.currentTarget.nextElementSibling;
    megaMenu.classList.toggle('show');
    const plusIcon = event.currentTarget.querySelector('span');
    plusIcon.textContent = megaMenu.classList.contains('show') ? '-' : '+';
  }
}

function toggleAccordion(header) {
  if (window.innerWidth < 992) {
    const ul = header.nextElementSibling;
    if (!ul) return; // Guard clause if ul doesn't exist

    const isActive = header.classList.contains('active');

    // Close all other accordions in the same mega-menu
    const parentMegaMenu = header.closest('.mega-menu');
    const allHeaders = parentMegaMenu.querySelectorAll('h4');
    const allUls = parentMegaMenu.querySelectorAll('ul');

    allHeaders.forEach(h => h.classList.remove('active'));
    allUls.forEach(u => u.classList.remove('active'));

    if (!isActive) {
      header.classList.add('active');
      ul.classList.add('active');
    }
  }
}

function openPopup() {
  document.getElementById("popupOverlay").style.display = "flex";
}

function closePopup() {
  document.getElementById("popupOverlay").style.display = "none";
}

window.onclick = function (event) {
  const popup = document.getElementById("popupOverlay");
  if (event.target == popup) {
    popup.style.display = "none";
  }
}
// preload in after page reload
// window.addEventListener("load", function () {
//   const preloader = document.getElementById("preloader");
//   setTimeout(() => {
//     preloader.classList.add("fade-out");
//     document.querySelector(".main-content").style.display = "block";
//   }, 1400); 
// });


//lenis js 
// Initialize Lenis
const lenis = new Lenis({
  autoRaf: true,
});

// Listen for the scroll event and log the event data
lenis.on('scroll', (e) => {
  console.log(e);
});

window.addEventListener('scroll', function() {
  var btn = document.getElementById('backToTopBtn');
  if (window.scrollY > 200) {
      btn.style.display = 'block';
  } else {
      btn.style.display = 'none';
  }
});

// Scroll to top on click
document.getElementById('backToTopBtn').addEventListener('click', function() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// <!-----------------------------------------------------------Send Mail Start----------------------------------------------------------->




    document.getElementById('ApplyNow').addEventListener('submit', function (e) {
        debugger
            e.preventDefault();
           

            const form = document.getElementById('ApplyNow');
            const messageDiv = document.getElementById('message');
            const errorDiv = document.getElementById('error');

           
            if (!form || !messageDiv || !errorDiv) {
                console.error('Form or message/error div not found');
                errorDiv.textContent = 'Form or message/error div not found.';
                return;
            }

          
            const fullNameInput = document.getElementById('fullName');
            const emailInput = document.getElementById('email');
            const phoneInput = document.getElementById('phone');
            const educationInput = document.getElementById('education');
            const coverLetterInput = document.getElementById('coverLetter');
            const resumeInput = document.getElementById('resume');
            const forPositionInput = document.querySelector('.job-header h2');
            const jobTitle = forPositionInput ? forPositionInput.textContent : 'Unknown Job Title';

            if (!fullNameInput || !emailInput || !phoneInput || !educationInput ||
                !coverLetterInput || !resumeInput) {
                errorDiv.textContent = 'One or more form fields are missing.';
                console.error('Missing form fields');
                return;
            }

           

            const fullName = fullNameInput.value || '';
            const email = emailInput.value || '';
            const phone = phoneInput.value || '';
            const education = educationInput.value || '';
            const coverLetter = coverLetterInput.value || '';
            const resume = resumeInput.files[0];
            const forPosition = jobTitle || '';
            messageDiv.textContent = '';
            errorDiv.textContent = '';

           
            if (!fullName || !email || !resume) {
                errorDiv.textContent = 'Please fill all required fields (Full Name, Email, Resume).';
                console.error('Required fields missing:', { fullName, email, resume });
                return;
            }

          
            if (resume) {
                console.log('Resume file:', resume.name, resume.size, resume.type);
                const allowedTypes = [
                    'application/pdf',
                    'application/msword',
                    'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
                ];
                const allowedExtensions = ['.pdf', '.doc', '.docx'];
                const fileExtension = resume.name.substring(resume.name.lastIndexOf('.')).toLowerCase();
                if (!allowedTypes.includes(resume.type) || !allowedExtensions.includes(fileExtension)) {
                    errorDiv.textContent = 'Invalid file type. Please upload a PDF, DOC, or DOCX file.';
                    console.error('Invalid file type:', resume.type, fileExtension);
                    return;
                }
            } else {
                errorDiv.textContent = 'Please upload a resume file.';
                console.error('No resume file selected');
                return;
            }
            const formData = new FormData();
            formData.append('fullName', fullName);
            formData.append('email', email);
            formData.append('phoneno', phone);
            formData.append('education', education);
            formData.append('forPosition', forPosition);
            formData.append('resume', resume);
            formData.append('coverLetter', coverLetter);
            //formData.append('subject', 'Resume Submission');
            //formData.append('htmlContent', `<p>Hello ${fullName},</p><p>Thank you for submitting your resume.</p><p>Your education: ${education}</p><p>Your cover letter: ${coverLetter}</p><p>Contact: ${phone}, ${email}</p>`);

        //const url = 'http://115.124.123.180:8097/api/mail';
            const url = 'https://api.jkmaini.com/api/mail';
            
            fetch(url, {
                method: 'POST',
                body: formData
            })


                .then(response => {
                    console.log('Response status:', response.status);
                    console.log('Response ok:', response.ok);
                    console.log([...response.headers.entries()]);
                    return Promise.all(['Application submitted successfully.']);
                })
                .then((text, ok, status) => {
                    let data = {};
                    try {
                        data = JSON.parse(text);
                    } catch (e) {
                        data = { error: text || 'Invalid response from server', rawText: text };
                    }
                    console.log('Response data:', data);
                    // Check for success indicators even if status is not 200-299
                    const isSuccess = ok || 
                        (data && (
                            (typeof data.message === 'string' && data.message.toLowerCase().includes('success')) ||
                            (typeof data.status === 'string' && data.status.toLowerCase().includes('success')) ||
                            (typeof data.rawText === 'string' && (
                                data.rawText.toLowerCase().includes('success') ||
                                data.rawText.toLowerCase().includes('sent')
                            ))
                        ));
                    if (isSuccess) {
                        messageDiv.textContent = data.message || data.rawText || 'Application submitted successfully.';
                    } else {
                        errorDiv.textContent = data.error || data.message || data.rawText || `Failed to send resume (Status: ${status || 'unknown'}).`;
                        console.error('API error:', data);
                    }
                    return { data, ok, status };
                })

                .catch(error => {
                    console.error('Fetch error:', error);
                    errorDiv.textContent = `Error: ${error.message}`;
                })
                .finally(() => {
                    form.reset();
                    console.log('Form cleared');
                });
        });


// the js code for email SMtp integration for enquiry form


function customEncodeURI(str) {
  return str.replace(/[@]/g, '%40')
            .replace(/[:]/g, '%3A')
            .replace(/[?]/g, '%3F')
            .replace(/[/]/g, '%2F')
            .replace(/[#]/g, '%23')
            .replace(/[&]/g, '%26')
            .replace(/[=]/g, '%3D')
            .replace(/[+]/g, '%2B')
            .replace(/[ ]/g, '%20');
}

document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  console.log('Form submitted');
  const toEmail = document.getElementById('EmailAddress').value;
  const firstname = document.getElementById('FirstName').value;
  const lastname = document.getElementById('LastName').value;
  const company = document.getElementById('Company').value;
  const phoneno = document.getElementById('PhoneNo').value;
  const industry = document.getElementById('Industry').value;
  const email = document.getElementById('EmailAddress').value; // Same as toEmail
  const inquiry = document.getElementById('Inquiry').value;
  const subject = "";
  const htmlContent ="";
  const messageDiv = document.getElementById('message');
  const errorDiv = document.getElementById('error');

  messageDiv.textContent = '';
  errorDiv.textContent = '';

  //const url = 'http://172.21.4.191:80/api/email/sendemail?toEmail=' + customEncodeURI(toEmail) + //testing 

  const url = 'https://api.jkmaini.com/api/email/sendemail?firstname=' + customEncodeURI(firstname) +
              '&lastname=' + customEncodeURI(lastname) +
              '&company=' + customEncodeURI(company) +
              '&phoneno=' + customEncodeURI(phoneno) +
              '&industry=' + customEncodeURI(industry) +
              '&email=' + customEncodeURI(email) +
              '&inquiry=' + customEncodeURI(inquiry);

  console.log('URL:', url);
  console.log('Payload:', JSON.stringify({ subject, htmlContent }));
  // For proxy: fetch('/api/email/sendemail?toEmail=' + customEncodeURI(toEmail) + '&firstname=' + customEncodeURI(firstname) + '&lastname=' + customEncodeURI(lastname) + '&company=' + customEncodeURI(company) + '&phoneno=' + customEncodeURI(phoneno) + '&industry=' + customEncodeURI(industry) + '&email=' + customEncodeURI(email) + '&inquiry=' + customEncodeURI(inquiry), {
  fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ subject, htmlContent })
      // If API supports plain-text:
      // body: JSON.stringify({ subject, htmlContent, textContent: `Hello ${firstname}! Thank you for your inquiry about ${company} services. Visit us at https://probus.co.in. To unsubscribe, visit https://probus.co.in/unsubscribe. Probus, 123 Business Street, City, Country` })
  })
      .then(function(response) {
          console.log('Response status:', response.status);
          return Promise.all([response.json(), response.ok, response.status]);
      })
      .then(function(jsonData, ok, status) {
          console.log('Response data:', jsonData);
          if (ok) {
              messageDiv.textContent = jsonData.message || 'Application submitted successfully.';
          } else {
              errorDiv.textContent = jsonData.error || 'Application submitted successfully.';
          }
      })
      .catch(function(error) {
          console.error('Fetch error:', error);
          errorDiv.textContent = `Error: ${error.message}`;
      })
      .finally(function() {
          document.getElementById('contact-form').reset();
          console.log('Form cleared');
      });
// Close the popup after successful submission
// const popupOverlay = document.getElementById('popupOverlay');
// if (popupOverlay) {
//   popupOverlay.style.display = 'none';
// }
});
