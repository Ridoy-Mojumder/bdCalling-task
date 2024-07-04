const QuestionSection = () => {
    return (
        <div className="p-10">
            <button className="border border-gray-700 rounded-full px-4 py-2 mb-4 text-base text-gray-700 hover:bg-[#FFFFF5]">
                FAQ
            </button>
            <h1 className="text-4xl mb-6 font-semibold">Frequently Asked Questions</h1>
            <div className="space-y-6">
                <div className="collapse collapse-arrow bg-[#FFFFF5] rounded-lg p-4">
                    <input type="radio" name="my-accordion-2" defaultChecked />
                    <div className="collapse-title text-xl font-semibold">What are your office hours?</div>
                    <div className="collapse-content">
                        <p>Our office hours vary by location, but typically we are open Monday through Friday from 8:00 AM to 5:00 PM. Some locations may offer extended hours or weekend appointments. Please contact your nearest clinic for specific hours.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-[#FFFFF5] rounded-lg p-4">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-semibold">How can I schedule an appointment?</div>
                    <div className="collapse-content">
                        <p>To schedule an appointment, you can visit our website and use our online booking system, or you can call our clinic directly. Our staff will assist you in finding a convenient time slot.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-[#FFFFF5] rounded-lg p-4">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-semibold">Do you accept insurance?</div>
                    <div className="collapse-content">
                        <p>Yes, we accept most major insurance plans. It is recommended to verify with your insurance provider before your appointment to ensure coverage.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-[#FFFFF5] rounded-lg p-4">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-semibold">What should I bring to my appointment?</div>
                    <div className="collapse-content">
                        <p>For your appointment, please bring your insurance card, any relevant medical records or test results, and a list of medications you are currently taking.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-[#FFFFF5] rounded-lg p-4">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-semibold">Do you offer telemedicine appointments?</div>
                    <div className="collapse-content">
                        <p>Yes, we offer telemedicine appointments for certain types of visits. Please contact our clinic to see if your appointment qualifies for a telemedicine option.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QuestionSection;
