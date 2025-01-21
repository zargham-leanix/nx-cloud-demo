import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib28Demo32Component } from './lib28-demo32.component';

describe('Lib28Demo32Component', () => {
  let component: Lib28Demo32Component;
  let fixture: ComponentFixture<Lib28Demo32Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib28Demo32Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib28Demo32Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
