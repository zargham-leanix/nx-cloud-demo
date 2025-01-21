import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib31Demo25Component } from './lib31-demo25.component';

describe('Lib31Demo25Component', () => {
  let component: Lib31Demo25Component;
  let fixture: ComponentFixture<Lib31Demo25Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib31Demo25Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib31Demo25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
