import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib31Demo4Component } from './lib31-demo4.component';

describe('Lib31Demo4Component', () => {
  let component: Lib31Demo4Component;
  let fixture: ComponentFixture<Lib31Demo4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib31Demo4Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib31Demo4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
