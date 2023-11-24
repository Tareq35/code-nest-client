import React from 'react';

const Faq = () => {
    return (
        <div className='w-10/12 lg:w-8/12 mx-auto mb-5'>
            <h5 className='text-5xl text-center mt-3 mb-8'>Frequently Asked Questions</h5>

            <div className="collapse collapse-arrow bg-lime-50 gap-6">
                <input type="radio" name="my-accordion-1" checked="checked" />
                <div className="collapse-title text-xl font-medium">
                    Why should I take an Online Course?
                </div>
                <div className="collapse-content">
                    <p>Students join our online courses for a variety of reasons and come from diverse backgrounds, professions, and age groups. With online courses, you can Advance your skill-set or begin a career change. Take the next step in your formal education. Ease the transition before entering a full-time academic program. Enjoy learning a new topic. Whatever the reason, our online courses are a flexible way of learning about the art world without disrupting your daily life.</p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-lime-50">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">
                    I am a high school student, can I join?
                </div>
                <div className="collapse-content">
                    <p>Courses are open to all students 18 years or older. If you are under 18 years old, please contact us to discuss further.</p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-lime-50">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl font-medium">
                    Can I take more than one course at a time?
                </div>
                <div className="collapse-content">
                    <p>If you are new to online learning, we recommend that you begin with one course. As our courses are offered frequently throughout the year, you can always come back and continue your studies with one or more topics.</p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-lime-50">
                <input type="radio" name="my-accordion-4" />
                <div className="collapse-title text-xl font-medium">
                    How long is my course?
                </div>
                <div className="collapse-content">
                    <p>We currently offer 4-week, 6-week, and 8-week courses. Check the course dates listed online prior to registration. For a 4-week or 6-week course, you can expect to spend 5-7 hours a week reviewing and completing the course material. For an 8-week course, you can expect to spend 8-10 hours a week reviewing and completing the course material. You will also have read-only access to your course in Canvas for 90 days after its conclusion to review the course materials at your leisure.</p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-lime-50">
                <input type="radio" name="my-accordion-5" />
                <div className="collapse-title text-xl font-medium">
                    Do I need specific equipment to take Online Courses?
                </div>
                <div className="collapse-content">
                    <p>You should have an up-to-date web browser such as: Chrome, Safari, Firefox, or Internet Explorer. For more detailed information, please see the guides for supported browsers and basic computer specifications. Our Online Courses can be accessed on a mobile or tablet device, although we strongly encourage you to have access to a desktop or laptop computer and reliable internet connection for certain course components. Former students have told us it is easiest to read discussion threads and complete written assignments on a laptop or desktop computer.</p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-lime-50">
                <input type="radio" name="my-accordion-6" />
                <div className="collapse-title text-xl font-medium">
                    Do I need to by textbooks?
                </div>
                <div className="collapse-content">
                    <p>All the reading materials you are required to access are included with your course. Instructors may provide recommended and suggested texts for further exploration.</p>
                </div>
            </div>
        </div>
    );
};

export default Faq;