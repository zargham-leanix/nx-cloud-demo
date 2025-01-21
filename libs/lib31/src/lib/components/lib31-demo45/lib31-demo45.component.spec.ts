import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib31Demo45Component } from './lib31-demo45.component';

describe('Lib31Demo45Component', () => {
  let component: Lib31Demo45Component;
  let fixture: ComponentFixture<Lib31Demo45Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib31Demo45Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib31Demo45Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
