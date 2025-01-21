import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib31Demo2Component } from './lib31-demo2.component';

describe('Lib31Demo2Component', () => {
  let component: Lib31Demo2Component;
  let fixture: ComponentFixture<Lib31Demo2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib31Demo2Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib31Demo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
