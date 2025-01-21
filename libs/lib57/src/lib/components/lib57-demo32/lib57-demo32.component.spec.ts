import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib57Demo32Component } from './lib57-demo32.component';

describe('Lib57Demo32Component', () => {
  let component: Lib57Demo32Component;
  let fixture: ComponentFixture<Lib57Demo32Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib57Demo32Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib57Demo32Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
