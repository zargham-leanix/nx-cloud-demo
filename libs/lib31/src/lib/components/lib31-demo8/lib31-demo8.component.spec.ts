import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib31Demo8Component } from './lib31-demo8.component';

describe('Lib31Demo8Component', () => {
  let component: Lib31Demo8Component;
  let fixture: ComponentFixture<Lib31Demo8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib31Demo8Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib31Demo8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
