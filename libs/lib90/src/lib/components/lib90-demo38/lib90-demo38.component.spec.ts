import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib90Demo38Component } from './lib90-demo38.component';

describe('Lib90Demo38Component', () => {
  let component: Lib90Demo38Component;
  let fixture: ComponentFixture<Lib90Demo38Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib90Demo38Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib90Demo38Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
