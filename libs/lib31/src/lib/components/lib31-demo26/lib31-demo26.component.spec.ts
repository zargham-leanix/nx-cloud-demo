import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib31Demo26Component } from './lib31-demo26.component';

describe('Lib31Demo26Component', () => {
  let component: Lib31Demo26Component;
  let fixture: ComponentFixture<Lib31Demo26Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib31Demo26Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib31Demo26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
