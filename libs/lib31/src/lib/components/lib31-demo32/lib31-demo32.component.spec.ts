import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib31Demo32Component } from './lib31-demo32.component';

describe('Lib31Demo32Component', () => {
  let component: Lib31Demo32Component;
  let fixture: ComponentFixture<Lib31Demo32Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib31Demo32Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib31Demo32Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
