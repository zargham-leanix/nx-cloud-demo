import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib44Demo32Component } from './lib44-demo32.component';

describe('Lib44Demo32Component', () => {
  let component: Lib44Demo32Component;
  let fixture: ComponentFixture<Lib44Demo32Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib44Demo32Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib44Demo32Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
