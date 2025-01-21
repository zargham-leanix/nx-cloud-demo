import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib31Demo6Component } from './lib31-demo6.component';

describe('Lib31Demo6Component', () => {
  let component: Lib31Demo6Component;
  let fixture: ComponentFixture<Lib31Demo6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib31Demo6Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib31Demo6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
