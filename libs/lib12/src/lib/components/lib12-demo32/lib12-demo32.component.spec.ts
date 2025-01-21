import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib12Demo32Component } from './lib12-demo32.component';

describe('Lib12Demo32Component', () => {
  let component: Lib12Demo32Component;
  let fixture: ComponentFixture<Lib12Demo32Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib12Demo32Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib12Demo32Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
