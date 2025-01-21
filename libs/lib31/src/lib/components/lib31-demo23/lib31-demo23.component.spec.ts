import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib31Demo23Component } from './lib31-demo23.component';

describe('Lib31Demo23Component', () => {
  let component: Lib31Demo23Component;
  let fixture: ComponentFixture<Lib31Demo23Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib31Demo23Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib31Demo23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
