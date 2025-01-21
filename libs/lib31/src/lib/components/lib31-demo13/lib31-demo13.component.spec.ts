import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib31Demo13Component } from './lib31-demo13.component';

describe('Lib31Demo13Component', () => {
  let component: Lib31Demo13Component;
  let fixture: ComponentFixture<Lib31Demo13Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib31Demo13Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib31Demo13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
