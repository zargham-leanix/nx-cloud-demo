import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib31Demo49Component } from './lib31-demo49.component';

describe('Lib31Demo49Component', () => {
  let component: Lib31Demo49Component;
  let fixture: ComponentFixture<Lib31Demo49Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib31Demo49Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib31Demo49Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
