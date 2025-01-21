import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib31Demo15Component } from './lib31-demo15.component';

describe('Lib31Demo15Component', () => {
  let component: Lib31Demo15Component;
  let fixture: ComponentFixture<Lib31Demo15Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib31Demo15Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib31Demo15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
