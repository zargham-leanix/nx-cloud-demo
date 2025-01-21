import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib31Demo46Component } from './lib31-demo46.component';

describe('Lib31Demo46Component', () => {
  let component: Lib31Demo46Component;
  let fixture: ComponentFixture<Lib31Demo46Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib31Demo46Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib31Demo46Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
