import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib90Demo33Component } from './lib90-demo33.component';

describe('Lib90Demo33Component', () => {
  let component: Lib90Demo33Component;
  let fixture: ComponentFixture<Lib90Demo33Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib90Demo33Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib90Demo33Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
