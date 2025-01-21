import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib31Demo43Component } from './lib31-demo43.component';

describe('Lib31Demo43Component', () => {
  let component: Lib31Demo43Component;
  let fixture: ComponentFixture<Lib31Demo43Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib31Demo43Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib31Demo43Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
