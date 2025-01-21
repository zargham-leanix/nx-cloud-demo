import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib91Demo45Component } from './lib91-demo45.component';

describe('Lib91Demo45Component', () => {
  let component: Lib91Demo45Component;
  let fixture: ComponentFixture<Lib91Demo45Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib91Demo45Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib91Demo45Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
