import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib98Demo16Component } from './lib98-demo16.component';

describe('Lib98Demo16Component', () => {
  let component: Lib98Demo16Component;
  let fixture: ComponentFixture<Lib98Demo16Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib98Demo16Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib98Demo16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
