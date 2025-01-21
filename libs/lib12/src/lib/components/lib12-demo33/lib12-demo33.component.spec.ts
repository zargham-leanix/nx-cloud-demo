import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib12Demo33Component } from './lib12-demo33.component';

describe('Lib12Demo33Component', () => {
  let component: Lib12Demo33Component;
  let fixture: ComponentFixture<Lib12Demo33Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib12Demo33Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib12Demo33Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
