import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib57Demo33Component } from './lib57-demo33.component';

describe('Lib57Demo33Component', () => {
  let component: Lib57Demo33Component;
  let fixture: ComponentFixture<Lib57Demo33Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib57Demo33Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib57Demo33Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
