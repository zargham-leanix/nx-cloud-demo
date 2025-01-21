import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib86Demo32Component } from './lib86-demo32.component';

describe('Lib86Demo32Component', () => {
  let component: Lib86Demo32Component;
  let fixture: ComponentFixture<Lib86Demo32Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib86Demo32Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib86Demo32Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
