import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib31Demo3Component } from './lib31-demo3.component';

describe('Lib31Demo3Component', () => {
  let component: Lib31Demo3Component;
  let fixture: ComponentFixture<Lib31Demo3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib31Demo3Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib31Demo3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
