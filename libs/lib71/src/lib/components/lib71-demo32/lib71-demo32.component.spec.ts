import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib71Demo32Component } from './lib71-demo32.component';

describe('Lib71Demo32Component', () => {
  let component: Lib71Demo32Component;
  let fixture: ComponentFixture<Lib71Demo32Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib71Demo32Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib71Demo32Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
