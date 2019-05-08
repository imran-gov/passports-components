'use strict';

describe('hmpoDate', () => {
    let locals;

    beforeEach(() => {
        locals = {
            options: {
                fields: {
                    'my-input': {
                        validate: 'required'
                    }
                }
            }
        };
    });

    it('renders inputs with ids and names', () => {
        const $ = render('hmpoDate', { id: 'my-input' }, locals);

        const $day = $('.govuk-input').eq(0);
        expect($day.attr('id')).to.equal('my-input-day');
        expect($day.attr('name')).to.equal('my-input-day');
        expect($day.attr('maxlength')).to.equal('2');
        const $month = $('.govuk-input').eq(1);
        expect($month.attr('id')).to.equal('my-input-month');
        expect($month.attr('name')).to.equal('my-input-month');
        expect($month.attr('maxlength')).to.equal('2');
        const $year = $('.govuk-input').eq(2);
        expect($year.attr('id')).to.equal('my-input-year');
        expect($year.attr('name')).to.equal('my-input-year');
        expect($year.attr('maxlength')).to.equal('4');
    });

    it('sets id on fieldset', () => {
        const $ = render('hmpoDate', { id: 'my-input' }, locals);
        const $fieldset = $('.govuk-fieldset');
        expect($fieldset.attr('id')).to.equal('my-input-fieldset');
    });

    it('renders legend as header', () => {
        const $ = render('hmpoDate', { id: 'my-input', isPageHeading: true }, locals);
        const $legend = $('.govuk-fieldset__legend');
        expect($legend.attr('class')).to.equal('govuk-fieldset__legend govuk-fieldset__legend--l');
        const $legendH1 = $('.govuk-fieldset__legend h1').parent();
        expect($legendH1.html()).to.equal('<h1 class="govuk-fieldset__heading">fields.my-input.legend</h1>');
    });
});
