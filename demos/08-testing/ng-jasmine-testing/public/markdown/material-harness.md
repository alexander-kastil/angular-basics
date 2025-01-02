- Material Harnesses used in `material.component.spec.ts` facilitate testing of Material components. 

- Test Harness is a wrapper provided by the [Material CDK](https://material.angular.io/cdk/test-harnesses/overview) around a Material component that exposes the component's API for testing. 

- As a reference look through the docs of the [Material Slider](https://material.angular.io/components/slider/api#material-slider-testing-classes)

    ```typescript
    it('should btnReset the slider when btnReset is clicked', async () => {
        btnResetHarness = await loader.getHarness(
            MatButtonHarness.with({ text: 'Reset' })
        );
        sliderHarness = await loader.getHarness(MatSliderHarness);
        await btnResetHarness.click();
        const thumb = await sliderHarness.getEndThumb();
        expect(await thumb.getValue()).toBe(1);
    });
    ```