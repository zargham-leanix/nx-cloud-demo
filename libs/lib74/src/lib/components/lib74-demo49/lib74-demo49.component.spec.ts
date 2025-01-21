import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib74Demo49Component } from './lib74-demo49.component';

describe('Lib74Demo49Component', () => {
  let component: Lib74Demo49Component;
  let fixture: ComponentFixture<Lib74Demo49Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib74Demo49Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib74Demo49Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
