import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib31Demo37Component } from './lib31-demo37.component';

describe('Lib31Demo37Component', () => {
  let component: Lib31Demo37Component;
  let fixture: ComponentFixture<Lib31Demo37Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib31Demo37Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib31Demo37Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
