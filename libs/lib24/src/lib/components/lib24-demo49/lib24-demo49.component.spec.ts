import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib24Demo49Component } from './lib24-demo49.component';

describe('Lib24Demo49Component', () => {
  let component: Lib24Demo49Component;
  let fixture: ComponentFixture<Lib24Demo49Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib24Demo49Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib24Demo49Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
