import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib94Demo49Component } from './lib94-demo49.component';

describe('Lib94Demo49Component', () => {
  let component: Lib94Demo49Component;
  let fixture: ComponentFixture<Lib94Demo49Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib94Demo49Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib94Demo49Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
