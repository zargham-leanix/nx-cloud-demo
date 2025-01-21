import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib74Demo27Component } from './lib74-demo27.component';

describe('Lib74Demo27Component', () => {
  let component: Lib74Demo27Component;
  let fixture: ComponentFixture<Lib74Demo27Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib74Demo27Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib74Demo27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
