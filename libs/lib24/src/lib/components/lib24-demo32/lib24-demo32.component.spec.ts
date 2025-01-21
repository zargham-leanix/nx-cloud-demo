import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib24Demo32Component } from './lib24-demo32.component';

describe('Lib24Demo32Component', () => {
  let component: Lib24Demo32Component;
  let fixture: ComponentFixture<Lib24Demo32Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib24Demo32Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib24Demo32Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
