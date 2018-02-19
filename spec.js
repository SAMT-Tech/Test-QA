describe('NBL Login Validation', function() {
 it('Login With Valid Data', function() {
 browser.get('https://msmecor.com/app/account#/login');
 element(by.id('username')).sendKeys('nbl'); 
 element(by.id('password')).sendKeys('msm12!!2017');
 element(by.xpath('input[@value='Login']')).click();
 var dashboardTitle= element(by.xpath('div[@class='dashboard-title']').getText();
 expect(dashboardTitle).toEqual('NBL Main Dashboard (Beta)');
  });
});
