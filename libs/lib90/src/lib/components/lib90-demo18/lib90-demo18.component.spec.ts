import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib90Demo18Component } from './lib90-demo18.component';

describe('Lib90Demo18Component', () => {
  let component: Lib90Demo18Component;
  let fixture: ComponentFixture<Lib90Demo18Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib90Demo18Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib90Demo18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
