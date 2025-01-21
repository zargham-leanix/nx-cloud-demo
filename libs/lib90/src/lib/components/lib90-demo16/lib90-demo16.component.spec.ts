import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib90Demo16Component } from './lib90-demo16.component';

describe('Lib90Demo16Component', () => {
  let component: Lib90Demo16Component;
  let fixture: ComponentFixture<Lib90Demo16Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib90Demo16Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib90Demo16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
