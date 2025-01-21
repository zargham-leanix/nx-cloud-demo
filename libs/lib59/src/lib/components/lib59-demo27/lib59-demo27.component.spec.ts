import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib59Demo27Component } from './lib59-demo27.component';

describe('Lib59Demo27Component', () => {
  let component: Lib59Demo27Component;
  let fixture: ComponentFixture<Lib59Demo27Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib59Demo27Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib59Demo27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
