import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib34Demo49Component } from './lib34-demo49.component';

describe('Lib34Demo49Component', () => {
  let component: Lib34Demo49Component;
  let fixture: ComponentFixture<Lib34Demo49Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib34Demo49Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib34Demo49Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
