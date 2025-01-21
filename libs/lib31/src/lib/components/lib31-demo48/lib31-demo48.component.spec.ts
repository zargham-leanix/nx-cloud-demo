import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib31Demo48Component } from './lib31-demo48.component';

describe('Lib31Demo48Component', () => {
  let component: Lib31Demo48Component;
  let fixture: ComponentFixture<Lib31Demo48Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib31Demo48Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib31Demo48Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
