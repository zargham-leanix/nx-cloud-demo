import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib31Demo39Component } from './lib31-demo39.component';

describe('Lib31Demo39Component', () => {
  let component: Lib31Demo39Component;
  let fixture: ComponentFixture<Lib31Demo39Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib31Demo39Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib31Demo39Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
