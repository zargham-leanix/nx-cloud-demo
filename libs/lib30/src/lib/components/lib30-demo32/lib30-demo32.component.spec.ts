import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib30Demo32Component } from './lib30-demo32.component';

describe('Lib30Demo32Component', () => {
  let component: Lib30Demo32Component;
  let fixture: ComponentFixture<Lib30Demo32Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib30Demo32Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib30Demo32Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
