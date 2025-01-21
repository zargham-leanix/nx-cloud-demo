import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib31Demo10Component } from './lib31-demo10.component';

describe('Lib31Demo10Component', () => {
  let component: Lib31Demo10Component;
  let fixture: ComponentFixture<Lib31Demo10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib31Demo10Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib31Demo10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
