import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib5Demo32Component } from './lib5-demo32.component';

describe('Lib5Demo32Component', () => {
  let component: Lib5Demo32Component;
  let fixture: ComponentFixture<Lib5Demo32Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib5Demo32Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib5Demo32Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
