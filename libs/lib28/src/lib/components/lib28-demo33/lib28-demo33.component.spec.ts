import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib28Demo33Component } from './lib28-demo33.component';

describe('Lib28Demo33Component', () => {
  let component: Lib28Demo33Component;
  let fixture: ComponentFixture<Lib28Demo33Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib28Demo33Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib28Demo33Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
