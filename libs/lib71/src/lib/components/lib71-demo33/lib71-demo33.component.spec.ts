import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib71Demo33Component } from './lib71-demo33.component';

describe('Lib71Demo33Component', () => {
  let component: Lib71Demo33Component;
  let fixture: ComponentFixture<Lib71Demo33Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib71Demo33Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib71Demo33Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
