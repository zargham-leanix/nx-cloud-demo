import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib42Demo49Component } from './lib42-demo49.component';

describe('Lib42Demo49Component', () => {
  let component: Lib42Demo49Component;
  let fixture: ComponentFixture<Lib42Demo49Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib42Demo49Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib42Demo49Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
