import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib31Demo17Component } from './lib31-demo17.component';

describe('Lib31Demo17Component', () => {
  let component: Lib31Demo17Component;
  let fixture: ComponentFixture<Lib31Demo17Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib31Demo17Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib31Demo17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
