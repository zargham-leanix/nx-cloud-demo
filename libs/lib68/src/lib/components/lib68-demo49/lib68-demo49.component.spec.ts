import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib68Demo49Component } from './lib68-demo49.component';

describe('Lib68Demo49Component', () => {
  let component: Lib68Demo49Component;
  let fixture: ComponentFixture<Lib68Demo49Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib68Demo49Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib68Demo49Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
