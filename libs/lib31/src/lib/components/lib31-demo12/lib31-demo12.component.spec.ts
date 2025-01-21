import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib31Demo12Component } from './lib31-demo12.component';

describe('Lib31Demo12Component', () => {
  let component: Lib31Demo12Component;
  let fixture: ComponentFixture<Lib31Demo12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib31Demo12Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib31Demo12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
