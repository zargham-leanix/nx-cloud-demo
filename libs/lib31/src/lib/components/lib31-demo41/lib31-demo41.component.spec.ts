import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib31Demo41Component } from './lib31-demo41.component';

describe('Lib31Demo41Component', () => {
  let component: Lib31Demo41Component;
  let fixture: ComponentFixture<Lib31Demo41Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib31Demo41Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib31Demo41Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
