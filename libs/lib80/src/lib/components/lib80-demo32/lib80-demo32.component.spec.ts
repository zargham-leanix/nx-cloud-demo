import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib80Demo32Component } from './lib80-demo32.component';

describe('Lib80Demo32Component', () => {
  let component: Lib80Demo32Component;
  let fixture: ComponentFixture<Lib80Demo32Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib80Demo32Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib80Demo32Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
