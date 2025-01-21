import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib88Demo33Component } from './lib88-demo33.component';

describe('Lib88Demo33Component', () => {
  let component: Lib88Demo33Component;
  let fixture: ComponentFixture<Lib88Demo33Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib88Demo33Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib88Demo33Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
