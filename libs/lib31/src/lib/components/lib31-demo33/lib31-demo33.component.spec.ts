import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib31Demo33Component } from './lib31-demo33.component';

describe('Lib31Demo33Component', () => {
  let component: Lib31Demo33Component;
  let fixture: ComponentFixture<Lib31Demo33Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib31Demo33Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib31Demo33Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
