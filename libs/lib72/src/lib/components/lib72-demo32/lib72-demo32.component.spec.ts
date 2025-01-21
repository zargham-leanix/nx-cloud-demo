import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib72Demo32Component } from './lib72-demo32.component';

describe('Lib72Demo32Component', () => {
  let component: Lib72Demo32Component;
  let fixture: ComponentFixture<Lib72Demo32Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib72Demo32Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib72Demo32Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
