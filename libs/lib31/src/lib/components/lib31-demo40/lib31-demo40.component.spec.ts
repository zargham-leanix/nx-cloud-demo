import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib31Demo40Component } from './lib31-demo40.component';

describe('Lib31Demo40Component', () => {
  let component: Lib31Demo40Component;
  let fixture: ComponentFixture<Lib31Demo40Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib31Demo40Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib31Demo40Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
