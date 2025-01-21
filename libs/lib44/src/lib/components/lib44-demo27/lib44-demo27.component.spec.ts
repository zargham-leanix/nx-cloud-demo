import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib44Demo27Component } from './lib44-demo27.component';

describe('Lib44Demo27Component', () => {
  let component: Lib44Demo27Component;
  let fixture: ComponentFixture<Lib44Demo27Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib44Demo27Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib44Demo27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
