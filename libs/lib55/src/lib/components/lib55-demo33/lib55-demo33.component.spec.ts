import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib55Demo33Component } from './lib55-demo33.component';

describe('Lib55Demo33Component', () => {
  let component: Lib55Demo33Component;
  let fixture: ComponentFixture<Lib55Demo33Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib55Demo33Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib55Demo33Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
