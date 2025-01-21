import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib85Demo32Component } from './lib85-demo32.component';

describe('Lib85Demo32Component', () => {
  let component: Lib85Demo32Component;
  let fixture: ComponentFixture<Lib85Demo32Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib85Demo32Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib85Demo32Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
