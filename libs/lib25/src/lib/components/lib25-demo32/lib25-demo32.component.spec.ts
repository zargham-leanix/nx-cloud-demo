import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib25Demo32Component } from './lib25-demo32.component';

describe('Lib25Demo32Component', () => {
  let component: Lib25Demo32Component;
  let fixture: ComponentFixture<Lib25Demo32Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib25Demo32Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib25Demo32Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
