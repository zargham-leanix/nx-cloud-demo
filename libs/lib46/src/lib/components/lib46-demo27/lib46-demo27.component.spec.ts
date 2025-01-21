import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib46Demo27Component } from './lib46-demo27.component';

describe('Lib46Demo27Component', () => {
  let component: Lib46Demo27Component;
  let fixture: ComponentFixture<Lib46Demo27Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib46Demo27Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib46Demo27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
