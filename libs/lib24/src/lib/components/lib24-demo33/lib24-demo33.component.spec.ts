import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib24Demo33Component } from './lib24-demo33.component';

describe('Lib24Demo33Component', () => {
  let component: Lib24Demo33Component;
  let fixture: ComponentFixture<Lib24Demo33Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib24Demo33Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib24Demo33Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
