import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib78Demo32Component } from './lib78-demo32.component';

describe('Lib78Demo32Component', () => {
  let component: Lib78Demo32Component;
  let fixture: ComponentFixture<Lib78Demo32Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib78Demo32Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib78Demo32Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
