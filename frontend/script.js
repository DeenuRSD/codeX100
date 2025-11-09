// Update these placeholders with your free EmailJS credentials so submissions
// automatically email redwingsstech@gmail.com. Sign up at https://www.emailjs.com/
// and create a service + template, then paste the IDs below.
const EMAILJS_CONFIG = {
  serviceId: 'your_service_id',
  templateId: 'your_template_id',
  publicKey: 'your_public_key'
};

document.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.getElementById('mobile-nav-toggle');
  const navLinks = document.getElementById('nav-links');
  const yearSpan = document.getElementById('year');
  const appointmentForm = document.getElementById('appointment-form');
  const dateInput = document.getElementById('appointment-date');
  const timeInput = document.getElementById('appointment-time');
  const statusBox = document.getElementById('form-status');

  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  if (navToggle) {
    navToggle.addEventListener('click', () => {
      navLinks.classList.toggle('open');
      const icon = navToggle.querySelector('i');
      if (!icon) return;
      icon.classList.toggle('fa-bars');
      icon.classList.toggle('fa-times');
    });
  }

  navLinks?.querySelectorAll('a').forEach((link) =>
    link.addEventListener('click', () => {
      if (!navLinks.classList.contains('open')) return;
      navLinks.classList.remove('open');
      const icon = navToggle?.querySelector('i');
      icon?.classList.add('fa-bars');
      icon?.classList.remove('fa-times');
    })
  );

  constrainDateInput(dateInput);

  dateInput?.addEventListener('change', () => validateDate(dateInput, statusBox));
  timeInput?.addEventListener('change', () => validateTime(timeInput, statusBox));

  if (appointmentForm) {
    appointmentForm.addEventListener('submit', async (event) => {
      event.preventDefault();
      hideStatus(statusBox);

      if (!validateDate(dateInput, statusBox) || !validateTime(timeInput, statusBox)) {
        return;
      }

      if (!appointmentForm.reportValidity()) {
        return;
      }

      const formData = collectFormData(appointmentForm);

      try {
        await sendAppointmentEmail(formData);
        await generateAppointmentPdf(formData);
        appointmentForm.reset();
        constrainDateInput(dateInput);
        showStatus(statusBox, 'success', 'Thank you! Your meeting request has been sent and a PDF confirmation was downloaded.');
      } catch (error) {
        console.error(error);
        showStatus(statusBox, 'error', error.message || 'Something went wrong. Please try again or email redwingsstech@gmail.com.');
      }
    });
  }
});

function collectFormData(form) {
  const formData = new FormData(form);
  const getValue = (key) => {
    const value = formData.get(key);
    return typeof value === 'string' ? value.trim() : '';
  };
  return {
    clientName: getValue('clientName'),
    clientEmail: getValue('clientEmail'),
    clientPhone: getValue('clientPhone'),
    service: getValue('service'),
    appointmentDate: formData.get('appointmentDate') || '',
    appointmentTime: formData.get('appointmentTime') || '',
    projectNotes: getValue('projectNotes')
  };
}

function constrainDateInput(dateInput) {
  if (!dateInput) return;
  const today = new Date();
  const offsetDate = today.toISOString().split('T')[0];
  dateInput.min = offsetDate;
}

function validateDate(dateInput, statusBox) {
  if (!dateInput) return true;
  const value = dateInput.value;
  if (!value) {
    showStatus(statusBox, 'error', 'Please choose a meeting date between Monday and Friday.');
    return false;
  }

  const selectedDate = new Date(value + 'T00:00:00');
  const day = selectedDate.getUTCDay();
  if (day === 0 || day === 6) {
    showStatus(statusBox, 'error', 'Weekend bookings are unavailable. Please select a weekday.');
    dateInput.value = '';
    return false;
  }

  hideStatus(statusBox);
  return true;
}

function validateTime(timeInput, statusBox) {
  if (!timeInput) return true;
  const value = timeInput.value;
  if (!value) {
    showStatus(statusBox, 'error', 'Please choose an appointment time between 10:00 and 16:00.');
    return false;
  }

  const [hours, minutes] = value.split(':').map(Number);
  const totalMinutes = hours * 60 + minutes;
  const start = 10 * 60;
  const end = 16 * 60;

  if (totalMinutes < start || totalMinutes > end) {
    showStatus(statusBox, 'error', 'Meetings are available Monday to Friday, 10:00 AM to 4:00 PM only.');
    timeInput.value = '';
    return false;
  }

  hideStatus(statusBox);
  return true;
}

