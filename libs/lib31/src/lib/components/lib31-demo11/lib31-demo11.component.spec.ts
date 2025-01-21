import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib31Demo11Component } from './lib31-demo11.component';

describe('Lib31Demo11Component', () => {
  let component: Lib31Demo11Component;
  let fixture: ComponentFixture<Lib31Demo11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib31Demo11Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib31Demo11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
