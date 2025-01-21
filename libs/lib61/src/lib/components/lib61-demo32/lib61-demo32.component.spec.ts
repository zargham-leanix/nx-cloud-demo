import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib61Demo32Component } from './lib61-demo32.component';

describe('Lib61Demo32Component', () => {
  let component: Lib61Demo32Component;
  let fixture: ComponentFixture<Lib61Demo32Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib61Demo32Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib61Demo32Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
