import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib31Demo14Component } from './lib31-demo14.component';

describe('Lib31Demo14Component', () => {
  let component: Lib31Demo14Component;
  let fixture: ComponentFixture<Lib31Demo14Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib31Demo14Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib31Demo14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