async function sendAppointmentEmail(formData) {
  if (!window.emailjs) {
    throw new Error('Email service is unavailable. Please refresh the page or email redwingsstech@gmail.com directly.');
  }

  const { serviceId, templateId, publicKey } = EMAILJS_CONFIG;

  if (serviceId === 'your_service_id' || templateId === 'your_template_id' || publicKey === 'your_public_key') {
    throw new Error('EmailJS is not configured yet. Update EMAILJS_CONFIG in script.js with your service ID, template ID, and public key.');
  }

  emailjs.init(publicKey);

  const templateParams = {
    client_name: formData.clientName,
    client_email: formData.clientEmail,
    client_phone: formData.clientPhone,
    service_needed: formData.service,
    appointment_date: formatDate(formData.appointmentDate),
    appointment_time: formatTime(formData.appointmentTime),
    project_notes: formData.projectNotes || 'No additional notes provided.',
    company_email: 'redwingsstech@gmail.com'
  };

  try {
    await emailjs.send(serviceId, templateId, templateParams);
  } catch (error) {
    console.error('EmailJS error:', error);
    throw new Error('We could not send the email automatically. Please verify the EmailJS configuration.');
  }
}

async function generateAppointmentPdf(formData) {
  if (!window.jspdf || !window.jspdf.jsPDF) {
    throw new Error('PDF generator is unavailable. Please refresh and try again.');
  }

  const doc = new window.jspdf.jsPDF();
  const pageWidth = doc.internal.pageSize.getWidth();
  const margin = 18;

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(20);
  doc.text('Red Wingss Techverse', margin, 28);

  doc.setFontSize(12);
  doc.setFont('helvetica', 'normal');
  doc.text('Appointment Confirmation', margin, 40);
  doc.setDrawColor(191, 10, 48);
  doc.setLineWidth(0.8);
  doc.line(margin, 45, pageWidth - margin, 45);

  const details = [
    ['Client Name', formData.clientName],
    ['Email', formData.clientEmail],
    ['Mobile', formData.clientPhone],
    ['Service', formData.service],
    ['Preferred Date', formatDate(formData.appointmentDate)],
    ['Preferred Time', formatTime(formData.appointmentTime)],
    ['Submitted', new Date().toLocaleString()]
  ];

  let y = 60;
  details.forEach(([label, value]) => {
    doc.setFont('helvetica', 'bold');
    doc.text(`${label}:`, margin, y);
    doc.setFont('helvetica', 'normal');
    const text = doc.splitTextToSize(value || '—', pageWidth - margin * 2 - 45);
    doc.text(text, margin + 45, y);
    y += 10 + (text.length - 1) * 6;
  });

  doc.setFont('helvetica', 'bold');
  doc.text('Project Notes', margin, y + 5);
  doc.setFont('helvetica', 'normal');
  const splitNotes = doc.splitTextToSize(formData.projectNotes || 'No additional notes provided.', pageWidth - margin * 2);
  doc.text(splitNotes, margin, y + 15);

  doc.setFont('helvetica', 'italic');
  doc.setTextColor(20, 45, 113);
  doc.text('Our coordination team will confirm within one business day.', margin, doc.internal.pageSize.getHeight() - 30);
  doc.text('Contact: redwingsstech@gmail.com', margin, doc.internal.pageSize.getHeight() - 20);

  const safeDate = formData.appointmentDate || new Date().toISOString().split('T')[0];
  const fileName = `Red-Wingss-Appointment-${safeDate}.pdf`;
  doc.save(fileName);
}

function formatDate(isoDate) {
  if (!isoDate) return '';
  const date = new Date(isoDate + 'T00:00:00');
  return date.toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
}

function formatTime(time) {
  if (!time) return '';
  const [hours, minutes] = time.split(':');
  const date = new Date();
  date.setHours(Number(hours));
  date.setMinutes(Number(minutes));
  return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

function showStatus(statusBox, type, message) {
  if (!statusBox) return;
  statusBox.classList.remove('success', 'error');
  statusBox.classList.add(type === 'success' ? 'success' : 'error');
  statusBox.textContent = message;
  statusBox.style.display = 'block';
}

function hideStatus(statusBox) {
  if (!statusBox) return;
  statusBox.textContent = '';
  statusBox.style.display = 'none';
  statusBox.classList.remove('success', 'error');
}
