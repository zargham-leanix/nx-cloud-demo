import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib31Demo34Component } from './lib31-demo34.component';

describe('Lib31Demo34Component', () => {
  let component: Lib31Demo34Component;
  let fixture: ComponentFixture<Lib31Demo34Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib31Demo34Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib31Demo34Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
