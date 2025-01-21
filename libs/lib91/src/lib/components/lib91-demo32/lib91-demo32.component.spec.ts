import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib91Demo32Component } from './lib91-demo32.component';

describe('Lib91Demo32Component', () => {
  let component: Lib91Demo32Component;
  let fixture: ComponentFixture<Lib91Demo32Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib91Demo32Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib91Demo32Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
