import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib44Demo49Component } from './lib44-demo49.component';

describe('Lib44Demo49Component', () => {
  let component: Lib44Demo49Component;
  let fixture: ComponentFixture<Lib44Demo49Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib44Demo49Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib44Demo49Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
